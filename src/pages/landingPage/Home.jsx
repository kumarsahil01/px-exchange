import { FaArrowRight } from "react-icons/fa";
import Image1 from "./../../assets/bhutani.png";
import Image2 from "./../../assets/dla.png";
import Image3 from "./../../assets/elan.png";
import Image4 from "./../../assets/gy.png";
import Image5 from "./../../assets/mm.png";
import Product from "./../../assets/top-post-badge.svg";

import "./home.css";
import Marquee from "react-fast-marquee";
import Chatbot from "./chatbot/Chatbot";
const Home = () => {
  return (
    <section className="homepage pt-5 bg-gradient-r-to   from-[#242166] ">
      <div className="flex items-center justify-center w-fit mx-auto border-1 shadow-md rounded-full bg-[#ffffff] border-[#D6D6E6] p-2 my-5 mb-16 shadow-[#242166]   ">
        <button className="p-1 rounded-full px-5  sm:text-base text-[12px] font-bold  text-white bg-[#233B76] beviet hover:bg-[#33477c] cursor-pointer hover:scale-80 hover:-translate-y-1 duration-300 transition ease-in-out delay-150">
          Get Listed
        </button>
        <button className="text-[#233B76]  mx-1  sm:text-base text-[12px] font-bold beviet hover:border-2 p-2 rounded-md cursor-pointer 
        border-[#233B76] hover:-translate-y-1 duration-300 transition ease-in-out delay-150">
          Become Partner
        </button>
        <FaArrowRight className="text-[#233B76] font-bold mx-1" />
      </div>
        <h1 className="dm text-center text-2xl  text-white sm:w-3/4 w-11/12 sm:text-center mx-auto  font-sans   ">
        <span className="text-[#fff068e9] font-bold ">Empowering</span> everyone to
        own and build <br /> <span className="text-[#fff068e9] font-bold">wealth</span>{" "}
        through  <span className="text-[#fff068e9] font-bold">Real Estate</span>
      </h1>

      <p className="inter text-center text-lg sm:text-2lg text-white
      font-semibold sm:w-2/5 w-11/12 sm:text-center mx-auto my-3 sm:mb-24 mb-12">
      Let AI search the right Property for you.
      </p>
      <Chatbot />
      <div className=" mb-20 rounded-lg   w-2/5 block mx-auto shadow-lg shadow-red-400 hover:-translate-y-2 duration-300 transition ease-in-out delay-150">
      <img
        src={Product}
        
        alt=""
      />
      </div>

      <div className=" bg-white   ">
        <div className=" py-2 pb-5 px-10   sm:w-3/5 w-11/12 mx-auto rounded-lg    top-5 ">
          <p className="inter text-center font-semibold text-black my-3 text-lg font-sans">
            Trusted By Leaders From:
          </p>
          <Marquee
            pauseOnHover={true}
            speed={40}
            gradientWidth={250}
            gradient={true}
          >
            <img src={Image1} className="mx-10 py-1 sm:h-14 h-10" alt="" />
            <img src={Image2} className="mx-10 py-1 sm:h-14 h-10" alt="" />
            <img src={Image3} className="mx-10 py-1 sm:h-14 h-10" alt="" />
            <img src={Image4} className="mx-10 py-1 sm:h-14 h-10" alt="" />
            <img src={Image5} className="mx-10 py-1 sm:h-14 h-10" alt="" />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Home;
