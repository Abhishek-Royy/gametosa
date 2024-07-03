// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import gamersData from "../data/gamers.json";

// function Gamers_Slider() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   return (
//     <>
//       <div className="wrapper-slider mt-5">
//         <Slider {...settings}>
//           {gamersData.map((item, index) => (
//             <div key={index} className="w-full h-auto sm:flex">
//               <div className="slider-left sm:w-1/2 sm:h-[80vh] flex items-center justify-center ">
//                 <img className="w-[55%] h-full" src={item.image} alt="" />
//               </div>
//               <div className="slider-right sm:w-1/2 w-[95%] m-auto flex sm:items-start items-center flex-col justify-center gap-8">
//                 <h1 className="sm:text-6xl text-5xl">{item.title}</h1>
//                 <p className="text-xl sm:w-[70%]">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   );
// }

// export default Gamers_Slider;

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import gamersData from "../data/gamers.json";

function Gamers_Slider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="wrapper-slider mt-5">
      <Slider {...settings}>
        {gamersData.map((item, index) => (
          <div
            key={index}
            className="w-full h-auto flex "
            style={{ display: "flex" }}
          >
            <div className="slider-left sm:w-1/2 h-[80vh] flex items-center justify-center">
              <img
                className="w-[55%] h-full object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <div className="slider-right sm:w-1/2 w-[95%] m-auto flex sm:items-start items-center flex-col justify-center gap-8">
              <h1 className="sm:text-6xl text-5xl">{item.title}</h1>
              <p className="text-xl sm:w-[70%] text-center sm:text-left">
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
