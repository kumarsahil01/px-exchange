import { Link } from "react-router-dom";
import logo from "./../assets/PExLogo 1.png";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import newlogo from "./../assets/newPexlogo.png";

const Footer = () => {
  return (
    <section className="bg-[#233B76]">
      <footer className="text-white bg-[#233B76] body-font px-8 text-left  ">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src={newlogo}
                alt=""
                className="sm:h-18 w-4/4 block mr-auto h-auto"
              />
            </a>
        <div className="  sm:mt-5 ml-3 flex md:items-center lg:items-start md:flex-row md:flex-nowrap    ">
          
          <div className="w-1/2 mt-2 ">
            <h3 className="text-2xl my-5 dm text-left">More about PEX:</h3>
            <p className="mt-2  text-white mb-2   text-justify dm  ">
              Property Exchange is built on an idea to disrupt the existing real
              estate investment methodologies enabling Retail investors to enter
              early securely, bagging the maximum return. 
            </p>
            <div className="my-4 flex flex-row flex-wrap justify-start items-center">
              <FaInstagram className="text-xl m-2" />
              <FaFacebook className="text-xl m-2" />
              <FaXTwitter className="text-xl m-2" />
              <FaLinkedin className="text-xl m-2" />
            </div>
          </div>
          <div className="flex w-1/2 mt-6 ml-10">
            
            <div className="lg:w-1/4 md:w-1/2 w-full sm:px-4 px-1  text-left">
              <h2 className="title-font text-xl font-medium text-white tracking-widest mb-5 dm">
                Useful Links
              </h2>
              <nav className="list-none mb-10">
                <li className="my-2">
                  <a className="text-white hover:text-gray-100 cursor-pointer dm">
                    PEX Login
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white hover:text-gray-100 cursor-pointer dm">
                    PEX Dashboard
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white hover:text-gray-100 cursor-pointer dm">
                    Help Center
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white hover:text-gray-100 cursor-pointer dm">
                    Insights
                  </a>
                </li>
                <li className="my-2">
                  <a className="text-white hover:text-gray-100 cursor-pointer dm">
                    Learning Center
                  </a>
                </li>
              </nav>
              
            </div>
          </div>
        </div>
        <p className="text-white text-left mt-[-10px]">© All right reserved by AlRealty Innovations Private Limited</p>
      </footer>
    </section>
  );
};

export default Footer;
