import { useEffect, useState } from 'react';
import axios from 'axios';

const usePost = (url, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.post(url, params);

        setData(res.data.result);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const rePost = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url, params);

      setData(res.data.result);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, rePost };
};

export default usePost;
