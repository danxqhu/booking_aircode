import { useEffect, useState } from 'react';
import axios from 'axios';
// import store from '../store/index';
import { showloading, hideloading } from '../store/actions/loading';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { toOpen, toClose } from '../features/loading/loadingSlice';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   loading ? dispatch(toOpen()) : dispatch(toClose());
  // }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // store.dispatch(showloading(true));

      // console.log(store.getState());
      try {
        // dispatch(toOpen());
        // console.log('url:', url);
        const res = await axios.get(url);
        // console.log(res.data.result);

        setData(res.data.result);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
      // store.dispatch(hideloading(false));
      // dispatch(toClose());
      // console.log(store.getState());
    };
    fetchData();

    // const unsubscribe = store.subscribe(fetchData);
    // unsubscribe();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    // store.dispatch(showloading(true));
    // dispatch(toOpen());
    try {
      const res = await axios.get(url);

      setData(res.data.result);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
    // store.dispatch(hideloading(false));
    // dispatch(toClose());
  };

  // const unsubscribe = store.subscribe(reFetch);
  // unsubscribe();

  return { data, loading, error, reFetch };
};

export default useFetch;
