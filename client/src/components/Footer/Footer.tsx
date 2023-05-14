import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// type Props = {};

function Footer() {
  return (
    <div className="w-full lg:w-[1440px] mx-auto md:px-12">
      <div className="flex md:text-lg text-[9px] tracking-wider">
        <div className="flex-1 py-6  px-4 flex font-avenir md:flex-row flex-col">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-center">Categories</h1>
          </div>
          <div className="flex-1 flex  mt-6 md:mt-0">
            <div className="flex-1 flex flex-col space-y-3">
              <a className=" font-light">Models</a>
              <a className=" font-light">Photographers</a>
              <a className=" font-light">Film & Video</a>
              <a className=" font-light">Artists</a>
              <a className=" font-light">Actors</a>
            </div>
            <div className="flex-1 flex flex-col space-y-3">
              <a className=" font-light">Influencers</a>
              <a className=" font-light">Hair Stylists</a>
              <a className=" font-light">Makeup Artists</a>
              <a className=" font-light">Agencies</a>
            </div>
          </div>
        </div>
        <div className="flex-1 py-6  px-4 flex font-avenir md:flex-row flex-col ">
          <div className="md:flex-1">
            <h1 className="text-xl font-bold text-center">Company</h1>
          </div>
          <div className="flex-1 flex  mt-6 md:mt-0">
            <div className="flex-1 flex flex-col space-y-3">
              <a className=" font-light">About</a>
              <a className=" font-light">Careers</a>
              <a className=" font-light">Memberships</a>
              <a className=" font-light">Trust & Safety</a>
            </div>
            <div className="flex-1 flex flex-col space-y-3">
              <a className=" font-light flex">
                <div className="w-6">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <p>Facebook</p>
              </a>
              <a className=" font-light flex">
                <div className="w-6">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <p>Twitter</p>
              </a>
              <a className=" font-light flex">
                <div className="w-6">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <p>Instagram</p>
              </a>
              <a className=" font-light flex">
                <div className="w-6">
                  <FontAwesomeIcon icon={faPinterestP} />
                </div>
                <p>Pinterest</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#dfdfdf] py-6 flex md:flex-row flex-col">
        <div className="flex-1 flex justify-center">
          <a href="#" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCopyright} />
            <p>Copyright</p>
          </a>
        </div>
        <div className="flex-1 flex justify-center space-x-6 text-xs md:text-base">
          <a href="#" className="flex items-center">
            <p>Terms</p>
          </a>
          <a href="#" className="flex items-center">
            <p>Privacy</p>
          </a>
          <a href="#" className="flex items-center">
            <p>Support</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
