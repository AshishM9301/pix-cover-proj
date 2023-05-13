import React from "react";
import { useState } from "react";
import LandingPageHeading from "./LandingPageHeading";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "../../features/useDrag";
import LandingPageCategoryCard from "./LandingPageCategoryCard";

// type Props = {};

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function LandingPageCategories() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = useState<string>("");

  const handleItemClick = (itemId: string) => () => {
    console.log("hheee");
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };

  return (
    <div className="">
      <LandingPageHeading />
      <div className="lg:w-[1600px] w-full mx-auto md:px-6 my-6">
        <div
          // className="py-12 flex flex-1 flex-nowrap space-x-4 overflow-x-scroll snap-proximity"
          onMouseLeave={dragStop}
        >
          <ScrollMenu
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {data.map((item, index) => (
              <LandingPageCategoryCard
                handleItemClick={handleItemClick}
                key={index.toString()}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </div>
  );
}

// function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
//   const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

//   if (isThouchpad) {
//     ev.stopPropagation();
//     return;
//   }

//   if (ev.deltaY < 0) {
//     apiObj.scrollNext();
//   } else if (ev.deltaY > 0) {
//     apiObj.scrollPrev();
//   }
// }

export default LandingPageCategories;
