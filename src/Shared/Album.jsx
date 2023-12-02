import Image from "next/image";

const Album = ({ img1, img2, img3, img4 }) => {
  return (
    <div className="grid grid-cols-3 gap-3  justify-center items-center flex-1">
      <div className="  h-[200px] col-span-2">
        <Image
          className=" w-full h-full rounded-xl"
          src={img1}
          width={100}
          height={100}
          alt="phone"
        ></Image>
      </div>
      <div className=" h-[200px]  ">
        <Image
          className="w-full h-full rounded-xl"
          src={img2}
          width={100}
          height={100}
          alt="phone"
        ></Image>
      </div>
      <div className=" h-[200px]">
        <Image
          className="w-full h-full rounded-xl"
          src={img3}
          width={100}
          height={100}
          alt="phone"
        ></Image>
      </div>
      <div className=" h-[200px] col-span-2 ">
        <Image
          className="w-full h-full rounded-xl"
          src={img4}
          width={100}
          height={100}
          alt="phone"
        ></Image>
      </div>
    </div>
  );
};

export default Album;
