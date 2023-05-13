import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";

type Props = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "login",
    element: <SignUp />,
  },
]);

function Navigator({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignUp />} />
    </Routes>
  );
}

export default Navigator;
