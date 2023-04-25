import { useEffect, useState } from 'react';
import axios from 'axios';

const usePost = (url, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const stateRef = useRef();

  async function fetchData(params) {
    setLoading(true);
    try {
      const res = await axios.post(url, params);
      console.log('res headers:', res.headers);

      setData(res.data.result);
      // stateRef.currentData = data;
    } catch (err) {
      setError(err);
      console.log('err:', err);
    }
    setLoading(false);
  }

  // useEffect(() => {
  //   console.log('fetchData result:', data);
  // }, [data]);
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
