import React from "react";
import Card1 from "../../assets/Page8card1image.png";
import Card2 from "../../assets/page8card2image.png";
// import Card3 from "../../assets/Page8card3image.png";
import Card3 from "../../assets/page8card3image.png";
import { HiArrowLongRight } from "react-icons/hi2";

const Page8 = () => {
  const items = [
    {
      id: 1,
      title: "Step 01",
      image: Card1,
      Paragraph: "Holdback Management with Automated Billing Reminders",
    },
    {
      id: 2,
      title: "Step 02",
      image: Card2,
      Paragraph: "Holdback Management with Automated Billing Reminders",
    },
    {
      id: 3,
      title: "Step 03",
      image: Card3,
      Paragraph: "Holdback Management with Automated Billing Reminders",
    },
  ];
  return (
    <div className="  container w-full items-center justify-center text-center m-auto   xl:w-full lg:pt-10 ">
      <h2 className=" text-base  font-semibold md:text-2xl lg:text-4xl xl:text-5xl xl:font-semibold">
        BillEasy <span className="text-[rgba(12,113,224,1)]"> Extended </span>{" "}
        Capabilities
      </h2>
      <p className="font-medium text-base mt-3 xl:font-medium xl:text-lg xl:mt-3">
        Always be ready for what’s next by easily extending your Bill Easy cloud
        finance software.
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap  xl:flex xl:flex-row xl:flex-nowrap xl:pl-17 xl:pr-17">
        {items?.length > 0
          ? items?.map((item, index) => (
            <div className="  w-fit items-center m-auto justify-center text-center flex flex-col xl:h-100 xl:w-120  xl:flex xl:flex-col ">
              <h1 className=" text-3xl font-semibold text-[rgba(12,113,224,1)] relative top-7 xl:text-3xl  xl:relative xl:top-7">
                {item.title}
              </h1>
              <img
                className=" h-40 w-73 object-cover m-auto relative top-10 xl:h-47 xl:w-85  xl:relative xl:top-10 "
                src={item.image}
              />
              <div
                className=" h-40 w-81 rounded-2xl  xl:h-42 xl:w-91 "
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #0C71E0 0%, #073E7A 100%)",
                }}
              >
                <h3 className=" text-lg font-semibold text-white mt-20 xl:text-xl xl:mt-20">
                  Holdback Management with <br /> Automated Billing Reminders
                </h3>
              </div>
            </div>
          ))
          : null}
      </div>
      <button className=" flex flex-row items-center cursor-pointer justify-center text-center h-10 text-white w-40 p-2 rounded-2xl  bg-[rgba(12,113,224,1)] mt-6 m-auto  xl:h-10  xl:w-42 xl:p-2 xl:text-base ">
        Secure Your Spot <HiArrowLongRight className="xl:ml-1 xl:mt-0.5 xl:text-base" />
      </button>
    </div>
  );
};

export default Page8;
