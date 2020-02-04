import { useEffect, useState, useCallback } from 'react';

export const useAsync = (request) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const req = async () => {
      try {
        setLoading(true);
        const { data } = await request();
        setData(data);
      } catch ({ response }) {
        setError(response);
      } finally {
        setLoading(false)
      }
    }
    req();
  }, [request]);

  return [data, loading, error];
}