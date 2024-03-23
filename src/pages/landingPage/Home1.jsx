// import Img from "./../../assets/pix1.jpg";
// import Img2 from "./../../assets/pix2.jpg";
import imgg from "./../../assets/directConnections.webp";
import bitmoji from "./../../assets/bitmoji.png";

const Home1 = () => {
  return (
    <>
      <section className="">
        <div className="flex items-center justify-center w-fit mx-auto border-1 shadow-md rounded-full bg-[#8CAFFD] border-[#D6D6E6] p-3 mt-24 mb-16 bg-opacity-50 shadow-[#242166] ">
          <button className="p-1 rounded-full px-5  text-white bg-[#072374] mr-2 beviet text-[15px] hover:bg-[#33477c] cursor-pointer hover:scale-80 hover:-translate-y-1 duration-300 transition ease-in-out delay-150">
            Features
          </button>
          <p className="text-[black] font-bold mx-1 beviet text-[15px] hover:border-2 p-2 rounded-md cursor-pointer 
        border-[#233B76] hover:-translate-y-1 duration-300 transition ease-in-out delay-150">
            How does it works?
          </p>
        </div>
        <h1 className=" dm text-center text-3xl sm:text-4xl text-black  sm:w-3/5 w-11/12 sm:text-center mx-auto font-semibold font-sans my-7 mb-16">
          <span className="text-center text-3xl sm:text-4xl text-[#072374] dm mb-3">
            Tired of endlessly searching for the right investment?
          </span>{" "}
          PEx AI takes the guesswork out of the equation.
        </h1>
      </section>
      <section className="flex sm:flex-row flex-col sm:items-center items-start justify-around sm:w-2/4 w-10/12 mx-auto mb-16">
        <div className="">
          <h2 className="font-semibold text-2xl sm:text-3xl text-left my-2 dm">
            Intelligent Matching:
          </h2>
          <p className="text-left text-black text-lg font-medium inter">
            Our AI algorithm analyzes your investment criteria and preferences
            to
            <span className="text-[#072374] font-semibold inter">
              {" "}
              match you with pre-vetted, high-potential properties
            </span>{" "}
            from trusted builders{" "}
          </p>
        </div>
        <img

          src="https://framerusercontent.com/images/cSeb2a0BqWY2OORsWEmwifszuF0.gif"
          className="sm:w-2/4 w-10/12 rounded-3xl border-2 border-[#072374] m-4 p-4  shadow-[#072374] shadow-inner"
          alt=""
        />
      </section>
      <section className="flex sm:flex-row-reverse flex-col sm:items-center items-start justify-around sm:w-2/4 w-10/12 mx-auto mb-16">
        <div>
          <h2 className="font-semibold text-3xl sm:text-3xl text-left my-2 dm">
            Unbiased Market Insights:
          </h2>
          <p className="text-left text-black text-lg font-medium inter">
            Gain access to{" "}
            <span className="text-[#072374] font-semibold inter">
              data-driven market analysis and future predictions
            </span>{" "}
            to make investment decisions you can be confident in.{" "}
          </p>
        </div>
        <img
          src="https://framerusercontent.com/images/7uDEPiYTJoL0H8kDMqEBmbLTWNw.gif"
          className="sm:w-2/4 w-10/12 rounded-3xl m-4 p-4 shadow-[#072374] shadow-inner"
          alt=""
        />
      </section>
      <section className="flex sm:flex-row flex-col sm:items-center items-start justify-around sm:w-2/4 w-10/12 mx-auto mb-16">
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl text-left my-2 dm">
            Immersive Property Exploration:
          </h2>
          <p className="text-left text-black text-lg font-medium inter">
            Explore potential investments through{" "}
            <span className="text-[#072374] font-semibold inter">
              high-quality photos, videos, and drone footage.
            </span>{" "}
          </p>
        </div>
        <img
          src="https://framerusercontent.com/images/cSeb2a0BqWY2OORsWEmwifszuF0.gif"
          className="sm:w-2/4 w-10/12 rounded-3xl m-4 p-4 shadow-[#072374] shadow-inner"
          alt=""
        />
      </section>
      <section className="flex sm:flex-row-reverse flex-col sm:items-center items-start justify-around sm:w-2/4 w-10/12 mx-auto mb-16">
        <div>
          <h2 className="font-semibold text-3xl sm:text-3xl text-left my-2 dm">
            Side-by-Side Comparisons:
          </h2>
          <p className="text-left text-black text-lg font-medium inter">
            Compare{" "}
            <span className="text-[#072374] font-semibold inter">
              projects, builders, and locations
            </span>{" "}
            side-by-side to make informed and confident choices.{" "}
          </p>
        </div>
        <img
          src="https://framerusercontent.com/images/7uDEPiYTJoL0H8kDMqEBmbLTWNw.gif"
          className="sm:w-2/4 w-10/12 rounded-3xl m-4 p-4 shadow-[#072374] shadow-inner"
          alt=""
        />
      </section>
      <section className="flex sm:flex-row flex-col sm:items-center items-start justify-around sm:w-2/4 w-10/12 mx-auto mb-16">
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl text-left my-2 dm">
            Direct Builder Connection:
          </h2>
          <p className="text-left text-black text-lg font-medium inter">
            <span className="text-[#072374] font-semibold inter">
              Bypass the brokerage
            </span>{" "}
            and connect directly with builders to save on fees and streamline
            your investment journey.
          </p>
        </div>
        <img
          src={imgg}
          className="sm:w-2/4 w-10/12 rounded-3xl m-4 p-4 shadow-[#072374] shadow-inner"
          alt=""
        />
      </section>
      <section className="flex sm:flex-row-reverse flex-col sm:items-center items-start justify-around sm:w-2/4 w-10/12 mx-auto mb-16">
        <div>
          <h2 className="font-semibold text-3xl sm:text-3xl text-left my-2 dm">
            Multilingual Support:
          </h2>
          <p className="text-left text-black text-lg font-medium inter">
            Enjoy seamless communication with builders through our{" "}
            <span className="text-[#072374] font-semibold inter">
              multi-language support with voice chat
            </span>{" "}
            functionality.
          </p>
        </div>
        <img
          src={bitmoji}
          className="sm:w-2/4 w-10/12 rounded-3xl m-4 p-4 mt-[-8]"
          alt=""
        />
      </section>
      {/* <section className="flex sm:flex-row flex-col sm:items-center items-start justify-around sm:w-2/4 w-10/12 mx-auto mb-16">
        <div>
          <h2 className="font-semibold text-2xl sm:text-3xl text-left my-2 dm">
            Speak your language:
          </h2>
          <p className="text-left text-black text-lg font-medium inter">
            Enjoy{" "}
            <span className="text-[#072374] font-semibold inter">
              multi-language support
            </span>{" "}
            with voice chat for clear communication.
          </p>
        </div>
        <img
          src={Img}
          className="sm:w-2/4 w-10/12 rounded-3xl m-4 p-4"
          alt=""
        />
      </section> */}
    </>
  );
};

export default Home1;
