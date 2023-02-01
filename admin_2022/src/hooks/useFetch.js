import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const baseUrl = 'https://yth2veim6m.hk.aircode.run';
  // const preUrl = '/api';
  // console.log('url', preUrl + url);
  let newUrl = baseUrl + url;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // console.log('url:', url);
        const res = await axios.get(newUrl);
        // console.log(res.data.result);

        setData(res.data.result);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [newUrl]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(newUrl);

      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
