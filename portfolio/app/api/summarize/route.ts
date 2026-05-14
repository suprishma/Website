export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text || text.trim().length === 0) {
      return Response.json({ error: 'Text is required' }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error('GROQ_API_KEY is missing');
      return Response.json({ error: 'API key not configured' }, { status: 500 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: `Please summarize the following text concisely:\n\n${text}`,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Groq API error:', JSON.stringify(data));
      return Response.json({ error: `API error: ${data?.error?.message || 'Unknown error'}` }, { status: 500 });
    }

    const summary = data.choices?.[0]?.message?.content || 'No summary generated.';
    return Response.json({ summary });

  } catch (error) {
    console.error('Error in summarize API:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}