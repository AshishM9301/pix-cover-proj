import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

type Props = {};

function LandingPageHeading({}: Props) {
  const {
    isFirstItemVisible,
    scrollPrev: prev,
    scrollNext,
    visibleElements,
    initComplete,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );

  useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements?.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <div className="lg:w-[1280px] mx-auto font-avenir">
      <div className="bg-white py-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-5xl font-bold">
            <h1 className="">Explore</h1>
            <h1> by category</h1>
          </div>
          <div className="md:border-b flex-1 border-gray-400 flex flex-col justify-end">
            <div className="md:justify-end justify-center items-end flex my-4 ">
              <div className="flex items-center space-x-2">
                <div
                  onClick={() => {
                    prev();
                  }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <h1 className="text-sm">Drag or click the arrows</h1>
                <div
                  onClick={() => {
                    scrollNext();
                  }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageHeading;
