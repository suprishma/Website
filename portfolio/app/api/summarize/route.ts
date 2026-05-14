export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text || text.trim().length === 0) {
      return Response.json({ error: 'Text is required' }, { status: 400 });
    }

    const response = await fetch('http://localhost:8000/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json({ error: data.detail || 'Error' }, { status: 500 });
    }

    return Response.json({ summary: data.summary });

  } catch (error) {
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}