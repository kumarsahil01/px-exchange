import { BsStars } from "react-icons/bs";
const Home3 = () => {
  return (
    <section className="bg-[#DFE9FF] py-16 flex flex-row rounded-lg">
  <div className="bg-[#FFFFFF] py-6 sm:w-2/4 w-10/12 mx-auto sm:px-16 px-4 rounded-lg flex flex-col">
    <h1 className="text-[#072785]  text-xl text-center font-semibold my-3 dm  font-sans shadow-sm p-2  shadow-black rounded-xl  hover:shadow-[#072785]">
      Move from information to insights with 
      <b className="text-[#072785] sm:text-4xl text-2xl text-center dm"> PExAI</b>
    </h1>
    <h1 className="text-xl text-[#072785]   text-center my-4   font-sans shadow-sm p-2  shadow-black rounded-xl  hover:shadow-[#072785]">
      <b className="text-xl text-black text-center">Click here</b> to get matched with your
      <b className="text-xl text-black text-center"> perfect property today!</b>
    </h1>
  </div>

  <div className="bg-[#FFFFFF] py-6 sm:w-2/4 w-10/12 mx-auto sm:px-16 px-4 rounded-lg">

  <div className="flex flex-col column-gap: 5px">
  <button className="flex flex-row justify-center items-center text-white bg-[#233B76] p-2 rounded-lg mx-auto my-7 dm h-15
  cursor-pointer hover:scale-80 hover:-translate-y-1 duration-300 transition ease-in-out delay-150
  ">
    <BsStars className="mr-3 " /> Begin Your Investment Journey
  </button>

  <button className="flex flex-row justify-center items-center text-white bg-[#233B76] p-2 rounded-lg mx-auto my-7 dm h-15 
  ursor-pointer hover:scale-80 hover:-translate-y-1 duration-300 transition ease-in-out delay-150">
    <BsStars className="mr-3 " /> Learn About Property Exchange
  </button>

  </div>

  </div>
</section>

  );
};

export default Home3;
