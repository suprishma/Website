export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text || text.trim().length === 0) {
      return Response.json({ error: 'Text is required' }, { status: 400 });
    }

    const HF_API_TOKEN = process.env.HF_API_TOKEN;

    if (!HF_API_TOKEN) {
      return Response.json(
        { error: 'Hugging Face API token not configured' },
        { status: 500 }
      );
    }

    // Make sure this exactly matches your HF repo name (case-sensitive)
    const MODEL_ID = 'Suprishma/mbart-lora-nepali';
    const url = `https://api-inference.huggingface.co/models/${MODEL_ID}`;

    console.log('Calling HF Inference API:', url);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HF_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: text,
        parameters: {
          max_length: 150,
          min_length: 30,
          num_beams: 5,
          early_stopping: true,
          no_repeat_ngram_size: 3,
          forced_bos_token_id: 110, // ne_NP token id for mBART
        },
        options: {
          wait_for_model: true,
        },
      }),
    });

    // Log full HF response for debugging
    const rawText = await response.text();
    console.log('HF response status:', response.status);
    console.log('HF response body:', rawText);

    if (!response.ok) {
      let errorMessage = `Hugging Face API error: ${response.status}`;
      try {
        const errorData = JSON.parse(rawText);
        errorMessage = errorData.error || errorMessage;
      } catch {
        // rawText wasn't JSON, use status message
      }
      return Response.json({ error: errorMessage }, { status: response.status });
    }

    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      return Response.json(
        { error: 'Could not parse response from model' },
        { status: 500 }
      );
    }

    // Standard summarization pipeline: [{ summary_text: "..." }]
    if (Array.isArray(data) && (data[0] as { summary_text?: string })?.summary_text) {
      return Response.json({ summary: (data[0] as { summary_text: string }).summary_text });
    }

    // Seq2seq / text2text generation: [{ generated_text: "..." }]
    if (Array.isArray(data) && (data[0] as { generated_text?: string })?.generated_text) {
      return Response.json({ summary: (data[0] as { generated_text: string }).generated_text });
    }

    // Unexpected shape — return raw so you can see what came back
    console.error('Unexpected HF response shape:', data);
    return Response.json(
      { error: `Unexpected response format: ${JSON.stringify(data).slice(0, 200)}` },
      { status: 500 }
    );

  } catch (error) {
    console.error('Summarize route error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}