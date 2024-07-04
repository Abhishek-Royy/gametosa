// components/SliderBox.js
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const SliderBox = ({ title, slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,

    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mb-8 ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            heading={slide.heading}
            info={slide.info}
            image={slide.image}
          />
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 bg-gradient-to-br from-purple-800 to-[#002F47]  text-white rounded-full p-3 cursor-pointer"
      onClick={onClick}
    >
      &rarr;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10  bg-gradient-to-br from-purple-800 to-[#002F47] text-white rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      &larr;
    </div>
  );
};

export default SliderBox;
