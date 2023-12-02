import Link from "next/link";
import Container from "./Container";
import { IoIosArrowForward } from "react-icons/io";

const BannerLink = ({ title, link }) => {
  return (
    <div className="h-[300px] bg-gray-100 -mt-24 mb-20">
      <Container>
        <h1 className="pt-44 text-4xl font-bold">{title}</h1>
        <div className="flex items-center pt-5 font-bold ">
          <Link href={"/"}>Home</Link>
          <IoIosArrowForward />
          <p className="text-green-500">{title}</p>
        </div>
      </Container>
    </div>
  );
};

export default BannerLink;
