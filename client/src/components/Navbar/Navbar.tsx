import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function Navbar() {
  const current = useLocation();

  console.log(current.pathname.replace("/", ""));

  if (current.pathname.replace("/", "") === "login") {
    return (
      <div className="w-full font-avenir relative">
        <div className="w-full px-64 py-8 absolute text-white">
          {/* <div className="flex md:items-center justify-between pt-4 md:py-4 px-0 md:px-12 font-medium flex-col md:flex-row"> */}
          <Link to="/" className="flex items-center ">
            <img src={logoWhite} className="w-12 h-11" />
            <h1 className="text-2xl tracking-wider font-bold">PIXCOVER</h1>
          </Link>
          {/* </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-avenir">
      <div className="w-full md:w-[1600px] mx-auto">
        <div className="flex md:items-center justify-between pt-4 md:py-4 px-0 md:px-12 font-medium flex-col md:flex-row">
          <Link
            to="/"
            className="hidden md:flex items-center space-x-4 self-start"
          >
            <img src={logo} className="w-12 h-11" />
            <h1 className="text-2xl tracking-wider font-bold hidden md:block">
              PIXCOVER
            </h1>
          </Link>

          <div className="hidden md:block mt-4 md:mt-0 py-6 md:py-0 bg-black md:bg-transparent text-white md:text-black md:mx-12 flex-1">
            <div className="flex justify-center md:justify-start md:mt-0 items-center text-base tracking-wider font-semibold space-x-5 ">
              <a>
                <h1 className="uppercase">Find Talent</h1>
              </a>
              <a>
                <h1 className="uppercase">Find Work</h1>
              </a>
            </div>
          </div>
          <div className="hidden md:block mr-6">
            <input
              placeholder="Search for jobs, talents or agencies"
              className="focus:outline-none border border-gray-300 focus:border-gray-500 rounded-full md:w-[500px] w-full px-6 py-1 font-normal"
            />
          </div>
          <div className=" flex-1  flex justify-between  md:justify-end items-center text-xs md:text-base tracking-wider font-semibold space-x-10 px-4 md:px-0 md:mx-12">
            <Link
              to="/"
              className="flex md:hidden items-center space-x-4 self-start"
            >
              <img src={logo} className="w-8 h-7" />
              <h1 className="text-2xl tracking-wider font-bold hidden md:block">
                PIXCOVER
              </h1>
            </Link>

            <a>
              <h1 className="uppercase font-light">Sign In</h1>
            </a>
            <Link
              to="/login"
              className="px-8 py-2 border border-gray-900 rounded-full"
            >
              <h1 className="uppercase">Sign Up</h1>
            </Link>

            <div className="block md:hidden">
              <FontAwesomeIcon icon={faAlignJustify} />
            </div>
          </div>
          <div className="block md:hidden mt-4 md:mt-0 py-6 md:py-0 bg-black md:bg-white text-white md:text-black md:mx-12 flex-1">
            <div className="flex justify-center md:justify-start md:mt-0 items-center text-base tracking-wider font-semibold space-x-5 ">
              <a>
                <h1 className="uppercase">Find Talent</h1>
              </a>
              <a>
                <h1 className="uppercase">Find Work</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
