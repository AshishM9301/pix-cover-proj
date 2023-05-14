import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Navigator from "./features/Navigator";

function App() {
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
