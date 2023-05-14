import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";

// type Props = {};

function Navigator() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignUp />} />
    </Routes>
  );
}

export default Navigator;
