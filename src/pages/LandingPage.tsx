import React from "react";
import LandingPageCategories from "../container/LandingPageCategories/LandingPageCategories";
import LandingPageVerifiedContainer from "../container/LandingPageCategories/LandingPageVerifiedContainer";
import LandingPageHiringPage from "../container/LandingPageCategories/LandingPageHiringPage";
import LandingPageReasons from "../container/LandingPageCategories/LandingPageReasons";
import LandingPageTalent from "../container/LandingPageCategories/LandingPageTalent";

type Props = {};

function LandingPage({}: Props) {
  return (
    <>
      <div className="w-full ">
        <div className="background-img-parallax w-screen z-20 min-h-[768px] grayscale-[50%] flex  justify-start">
          <div className="flex flex-col md:px-6 py-4 px-4">
            <div className="xl:w-[1280px] mx-auto px-0 md:px-12">
              <div className="lg:w-[768px] w-full">
                <h1 className="text-white drop-shadow-md lg:text-[160px] md:text-7xl text-5xl font-semibold uppercase tracking-widest font-avenir text-center md:text-left">
                  Hire a pro
                </h1>
                <div className="lg:w-[600px] w-full">
                  <p className="text-white drop-shadow-md mt-6 md:text-xl text-lg text-center md:text-left">
                    Talents and agencies around the world showcase their
                    portfolio work on Pixcover - the home to the world’s best
                    professionals.
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <button className="bg-black md:bg-white w-64 text-xl py-3 rounded-full mt-6">
                  <p className="text-lg font-medium text-white md:text-black">
                    Get Started
                  </p>
                </button>
              </div>
            </div>
            <div className="hidden md:flex space-x-3  justify-end items-center mt-6 text-lg text-white drop-shadow-md  ">
              <span className="">Are you a pro?</span>
              <a href="#" className="font-light ">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      <LandingPageCategories />
      <LandingPageVerifiedContainer />
      <LandingPageHiringPage />
      <LandingPageReasons />
      <LandingPageTalent />
    </>
  );
}

export default LandingPage;
