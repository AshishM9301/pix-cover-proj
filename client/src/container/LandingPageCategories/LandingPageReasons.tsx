import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";

// type Props = {};

const LandingPageReasons = () => {
  return (
    <div className="py-12 md:py-32 font-avenir">
      <div className="w-full lg:w-[1440px] mx-auto px-12">
        <div className="text-center text-2xl md:text-5xl font-semibold lg:w-[900px] mx-auto w-full  md:leading-[4rem]">
          More reasons companies around the world choose Pixcover
        </div>
        <div className="flex md:flex-row flex-col mt-12 md:mt-24 space-y-12 md:space-y-0">
          {[1, 2, 3].map((item) => (
            <div className="space-y-4 px-4" key={item.toString()}>
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faUserCircle} size="6x" />
              </div>
              <h2 className="text-2xl font-semibold text-center">
                Credibility
              </h2>
              <div className="px-2 md:px-16 text-center">
                <p>
                  We verify Talents and to help you identify time-tested
                  professionals across the globe.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPageReasons;
