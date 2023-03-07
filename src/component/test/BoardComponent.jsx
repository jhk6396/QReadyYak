import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../nav/BotNavbar';
import Navbar from '../nav/TopNavbar';
import banner from 'C:/Users/82104/Desktop/ToyProject/exam/src/main/reactfront/src/images/QReadyBanner.png'
import Slider from 'react-slick';

const BoardComponent = () => {
  const [list, setList] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:8080/board/list")
    .then(res => setList(res.data))
    .catch(err => console.log(err));
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  const Banner = () => {
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img src={banner} className="" />
        </div>
      </Slider>
    </div>
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <div id='main'></div>
      <Footer />
    </div>
  )
}

export default BoardComponent