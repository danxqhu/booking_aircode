import { useEffect, useState } from 'react';
import axios from 'axios';

const usePost = (url, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData(params) {
    setLoading(true);
    try {
      const res = await axios.post(url, params);

      setData(res.data.result);

      console.log('fetchData result:', res.data.result, params);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }
  // fetchData();

  // const rePost = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get(url, params);

  //     setData(res.data.result);
  //   } catch (err) {
  //     setError(err);
  //   }
  //   setLoading(false);
  // };

  return { fetchData, data, loading, error };
};

export default usePost;
