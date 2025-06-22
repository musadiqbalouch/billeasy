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
      className="h-screen w-full bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: `url(${Pagebackgroundimage})` }}
    >
      <div className="flex flex-col items-centre justify-center text-center  h-120 w-300 m-auto mt-40 ">
        <h2 className="text-4xl/10 text-[rgba(0,0,0,1)] font-bold -mb-6">
          Are these challenges slowing <br /> down your{" "}
          <span className="text-[rgba(12,113,224,1)]">
            {" "}
            construction business?
          </span>
        </h2>
        <div className="flex h-65 bg-[rgba(255,255,255,1)] rounded-2xl items-center justify-center text-center p-4 mt-10 ">
          {items?.length > 0
            ? items?.map((item, index) => (
                <div className="w-full grid grid-cols-4">
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
        <button className="flex flex-row h-10 w-35 ml-130 mt-15 items-center justify-center text-center text-[rgba(255,255,255,1)] bg-[rgba(12,113,224,1)] p-3 text-sm rounded-3xl">
          Early Access <HiArrowLongRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Page5;
