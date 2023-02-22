import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import './hotel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserve/Reserve';
import Api from '../../utils/Api';
import usePost from '../../hooks/usePost';
import { getSearchInfo, stringToDate } from '../../utils/Tool';
import formatDistance from 'date-fns/formatDistance';

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = index => {
    // console.log(index);
    setSlideNumber(index);
    document.body.style.overflow = 'hidden';
    setOpen(true);
  };
  const handleClose = () => {
    document.body.style.overflow = 'unset';
    setOpen(false);
  };

  let info = getSearchInfo();

  const location = useLocation();
  const id = location.pathname.split('/')[2];
  console.log(id, info);

  // const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(info.dates);
  // const [options, setOptions] = useState(info.options);
  const { fetchData, data, loading, error } = usePost(Api.searchhotelsbyid, { id: id });

  useEffect(() => {
    fetchData({ id: id });
  }, [id]);

  // const { dates, options } = useContext(SearchContext);
  console.log(data);

  const day = formatDistance(stringToDate(dates[0].endDate), stringToDate(dates[0].startDate));
  let days = parseInt(day.split(' ')[0]);
  // console.log(days, typeof days);

  // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // function dayDifference(date1, date2) {
  //   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleMove = direction => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate('/login');
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      {loading ? (
        'Loading'
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={handleClose}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('l')}></FontAwesomeIcon>
              <div className="sliderWrapper">
                <img src={data.photos[slideNumber].src} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('r')}></FontAwesomeIcon>
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow" onClick={handleClick}>
              Reserve or Book Now!
            </button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <span>{data.address}</span>
            </div>
            <div className="hotelDistance">
              <span>Great location – {data.distance}m from center</span>
            </div>
            <div className="hotelPriceHighLight">
              <span>Great for Two Travelers over {data.cheapestPrice}</span>
            </div>
            <div className="hotelImages">
              {data.photos?.map((photo, index) => (
                <div className="hotelImgWrapper" key={index}>
                  <img onClick={() => handleOpen(index)} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>Top Location: Highly rated by recent guests (8.8)</span>
                <h2>{/* <b>${days * data.cheapestPrice * options.room}</b> ({days} nights) */}</h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList></MailList>
          <Footer></Footer>
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}></Reserve>}
    </div>
  );
}
