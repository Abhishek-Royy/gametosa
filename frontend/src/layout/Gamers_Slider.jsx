import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import gamersData from "../data/gamers.json";

function Gamers_Slider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="wrapper-slider  mt-5">
      <Slider {...settings}>
        {gamersData.map((item, index) => (
          <div key={index} className=" h-auto   sm:flex">
            <div className="slider-left sm:w-1/2 h-[80vh] flex items-center justify-center">
              <img
                className="sm:w-[55%] w-[75%] h-full object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <div className="slider-right  sm:w-1/2 w-[95%] m-auto flex sm:items-start items-center flex-col justify-center gap-8">
              <h1 className="sm:text-6xl text-5xl">{item.title}</h1>
              <p className="sm:text-xl text-base sm:w-[70%] text-center sm:text-left">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gamers_Slider;

