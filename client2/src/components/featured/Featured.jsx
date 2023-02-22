import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featured.scss';
import Api from '../../utils/Api';

export default function Featured() {
  const { data, loading, error } = useFetch(Api.getcities);
  // console.log(data, loading);
  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683831.jpg?k=bbe0665d459d2ca7a7be29dbae2f8f4c13924f320da1a2a7bdec4f30b1e9470a&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>Shanghai</h1>
              <h2>{data[0]?.cities[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683681.jpg?k=f832825373d70572c6e9caf42ec58a9290ff0e6d17b2ab1bb4fa7f36c5d9b3a9&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>Beijing</h1>
              <h2>{data[0]?.cities[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683836.jpg?k=3b943a100222fee2a03c5b10d8d1b3f93753aa2725abdc91b75c4c7184b0e6e1&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>Shenzhen</h1>
              <h2>{data[0]?.cities[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683767.jpg?k=bb33bb77be173f09b5e338b8e7ad3094e8ed6636005c97abfe365d3b8515f558&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>Guangzhou</h1>
              <h2>{data[0]?.cities[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://ac-a.static.booking.cn/xdata/images/city/600x600/683769.jpg?k=0e0f19efd51ad2ed1bbba910d7a343051fa9e2400bbb5bc97f2c49e19ca98d66&o="
              alt=""
            />
            <div className="featuredTitles">
              <h1>Hangzhou</h1>
              <h2>{data[0]?.cities[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
