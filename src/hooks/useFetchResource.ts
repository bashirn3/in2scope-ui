import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchResource = (url: string) => {
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const response = await axios.get(url);   

        setResource(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching resource:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [url]);

  return { resource, loading, error };
};
