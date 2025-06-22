import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import img from "../../assets/pageonebackgroundimage.jpg";
// import imgone from "../../assets/ipadPro.png"
import imgone from "../../assets/iPadPro.png";
import imgtwo from "../../assets/iphone.png";
import { HiMiniArrowUturnRight } from "react-icons/hi2";

const Header = () => {
  return (
    <div
      className=" h-172 bg-no-repeat bg-center bg-cover flex flex-col bg-gradient-to-b from-white via-white/50 to-white "
      style={{ backgroundImage: ` url(${img}) ` }}
    >
      <div>
        <div className="flex flex-row  justify-between h-20 w-100% ">
          <div className="">
            {" "}
            <img
              className="h-15 w-40 ml-30 mt-2"
              src="src/assets/Billeasylogo.png"
            />
          </div>
          <div className="flex flex-row  h-7 w-53 bg-blue-600 rounded-xl mr-30 mt-5 align-centre justify-center text-center ">
            {" "}
            <h3 className="text-white text-lg font-normal ">
              Request Early Access
            </h3>
            <FaLongArrowAltRight className="text-white mt-1.5 ml-1 h-5 w-5" />
          </div>
        </div>{" "}
      </div>

      <div className="flex flex-row h-70 w-100%">
        <div className="flex flex-col h-40 w-160 ml-25 mt-10">
          <h2 className="text-5xl text-black font-semibold">
            Construction <span className="text-blue-600">Simplified.</span>
          </h2>
          <h3 className="text-3xl font-semibold">
            <span className="text-blue-600">Stop Drowning</span> in Paperwork.
            Build <br /> More,{" "}
            <span className="text-blue-600">Manage Less.</span>{" "}
          </h3>
          <p className="text-base font-medium">
            Billeasy is the smart, intuitive platform built specifically for
            construction professionals to <br />
            streamline operations, boost profitability, and reclaim their time.
            Get early access to the <br /> Beta and transform your business.
          </p>
          <div className=" flex flex-row h-10 w-38 mt-2 align-centre justify-center text-center bg-blue-600 rounded-xl ">
            <h3 className="text-lg font-normal   text-white ">Early access</h3>{" "}
            <FaLongArrowAltRight className="text-white ml-2 mt-1.5 h-5 w-5" />
          </div>
          <div className="flex flex-row -ml-25 w-130">
            <img
              className="h-70  mt-15 w-140 object-cover relative left-20 "
              src={imgone}
            />
            <img className="h-85 w-70" src={imgtwo} />
          </div>
        </div>
        <div className="flex flex-col h-80 w-110 border-2 align-centre justify-center p-10 rounded-2xl ml-20 mt-20 gap-5 ">
          <h2 className="text-4xl text-blue-600 font-semibold">
            Request a Demo
          </h2>
          <input
            className="outline-none border-b-2 border-blue-600 placeholder-[rgba(15, 15, 15, 0.3)]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="outline-none border-b-2 border-blue-600"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="outline-none border-b-2 border-blue-600 "
            type="tel"
            placeholder="Enter Your Number"
          />
          <input
            className="outline-none border-b-2 border-blue-600 "
            type="text"
            placeholder="Company Name"
          />
          <button className="flex flex-row  h-20 w-30 bg-blue-600 text-white  rounded-2xl p-2 align-centre justify-center text-center ">
            Submit <HiMiniArrowUturnRight className="mt-1 ml-2" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
