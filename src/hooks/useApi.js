import { useState } from 'react';

const useFetch = apiFunc => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const results = await apiFunc(...args);
      setData(results.data);
    } catch (error) {
      setError(error.message || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
