import { useState, useEffect } from "react";
import axios from "axios";

// import { FaUserCircle } from "react-icons/fa";
import Copilot from "./../../../assets/copilot.jpg";
import Profile from "./../../../assets/profile.jpeg";
import { useNavigate } from "react-router-dom";


import gate from "./../../../assets/gateV.png";
import building from "./../../../assets/buildingV.png";


import laptop from "./../../../assets/laptopV.png";


function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataShow, setDataShow] = useState(false);
  
  const [chatbotResponse, setChatbotResponse] = useState("");
  const [showText, setShowText] = useState("");

  
  const fetchChatbotResponse = async (message) => {
    // setIsLoading(true);
    try {
      const response = await axios.post(
        "https://proexchatbot.onrender.com/chat",
        { user_input: message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
       console.log('data from chat ')
       console.log(response.data)
      const chatHistory = response.data.chat_history;
      console.log("chat history", chatHistory);

      if (
        chatHistory &&
        Array.isArray(chatHistory) &&
        chatHistory.length >= 2
      ) {
        setChatbotResponse(chatHistory[1].content); // Store the chatbot response
        setDataShow(true); // Set data show flag
      } else {
        console.error("Invalid chat history format:", chatHistory);
        // Handle error for invalid response format
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      // Handle error for network or server issues
    } finally {
      setIsLoading(false);
      setInputText("");
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setDataShow(true);
    setShowText(inputText)
    if (inputText.trim() !== "") {
      fetchChatbotResponse(inputText.trim());
      setInputText("");
    }
    // navigate('/chat')
  };
  const handleButtonClick = (value) => {
    setDataShow(true);
    setInputText(value);
    fetchChatbotResponse(value);
    setShowText(value);
  };
 

 

  useEffect(() => {
    if (chatbotResponse) {
      const initialChars = chatbotResponse.substring(0, 2); // Reveal first two characters
      console.log(initialChars)
      const newMessages = [...messages];
      newMessages.push({ text: initialChars, isUser: false });
      setMessages(newMessages);
  
      let currentChar = 2; // Start from the third character
  
      const typingInterval = setInterval(() => {
        if (currentChar < chatbotResponse.length) {
          const newMessages = [...messages];
          newMessages.push({
            text: chatbotResponse.substring(0, currentChar + 1),
            isUser: false,
          });
          setMessages(newMessages);
          currentChar++;
        } else {
          clearInterval(typingInterval);
        }
      }, 10); // Adjust typing speed as desired (milliseconds)
  
      // Cleanup function to clear the interval on unmount
      return () => clearInterval(typingInterval);
    }
  }, [chatbotResponse]);
  // ${isExpanded ? 'w-full h-full' : ''}
  return (
    <div className={`m-4 mb-16 p-5 sm:h-96 rounded-xl bg-[#fefefe] border-2 border-white`}>
      {isLoading || dataShow ? (
        <div className={`fixed top-0 left-0 w-full h-full z-50 bg-[#fafafa] flex flex-col  justify-between messages-container overflow-scroll mx-auto  rounded-lg my-2`}>
          <button onClick={()=>setDataShow(false)}>exit chat</button>
          {messages.map((msg, index) => (
            
            <div
              key={index}
              className={
                msg.isUser ? "user-message m-1 p-1" : "chatbot-message m-1 p-1"
              }
              style={{ justifyContent: "flex-start" }}
            >
              {msg.isUser ? (
                <div className="flex flex-col justify-start items-start ">
                  <div className="flex flex-row justify-start items-start ">
                    {" "}
                    <img src={Profile} className="mr-1 w-6" />{" "}
                    <p className="mb-2">
                      <b>You:</b>
                    </p>
                  </div>
                  <span className="flex flex-col justify-start items-start ">
                    <div className="w-full mb-2">{msg.text}</div>
                  </span>
                </div>
              ) : (
                <div className="flex flex-col justify-start items-start  ">
                  <div className=" flex w-full text-wrap h-auto border-2 p-5 pl-1 ">
                    <div className="p-5  ">
                    <p>User</p>
                    <img className="w-8 h-8 rounded-lg" src={Profile} alt="profile picture" /> 
                   
                    </div>
                  <div className="border-white rounded-lg p-5  shadow-[#072374] shadow-inner bg-slate-200 w-3/4">
                     {showText}
                  </div>
                  </div>

                  <div className=" border-2 border-black p-3 rounded-lg m-3">
                  <div className="flex justify-start items-start ">
                    <img
                      src={Copilot}
                      alt="bot"
                      className=" mr-1 w-1/12 rounded-xl border-2 border-black"
                      style={{ alignSelf: "flex-start" }}
                    />{" "}
                    <p className="mb-2 font-sans font-semibold">
                      <b>PEx AI:</b>
                    </p>
                  </div>
                  <span className="flex flex-col justify-start items-start shadow-inner shadow-black p-3">
                    <div className="w-full mb-2 font-sans ">{msg.text}</div>
                  </span>
                  </div>
                  </div>
                  
              )}
            </div>
          ))}

        <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between px-1 rounded-lg items-center bg-[#FFFFFF] py-2 sm:flex-nowrap flex-wrap border-blue-200"
              >
                <div className="flex flex-row justify-between items-center sm:w-full w-10/12 border-2 border-blue-200 sm:mx-1 rounded-lg">
                  <input
                    type="text"
                    value={inputText}
                    className="sm:w-full w-3/4 px-1 text-md sm:my-1 my-0 min-h-[30px] bg-transparent focus:outline-none left-padding: 2px border-blue-200 h-auto"
                    onChange={(e)=>setInputText(e.target.value)}
                    placeholder="Ask about your property here ..."
                    required
                  />
                </div>

                <button
                type="submit"
                disabled={isLoading}
                className={`sm:w-full w-10/12 justify-center items-center bg-[#8CAFFD] text-black text-md px-2 rounded-lg py-2 relative mt-4 ${isLoading ? 'cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <div className={`sm:w-full w-10/12 justify-center items-center bg-[#8CAFFD] text-black text-md px-2 rounded-lg py-2 relative mt-4`}>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                  </div>
                  </div>
                ) : (
                  <p>Submit {"->"}</p>
                )}
              </button>


            </form>
        </div>
      ) : (
        <>
          <div className="flex flex-row flex-wrap justify-center items-center text-lg my-2 mx-auto">
           
          </div>


          <div className="flex flex-col px-1">

          <div className="flex flex-row justify-content:start w-10/12 mx-1 my-4  flex-wrap">
            <button
              className="text-[7px] bg-[#FFFFFF] p-1 rounded-full m-1 w-2/5 border border-blue-200 flex flex-row justify-center items-center"
              onClick={() => handleButtonClick("Noida vs Gurgaon Properties")}
            >
              <img src={gate} className="mr-2 w-2/5" alt="" />
              Noida vs Gurgaon
            </button>
            <button
              className="text-[7px] bg-[#FFFFFF]  p-1 rounded-full m-1 w-2/5 border border-blue-200 flex flex-row justify-center items-center"
              onClick={() => handleButtonClick("Office Space in Noida")}
            >
              <img src={building} className="mr-2 w-1/5" alt="" />
              Office Space in Noida
            </button>
            
          </div>

          <div className="flex flex-row justify-content:start w-10/12 mx-1 my-4  flex-wrap">
          <button
              className="text-[7px] bg-[#FFFFFF]  p-1 rounded-full m-1 w-1/4 border border-blue-200 flex flex-row justify-center items-center"
              onClick={() => handleButtonClick("Top Projects in Delhi NCR")}
              disabled={isLoading}
            >
              <img src={laptop} className="mr-2 w-1/5" alt="" />
              Top Projects in Delhi
            </button>
          </div>

          </div>

        </>
      )}



    <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between px-1 rounded-lg items-center bg-[#FFFFFF] py-2 sm:flex-nowrap flex-wrap border-blue-200"
      >
        <div className="flex flex-row justify-between items-center sm:w-full w-10/12 border-2 border-blue-200 sm:mx-1 rounded-lg">
          <input
            type="text"
            value={inputText}
            className="sm:w-full w-3/4 px-1 text-md sm:my-1 my-0 min-h-[30px] bg-transparent focus:outline-none left-padding: 2px border-blue-200 h-auto"
            onChange={(e)=>setInputText(e.target.value)}
            placeholder="Ask about your property here ..."
            required
          />

        </div>

        <button
        type="submit"
        disabled={isLoading}
        className={`sm:w-full w-10/12 justify-center items-center bg-[#8CAFFD] text-black text-md px-2 rounded-lg py-2 relative mt-4 ${isLoading ? 'cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
          <div className={`sm:w-full w-10/12 justify-center items-center bg-[#8CAFFD] text-black text-md px-2 rounded-lg py-2 relative mt-4`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
          </div>
          </div>
        ) : (
          <p>Submit {"->"}</p>
        )}
      </button>


    </form>
    </div>
  );
}

export default Chatbot;