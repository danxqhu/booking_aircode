import React from 'react';
import './propertyList.scss';
import useFetch from '../../hooks/useFetch';
import Api from '../../utils/Api';

export default function PropertyList() {
  const { data, loading, error } = useFetch(Api.countByType);
  // console.log(data);
  const images = [
    'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
    'https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',
    'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',
    'https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
    'https://r-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=',
  ];
  const typeName = ['hotel', 'apartments', 'resorts', 'villas', 'cabins'];
  // console.log('data', data);
  // console.log('Loading', loading);
  return (
    <div className="pList">
      {loading ? (
        'Loading'
      ) : (
        <>
          {data &&
            data[0] &&
            images.map((img, index) => (
              <div className="pListItem" key={index}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{typeName[index]}</h1>
                  <h2>
                    {data[index]} {typeName[index]}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}
