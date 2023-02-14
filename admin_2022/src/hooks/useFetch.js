import { useEffect, useState } from 'react';
import axios from 'axios';
import store from '../store/index';
import { showloading, hideloading } from '../store/actions/loading';
import { connect } from 'react-redux';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const baseUrl = 'https://yth2veim6m.hk.aircode.run';
  let newUrl = baseUrl + url;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      store.dispatch(showloading(true));

      console.log(store.getState());
      try {
        // console.log('url:', url);
        const res = await axios.get(newUrl);
        // console.log(res.data.result);

        setData(res.data.result);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
      store.dispatch(hideloading(false));
      console.log(store.getState());
    };
    fetchData();

    // const unsubscribe = store.subscribe(fetchData);
    // unsubscribe();
  }, [newUrl]);

  const reFetch = async () => {
    setLoading(true);
    store.dispatch(showloading(true));
    try {
      const res = await axios.get(newUrl);

      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
    store.dispatch(hideloading(false));
  };

  // const unsubscribe = store.subscribe(reFetch);
  // unsubscribe();

  return { data, loading, error, reFetch };
};

export default useFetch;
