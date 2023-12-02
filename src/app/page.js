import Banner from "@/Components/Header/Banner";
import Featured from "@/Components/Home/Featured";
import StateList from "@/Components/Home/StateList";
import WorkList from "@/Components/Home/WorkList";
import Logo from "@/Utility/Logo";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <WorkList></WorkList>
      <StateList></StateList>
      <Featured />
    </div>
  );
};

export default HomePage;
