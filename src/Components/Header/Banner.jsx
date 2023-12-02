import React from "react";
import Button from "@/Shared/Button";
import BrandList from "../Home/BrandList";
import Album from "@/Shared/Album";
async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/HeroList");
  return res.json();
}
const Banner = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="bg-gradient-to-r from-[#D7F5DC] to-[#D7F5DC] -mt-24 py-10 mb-20">
      <div className="  max-w-7xl mx-auto px-2 md:px-5 lg:px-0 h-[700px]">
        <div className="flex justify-center items-center h-full gap-10 lg:gap-32">
          <div className="flex-1">
            <div className="">
              <h1 className="text-6xl font-bold mb-5">{data.title}</h1>
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
          <Album
            img1={data.image1}
            img2={data.image2}
            img3={data.image3}
            img4={data.image4}
          ></Album>
        </div>
      </div>
      <BrandList></BrandList>
    </div>
  );
};

export default Banner;
