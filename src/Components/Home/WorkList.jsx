import Container from "@/Shared/Container";
import Title from "@/Shared/Title";
import { FaArrowRightLong } from "react-icons/fa6";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/WorkList");
  return res.json();
}

const WorkList = async () => {
  const data = await getData();
  console.log(data);
  return (
    <Container>
      <Title
        title={"Work List"}
        subTitle={"We provide the Perfect Solution to your business growth"}
      ></Title>
      <div className="flex justify-between gap-10 mt-20">
        {data?.map((item) => (
          <div key={item.id} className="text-center">
            <h1 className="text-2xl font-bold my-3">{item?.title}</h1>
            <p>{item?.des}</p>
            <div className="flex justify-center items-center gap-2 mt-10 text-center hover:underline">
              <button>Learn More</button>
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkList;
