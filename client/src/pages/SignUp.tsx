// import React from "react";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// type Props = {};

function SignUp() {
  return (
    <div>
      <div className="flex font-avenir">
        <div className="flex-1 hidden md:block">
          <img
            src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-semibold">Sign Up</h1>
            <div className="mt-12 mb-8">
              <button className="border px-32 py-3 rounded-sm flex items-center space-x-4 font-normal">
                <FontAwesomeIcon icon={faGoogle} size="xl" />
                <h2>Sign in with Google</h2>
              </button>
              <div className="flex items-center space-x-4 mt-6">
                <div className="flex-1 border w-full"></div>
                <div>or</div>
                <div className="flex-1 border w-full"></div>
              </div>
            </div>

            <div className="flex-1 w-full space-y-2 mb-6">
              <div className="px-3">Your email</div>
              <input
                placeholder="Email Address"
                className="w-full flex-1 border border-[#DADCDE] bg-[#FBFBFC] rounded-sm text-base py-2 px-4 outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex-1 w-full space-y-2">
              <div className="px-3">Your password</div>
              <input
                placeholder="Password"
                className="w-full flex-1 border border-[#DADCDE] bg-[#FBFBFC] rounded-sm text-base py-2 px-4 outline-none focus:border-gray-400"
              />
            </div>
            <div className="mt-6 flex-1 w-full  ">
              <button className="bg-[#0F0F0F] text-center text-white w-full py-2 rounded-md">
                Sign In
              </button>
            </div>
            <div className="my-10 ">
              <button className="text-center">Forgot Password</button>
            </div>
            <div className="space-x-3 flex">
              <p className="text-center">Don't have an account?</p>
              <button className="text-center text-[#FF5151]"> Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
