import { useState, useContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar, { NavBar } from "./components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useDrag from "./features/useDrag";
import LandingPageCategories from "./container/LandingPageCategories/LandingPageCategories";
import LandingPageVerifiedContainer from "./container/LandingPageCategories/LandingPageVerifiedContainer";
import LandingPageHiringPage from "./container/LandingPageCategories/LandingPageHiringPage";
import LandingPageReasons from "./container/LandingPageCategories/LandingPageReasons";
import LandingPageTalent from "./container/LandingPageCategories/LandingPageTalent";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./features/Navigator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-[#FBFBFC] min-h-screen flex flex-col justify-between">
        <>
          <Navbar />
          <Navigator />
        </>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
