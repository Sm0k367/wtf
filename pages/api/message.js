// pages/api/message.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { prompt } = req.body;

  // Example: Call out to Groq (or another AI/LLM API) here
  // You could use fetch or an API client library!
  // This is scaffold code — plug in your real API call below.

  try {
    // const aiRes = await fetch(process.env.GROQ_API_BASE, { ... })
    // const data = await aiRes.json();
    // For now, just echo what's sent in:
    res.status(200).json({
      reply: `AI Host says: "${prompt}" (Real LLM reply coming soon!)`,
      source: 'mock'
    });
  } catch (e) {
    res.status(500).json({ error: 'AI backend error' });
  }
}
