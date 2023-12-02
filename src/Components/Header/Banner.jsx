import React from "react";
import Navbar from "./Navbar";
import Button from "@/Shared/Button";
import Image from "next/image";
import Container from "@/Shared/Container";
import BrandList from "../Home/BrandList";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#D7F5DC] to-[#D7F5DC] -mt-24 py-10 ">
      <div className=" h-[700px] max-w-7xl mx-auto px-2 md:px-5 lg:px-0 ">
        <div className="flex justify-center items-center h-full gap-10 lg:gap-32">
          <div className="flex-1">
            <div>
              <h1 className="text-6xl font-bold mb-5">
                Increase Your Customers Loyalty and Satisfaction
              </h1>
              <p className="mb-10">
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </p>
              <Button
                text={"Get Started"}
                btnbg={"text-white bg-[#20B15A]"}
              ></Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3  justify-center items-center flex-1 ">
            <div className="col-span-2 h-full w-full">
              <Image
                className=" w-full h-full"
                src="https://i.ibb.co/xHRZmgZ/Rectangle-1241.png"
                width={300}
                height={300}
                alt="phone"
              ></Image>
            </div>
            <div className="h-full w-full ">
              <Image
                className="h-full w-full "
                src="https://i.ibb.co/0BZxvZP/Rectangle-1242.png"
                width={300}
                height={300}
                alt="phone"
              ></Image>
            </div>
            <div className="h-full w-full">
              <Image
                className="h-full w-full "
                src="https://i.ibb.co/BtTcsJ1/Rectangle-1243.png"
                width={300}
                height={300}
                alt="phone"
              ></Image>
            </div>
            <div className="col-span-2 ">
              <Image
                className="h-full w-full "
                src="https://i.ibb.co/nR0RG5w/Rectangle-1244-1.png"
                width={300}
                height={300}
                alt="phone"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <BrandList></BrandList>
    </div>
  );
};

export default Banner;
// https://ibb.co/vHLVzWt
// https://ibb.co/KmGmP35
// https://ibb.co/6vbkLb6
// https://ibb.co/GTbmsMm
