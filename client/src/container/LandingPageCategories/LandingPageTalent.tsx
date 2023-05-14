// import React from "react";

// type Props = {};

function LandingPageTalent() {
  return (
    <div className="py-12 md:py-32 font-avenir">
      <div className="w-full lg:w-[1440px] mx-auto px-12">
        <div className="text-center text-2xl md:text-5xl font-semibold lg:w-[900px] mx-auto w-full md:leading-[4rem]">
          More reasons companies around the world choose Pixcover
        </div>
        <div className="flex md:flex-row flex-col mt-12">
          <div className="flex-1  md:px-12 text-center items-center md:border-r border-[#f5f5f5] py-12">
            <h1 className="text-center text-5xl font-semibold leading-[4rem]">
              Find Talent
            </h1>
            <p className=" my-12 px-0 md:px-20">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore
            </p>
            <button className="border-[#0F0F0F] border rounded-full px-10 py-3 tracking-wider  font-medium">
              Hire a Talent
            </button>
          </div>
          <div className="flex-1  md:px-12 text-center items-center py-12 md:border-l border-[#f5f5f5]">
            <h1 className="text-center text-5xl font-semibold leading-[4rem]">
              Find Work
            </h1>
            <p className=" my-12 px-0 md:px-20">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore
            </p>
            <button className="bg-[#0F0F0F] text-white rounded-full px-10 py-3 tracking-wider font-medium">
              Hire a Talent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageTalent;
