import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";

// type Props = {};

const LandingPageVerifiedContainer = () => {
  return (
    <div className="my-6 lg:w-[1440px] mx-auto w-full px-4">
      <div className="flex my-32 lg:flex-row flex-col-reverse">
        <div className="relative flex-1 mb-16 md:mb-0">
          <div
            style={{
              background:
                'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.298) 73%, rgb(0, 0, 0) 116%),url("https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundRepeat: " no-repeat",
              backgroundSize: "cover",
              borderRadius: 24,
            }}
            className="md:w-[500px] w-[244px] md:h-[700px] h-[322px] flex flex-1 flex-col justify-end relative  md:p-[40px] p-6"
          >
            <div className="flex flex-col justify-end flex-1 items-start text-white font-avenir">
              <div className="flex space-x-2 items-center">
                <h1 className="text-2xl font-medium ">Alain B.</h1>
                <FontAwesomeIcon icon={faCheckCircle} color="#fff" size="1x" />
              </div>
              <p className="text-xs font-light tracking-wider">Photographer</p>
            </div>
          </div>
          <div
            style={{
              background:
                'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.298) 73%, rgb(0, 0, 0) 116%),url("https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              backgroundRepeat: " no-repeat",
              backgroundSize: "cover",
              borderRadius: 24,
            }}
            className="md:w-[500px] w-[244px] md:h-[700px] h-[322px] flex flex-1 flex-col justify-end absolute top-32 md:top-20 left-24 md:left-52 md:p-[40px] p-6"
          >
            <div className="flex flex-col justify-end flex-1 items-start text-white font-avenir">
              <div className="flex space-x-2 items-center">
                <h1 className="text-2xl font-medium ">Alain B.</h1>
                <FontAwesomeIcon icon={faCheckCircle} color="#fff" size="1x" />
              </div>
              <p className="text-xs font-light tracking-wider">Photographer</p>
            </div>
          </div>
        </div>
        <div className="flex-1 self-center md:self-start font-avenir">
          <div className="px-0 md:px-24 flex flex-col items-center md:items-start ">
            <FontAwesomeIcon icon={faCheckCircle} size={"3x"} />
            <div className="my-5 space-y-2">
              <h3 className="text-sm md:text-xl font-extralight tracking-wider text-center md:text-left">
                CHAT WITH REAL
              </h3>
              <h1 className="text-2xl md:text-7xl font-bold md:font-medium text-center md:text-left">
                Verified Talents
              </h1>
              <p className="text-lg font-base pr-4 text-center md:text-left">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
            </div>
            <div className="mt-10">
              <button className="hidden lg:flex bg-[#0F0F0F] text-white px-16 py-4 rounded-full text-lg tracking-widest">
                START BROWSING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageVerifiedContainer;
