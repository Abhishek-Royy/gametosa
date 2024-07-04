import React from "react";
import Main from "../assets/MAIN.webp";
import Gamers_Slider from "../gamers_Slider/Gamers_Slider";
import Creator_Slider from "../creator_Slider/Creator_Slider";
import Shopscreenshot from "../assets/shopscreenshot.png";
import gameImage from "../data/game_img.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import qrCode from "../assets/qr_code.png";
import roadmapImage from "../assets/roadmap.webp";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <div className="main w-full min-h-full">
        <div className="sec-1 w-full sm:h-[88vh] h-max sm:py-0 pt-20 bg-black text-white sm:px-24 sm:flex">
          <div className="left sm:w-1/2 w-[95%] m-auto sm:m-0 h-full   flex items-start justify-center flex-col">
            <h1 className="uppercase text-5xl sm:w-[80%] sm:leading-[3.5vw] font-extrabold">
              Turn <span className="text-[#38B8DD]">Your Passion</span> Into{" "}
              <span className="text-[#38B8DD]">Your Career!</span> Get started
              With Us Today
            </h1>
            <p className="mt-5 text-lg">
              Grow in an Esports ecosystem with gamers & organizers alike
            </p>
            <div className="gap-10 w-full flex mt-8">
              <button
                className="border rounded-lg font-medium text-base py-4 w-44 hover:bg-[#86CCDB] hover:text-black ease-in duration-300"
                style={{
                  boxShadow:
                    " #2C93A8 0px 10px 36px 0px, #86CCDB 0px 0px 0px 1px",
                }}
              >
                For Creators
              </button>
              <button
                className="border rounded-lg font-medium text-base py-4 w-44 hover:bg-[#86CCDB] hover:text-black ease-in duration-300"
                style={{
                  boxShadow:
                    " #2C93A8 0px 10px 36px 0px, #86CCDB 0px 0px 0px 1px",
                }}
              >
                For Organizations
              </button>
            </div>
          </div>
          <div className="right sm:w-1/2 w-[95%] m-auto pt-10 sm:h-[90%] h-[50vh] flex sm:items-center sm:justify-center ">
            <img
              className="w-full h-full object-cover"
              src={Main}
              alt="image"
            />
          </div>
        </div>
        {/* Section-3 */}
        <div className="sec-3 w-full sm:min-h-[100vh] bg-gradient-to-br from-black to-[#010815] pt-10  sm:px-24 text-white">
          <h1
            className="sm:w-1/3 w-[95%] rounded-3xl text-center text-3xl font-bold p-3 m-auto animate-bounce"
            style={{
              boxShadow: " #2C93A8 0px 10px 36px 0px, #86CCDB 0px 0px 0px 1px",
            }}
          >
            FOR GAMERS
          </h1>

          <div className="gamers-slider sm:w-full  m-auto">
            <Gamers_Slider />
          </div>
        </div>

        {/* Section-4 */}
        <div className="sec-4 w-full sm:min-h-[100vh] bg-gradient-to-tr from-black to-[#010815] pt-10  sm:px-24 text-white">
          <h1
            className="sm:w-1/3 w-[95%] rounded-3xl text-center text-3xl font-bold p-3 m-auto animate-bounce "
            style={{
              boxShadow: " #2C93A8 0px 10px 36px 0px, #86CCDB 0px 0px 0px 1px",
            }}
          >
            FOR CREATORS
          </h1>

          <div className="gamers-slider sm:w-full  m-auto">
            <Creator_Slider />
          </div>
        </div>
        {/* Section-5 */}
        <div className="sec-5 w-full sm:h-[100vh] h-[90vh] sm:pb-10 bg-gradient-to-br from-black to-[#000308] text-white sm:px-24 sm:flex">
          <div className="sec-5-left sm:w-1/4 h-[50vh] m-auto sm:h-full ">
            <img
              className="w-full h-full object-contain"
              src={Shopscreenshot}
              alt="shop screenshot"
            />
          </div>
          <div className="sec-5-right leading-8 sm:w-1/2 sm:h-full w-[95%] m-auto sm:m-0 flex flex-col justify-center">
            <h1 className="sm:text-6xl text-4xl text-center sm:text-left tracking-wide">
              <span className="text-[#38B8DD]">2X POINTS</span> ON GAMING
              PURCHASES IN THE GAMETOSA SHOP
            </h1>
            <p className="sm:text-2xl text-center sm:text-left mt-5">
              Get boosted rewards for purchasing video games, gaming gift cards,
              and gear in the Gametosa Shop.
            </p>
          </div>
        </div>

        {/* Section-6 */}
        <div
          className="sec-6 w-full sm:h-[90vh] h-auto sm:pt-10 sm:px-24 text-white"
          style={{
            background:
              "linear-gradient(to top, hsla(220, 80%, 6%, 1) 0%, hsla(220, 83%, 14%, 1) 47%, hsla(0, 0%, 0%, 1) 100%)",
          }}
        >
          <h1 className="sm:text-center sm:w-full w-[90%] m-auto text-5xl font-bold">
            GAMES WE SUPPORT
          </h1>
          <p className="text-center text-lg">
            We are constantly expanding our Games Bundle. Stay tuned for your
            favourite games to feature.
          </p>

          {/* Images-card */}
          <div className="allGames w-full sm:h-[60vh] sm:mt-0 mt-10">
            <Slider {...settings}>
              {gameImage.map((item, index) => (
                <div key={item.id} className="box w-[30vw]  h-full ">
                  <img
                    className="w-full h-full object-contain cursor-pointer"
                    src={item.game_image}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Section-7 */}
        <div
          className="sec-7 w-full h-[50vh] sm:bg-center bg-cover text-white flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${roadmapImage})`,
          }}
        >
          <h1 className="text-5xl font-semibold">ROADMAP</h1>
          <p className="mt-5 text-lg text-center font-medium">
            What's done & what's next: It's all here for you to explore.
          </p>
          <button
            className="border rounded-full mt-10 font-medium text-lg bg-black py-4 w-44 hover:bg-[#86CCDB] hover:text-black ease-in duration-300"
            style={{
              boxShadow: " #2C93A8 0px 10px 36px 0px, #86CCDB 0px 0px 0px 1px",
            }}
          >
            Find Out
          </button>
        </div>

        {/* Section-8 */}

        <div className="sec-8 w-full sm:h-[40vh] h-auto bg-black sm:py-0 py-10 sm:flex sm:px-24">
          <div className="left sm:w-[60%] w-[95%] m-auto text-white h-full flex flex-col item-center justify-center">
            <h1 className="text-4xl font-medium">
              BE MORE AWESOME WITH{" "}
              <span className="text-[#38B8DD]">GAMETOSA</span>
            </h1>
            <p className="text-lg mt-2">Try the Beta now</p>
            <a
              style={{
                boxShadow:
                  " #2C93A8 0px 10px 36px 0px, #86CCDB 0px 0px 0px 1px",
              }}
              className=" sm:w-[30%] w-[60%] m-auto sm:m-0 h-[18%]  sm:mt-5 mt-5 cursor-pointer rounded-lg"
              href="https://play.google.com/store/apps/details?id=gametosa.com"
              target="_blank"
            >
              <img
                className="w-full h-full"
                src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png"
                alt="playstore"
              />
            </a>
          </div>
          <div className="right sm:w-[40%] w-[50%] m-auto flex mt-10 sm:mt-0 items-end flex-col justify-center h-full">
            <img
              className="object-contain  h-[50%]"
              src={qrCode}
              alt="qr-code"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
