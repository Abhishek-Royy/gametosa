import React from "react";
import Main from "../assets/MAIN.webp";
import Gamers_Slider from "../gamers_Slider/Gamers_Slider";
import Creator_Slider from "../creator_Slider/Creator_Slider";
import Shopscreenshot from "../assets/shopscreenshot.png";

function Homepage() {
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
        {/* Section-4 */}
        <div className="sec-5 w-full sm:h-[100vh] h-auto bg-gradient-to-br from-black to-[#010815] text-white sm:px-24 sm:flex">
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
      </div>
    </>
  );
}

export default Homepage;
