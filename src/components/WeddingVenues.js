import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from "./Button";

const images = [
  'https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1569810020669-aa9d38003ea7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  
  'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next hover:text-white hidden md:block " onClick={onClick}>
      <KeyboardArrowRightIcon/>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev  hover:text-white hidden md:block" onClick={onClick}>
      <KeyboardArrowLeftIcon/>
    </div>
  );
};

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  if (!isClient) {
    return null; // Return null on server side to avoid mismatch
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-4 mt-[5%]">Top weddings venues</h1>
      <div className="container mx-auto px-[10%] py-[5%]">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className={`${idx === imageIndex ? "slide activeSlide" : "slide back"}`}>
              <img src={img} alt={`slide-${idx}`} className="sm:h-[10rem] md:h-[10rem] lg:h-[25rem]" />
            </div>
          ))}
        </Slider>
      </div>
      <br/><br/>
      <Button/>
      <br/><br/>
    </>
  );
}

export default App;
