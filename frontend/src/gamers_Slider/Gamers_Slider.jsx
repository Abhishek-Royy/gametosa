// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import gamersData from "../data/gamers.json";

// function Gamers_Slider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   return (
//     <div className="wrapper-slider  mt-5">
//       <Slider {...settings}>
//         {gamersData.map((item, index) => (
//           <div key={index} className=" h-auto   sm:flex">
//             <div className="slider-left sm:w-1/2 h-[80vh] flex items-center justify-center">
//               <img
//                 className="sm:w-[55%] w-[75%] h-full object-contain"
//                 src={item.image}
//                 alt=""
//               />
//             </div>
//             <div className="slider-right  sm:w-1/2 w-[95%] m-auto flex sm:items-start items-center flex-col justify-center gap-8">
//               <h1 className="sm:text-6xl text-5xl">{item.title}</h1>
//               <p className="sm:text-xl text-base sm:w-[70%] text-center sm:text-left">
//                 {item.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Gamers_Slider;


import React from "react";
import SliderBox from "./SliderBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const gamerSlides = [
    {
      image:"flashreward.webp",
      heading: "Instant Games",
      info: "An HTML5 cross Gaming platform where you don't need to download games, it's available inapp. The more you play the more you can earn.",
    },
    {
      image:"firstmobilescreen.webp",
      heading: "Tournaments",
      info: "Gametosa brings gamers together on one platform to hone their gaming skills. Compete against each other towards glory to get rewarded.",
    },
    {
      image:"guilds.webp",
      heading: "Offerwall",
      info: "Gametosa brings opportunity for the gamer and the user to monetize and earn more revenue by doing simple tasks to earn more rewards.",
    },
    {
      image:"tournament.webp",
      heading: "Guilds",
      info: "Exclusive features for the guilds and for their fans. Community can now grow their fanbase by using Gametosa Guilds features.",
    },
    {
      image:"offerwall.webp",
      heading: "Flash Reward",
      info: "User can get a chance per day to win up to 20 to 100 free coins.",
    },
  ];

 

  return (
    <div className="p-4">
      <SliderBox  slides={gamerSlides} />
      {/* <SliderBox title="For Creators" slides={creatorSlides} /> */}
    </div>
  );
}

export default App;
