import Banner from "@/Components/Header/Banner";
import Navbar from "@/Components/Header/Navbar";
import WorkList from "@/Components/Home/WorkList";
import Logo from "@/Utility/Logo";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <WorkList></WorkList>
    </div>
  );
};

export default HomePage;
