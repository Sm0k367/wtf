// hooks/useGroqApi.js
import { useState } from 'react';

export default function useGroqApi(apiRoute = '/api/message') {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function callGroq(payload) {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(apiRoute, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      setData(json);
      return json;
    } catch (e) {
      setError(e);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { callGroq, loading, data, error };
}
