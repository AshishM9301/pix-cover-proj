// import React from "react";

// type Props = {};

function LandingPageHiringPage() {
  return (
    <div className="mt-0 md:mt-64 w-full font-avenir">
      <div className="bg-[#f5f5f5] py-32 md:py-52 px-10 ">
        <div className="lg:w-[1400px] w-full mx-auto flex md:flex-row flex-col">
          <div className="lg:w-[1200px] space-y-10">
            <h1 className="text-center md:text-left lg:text-[160px] text-5xl font-semibold lg:leading-[10rem] leading-[3rem]">
              HIRING IS SIMPLE
            </h1>
            <h3 className="text-xl text-center md:text-justify lg:w-[560px]">
              Meet clients you’re excited to work with and take your career or
              business to new heights.
            </h3>
            <button className="hidden md:block text-base font-light px-14 py-3 rounded-full bg-[#0f0f0f] text-white">
              HIRE TALENTS
            </button>
          </div>
          <div className="flex-1 mt-20 md:mt-0">
            <div className="flex flex-col">
              <ul className="space-y-10">
                <li className="space-y-6">
                  <h1 className="text-3xl md:text-4xl font-semibold md:space-x-5 flex items-end justify-center ">
                    <p className="text-5xl md:text-6xl font-bold hidden md:block">
                      1
                    </p>
                    <p>Browse profiles</p>
                  </h1>
                  <p className="md:px-10 text-sm leading-6 md:w-[480px] w-full tracking-wider text-center md:text-justify">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                </li>
                <li className="space-y-6">
                  <h1 className="text-3xl md:text-4xl  font-semibold space-x-5 flex items-end justify-center ">
                    <p className="text-5xl md:text-6xl hidden md:block">2</p>
                    <p>Hire professionals</p>
                  </h1>
                  <p className="md:px-10 text-sm leading-6 md:w-[480px] w-full tracking-wider text-center md:text-justify">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                </li>
                <li className="space-y-6">
                  <h1 className="text-3xl md:text-4xl font-semibold space-x-5 flex items-end justify-center ">
                    <p className="text-5xl md:text-6xl hidden md:block">3</p>
                    <p>Get the work done</p>
                  </h1>
                  <p className="md:px-10 text-sm leading-6 md:w-[480px] w-full tracking-wider text-center md:text-justify">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                  </p>
                </li>
              </ul>
              <button className=" mt-20 block md:hidden text-base font-light px-14 py-3 rounded-full bg-[#0f0f0f] text-white">
                HIRE TALENTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHiringPage;
