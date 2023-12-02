import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";

const TeamCard = ({ item }) => {
  console.log(item);
  return (
    <div className="">
      <div className="relative h-[400px]">
        <Image
          className="h-full rounded-xl"
          src={item.image}
          width={400}
          height={400}
          alt={item.name}
        ></Image>
        <div className="flex items-center gap-3 text-xl rounded-full px-8 bg-white absolute bottom-10 left-28 lg:left-20 py-2">
          <Link href={item?.facebook}>
            <FaFacebook />
          </Link>
          <Link href={item?.twitter}>
            <FaTwitter className=" " />
          </Link>
          <Link href={item?.instagram}>
            <FaInstagram></FaInstagram>
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center">{item.name}</h1>
    </div>
  );
};

export default TeamCard;
