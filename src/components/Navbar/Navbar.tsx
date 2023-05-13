import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <div className="w-full font-avenir">
      <div className="w-full md:w-[1600px] mx-auto">
        <div className="flex items-center justify-between py-4 px-12 font-medium">
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} className="w-12 h-11" />
            <h1 className="text-2xl tracking-wider font-bold">PIXCOVER</h1>
          </Link>
          <div className="flex items-center text-base tracking-wider font-semibold space-x-5 mx-12">
            <a>
              <h1 className="uppercase">Find Talent</h1>
            </a>
            <a>
              <h1 className="uppercase">Find Work</h1>
            </a>
          </div>
          <div className=" mr-6">
            <input
              placeholder="Search for jobs, talents or agencies"
              className="focus:outline-none border border-gray-300 focus:border-gray-500 rounded-full md:w-[500px] w-full px-6 py-1 font-normal"
            />
          </div>
          <div className=" flex-1  flex justify-end items-center text-base tracking-wider font-semibold space-x-10 mx-12">
            <a>
              <h1 className="uppercase font-light">Sign In</h1>
            </a>
            <Link
              to="/login"
              className="px-8 py-2 border border-gray-900 rounded-full"
            >
              <h1 className="uppercase">Sign Up</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
