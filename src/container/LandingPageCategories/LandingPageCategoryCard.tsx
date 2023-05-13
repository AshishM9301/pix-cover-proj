import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";

type LandingPageCategoryCardProps = {
  handleItemClick: (itemId) => React.MouseEventHandler<HTMLDivElement>;
};

const LandingPageCategoryCard: FC<LandingPageCategoryCardProps> = ({
  handleItemClick,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="md:mx-6 mx-2 cursor-default"
      onClick={(e) => handleItemClick(e)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.298) 73%, rgb(0, 0, 0) 116%),url(https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: 12,
        }}
        className="flex justify-start md:w-[480px] w-[240px] md:h-[280px] h-[160px]"
      >
        <div className="flex flex-col justify-end mb-10 mx-6">
          <h1 className="text-2xl font-semibold font-avenir text-white">
            Hello
          </h1>
          <CSSTransition
            in={hover}
            timeout={400}
            classNames={{
              appear: "my-appear",
              appearActive: "my-active-appear",
              appearDone: "my-done-appear",
              enter: "my-enter",
              enterActive: "my-active-enter",
              enterDone: "my-done-enter",
              exit: "my-exit",
              exitActive: "my-active-exit",
              exitDone: "my-done-exit",
            }}
            onEntering={() => setHover(true)}
            onExiting={() => setHover(false)}
            unmountOnExit
          >
            <p className="mt-4 font-avenir text-lg text-white font-light">
              241
            </p>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCategoryCard;
