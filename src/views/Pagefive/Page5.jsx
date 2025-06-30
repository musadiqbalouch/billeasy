import React from "react";
import Pagebackgroundimage from "../../assets/Pagefivebackgroundimage.png";
import Card1 from "../../assets/Cardoneimage.png";
import Card1BackgroundImage from "../../assets/Cardonebackgroundimage.png";
import Card2 from "../../assets/Cardtwoimage.png";
import Card2BackgroundImage from "../../assets/Cardtwobackgroundimage.png";
import Card3 from "../../assets/Cardthreeimage.png";
import Card3BackgroundImage from "../../assets/Cardthreebackgroundimage.png";
import Card4 from "../../assets/Cardfourimage.png";
import Card4BackgroundImage from "../../assets/Cardfourbackgroundimage.png";
import { HiArrowLongRight } from "react-icons/hi2";
// import Card from "../../Components/page5/card";
import Card from "../../Components/page5/Card";

const Page5 = () => {
  const items = [
    {
      id: 1,
      backgroundimages: Card1BackgroundImage,
      image: Card1,
      title: "Cash Flow Headaches?",
      para: "You're constantly chasing payments, struggling with delayed invoices, and battling unexpected cost overruns. Your cash flow is unpredictable, making it hard to plan and grow.",
    },
    {
      id: 2,
      backgroundimages: Card2BackgroundImage,
      image: Card2,
      title: "Communication Chaos?",
      para: "Miscommunications between the office, field, and subcontractors lead to costly mistakes, reworks, and frustrating delays. Information gets lost, and everyone's on a different page.",
    },
    {
      id: 3,
      backgroundimages: Card3BackgroundImage,
      image: Card3,
      title: "Paperwork Overload & Disorganization?",
      para: "  Estimates, invoices, change orders, contracts, receipts  it's a mountain of paper. Manual processes eat up your time, are prone to errors, and make it impossible to find what you need, when you need it.",
    },
    {
      id: 4,
      backgroundimages: Card4BackgroundImage,
      image: Card4,
      title: "Project Tracking Blind Spots?",
      para: "You lack real-time visibility into project progress, expenses, and profitability. Identifying issues early is a struggle, and accurate reporting feels like a distant dream.",
    },
  ];
  return (
    <div
      className="  bg-no-repeat bg-cover bg-center object-cover "
      style={{ backgroundImage: `url(${Pagebackgroundimage})` }}
    >
      <div className=" flex flex-col items-centre justify-center text-center  h-fit w-full  mt-40 xl:flex xl:flex-col items-centre sm:mt-20   xl:h-120 xl:w-300 xl:m-auto xl:mt-40 ">
        <h2 className="text-base text-[rgba(0,0,0,1)] font-bold -mb-6 sm:text-xl lg:text-2xl xl:text-4xl/10  xl:font-bold xl:-mb-6">
          Are these challenges slowing <br /> down your{" "}
          <span className="text-[rgba(12,113,224,1)]">
            {" "}
            construction business?
          </span>
        </h2>
        <div className="  h-full  bg-[rgba(255,255,255,1)] rounded-2xl items-center  p-4 mt-10 mx-auto wf sm:w-170 
         sm:h-h-80 sm:flex sm:flex-row sm:flex-wrap sm:mt-5 lg:flex-nowrap lg:h-60 lg:mt-20  xl:flex xl:h-65 xl:w-full   justify-center text-center xl:p-4 xl:mt-10  ">
          {items?.length > 0
            ? items?.map((item, index) => (
              <div className="flex  flex-col items-center sm:items-center  ">
                <Card
                  key={index}
                  id={item?.id}
                  backgroundimages={item?.backgroundimages}
                  image={item?.image}
                  title={item?.title}
                  para={item?.para}
                />
              </div>
            ))
            : null}
        </div>
        <button className=" flex flex-row h-10 w-35 m-auto mt-5 items-center justify-center text-center text-[rgba(255,255,255,1)]
         bg-[rgba(12,113,224,1)] p-3 text-sm rounded-3xl sm:mt-5 lg:mt-15 xl:h-10 xl:w-35    xl:p-3 xl:text-sm xl:mx-auto">
          Early Access <HiArrowLongRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Page5;
