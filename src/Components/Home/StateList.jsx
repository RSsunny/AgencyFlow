import Container from "@/Shared/Container";
import { PiUsersThreeLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { IoHappyOutline } from "react-icons/io5";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/StatList");
  return res.json();
}

const StateList = async () => {
  const data = await getData();
  console.log(data);
  return (
    <Container>
      <div className="flex justify-evenly gap-5 py-40">
        <div className="text-center">
          <div className="bg-[#D7F5DC] text-center h-32 w-32 mx-auto flex justify-center items-center rounded-md">
            <PiUsersThreeLight className="text-7xl text-center mx-auto " />
          </div>

          <h1 className="text-3xl my-5 font-bold text-center">
            {data.followers}
          </h1>
          <p className="text-4xl font-bold ">Followers</p>
        </div>
        <div className="text-center">
          <div className="bg-[#D7F5DC] text-center h-32 w-32 mx-auto flex justify-center items-center rounded-md">
            <AiOutlineLike className="text-7xl text-center mx-auto " />
          </div>

          <h1 className="text-3xl my-5 font-bold text-center">{data.solved}</h1>
          <p className="text-4xl font-bold ">Solved Problems</p>
        </div>
        <div className="text-center">
          <div className="bg-[#D7F5DC] text-center h-32 w-32 mx-auto flex justify-center items-center rounded-md">
            <IoHappyOutline className="text-7xl text-center mx-auto " />
          </div>

          <h1 className="text-3xl my-5 font-bold text-center">
            {data.customers}
          </h1>
          <p className="text-4xl font-bold ">Happy Customers</p>
        </div>
        <div className="text-center">
          <div className="bg-[#D7F5DC] text-center h-32 w-32 mx-auto flex justify-center items-center rounded-md">
            <GrProjects className="text-7xl text-center mx-auto " />
          </div>

          <h1 className="text-3xl my-5 font-bold text-center">
            {data.projects}
          </h1>
          <p className="text-4xl font-bold ">Projects</p>
        </div>
      </div>
    </Container>
  );
};

export default StateList;
