import Container from "@/Shared/Container";
import Title from "@/Shared/Title";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
  return res.json();
}

const Featured = async () => {
  const data = await getData();
  console.log(data);
  return (
    <Container>
      <Title
        title={"Featured Project"}
        subTitle={"We provide the Perfect Solution to your business growth "}
      ></Title>
      <div className="my-20 grid grid-cols-4 gap-5">
        <div className="row-span-2 col-span-2 h-full">
          <div className="h-4/5 ">
            <Image
              className="h-full w-full rounded-xl"
              src={data[0]?.image}
              width={500}
              height={500}
              alt={data[0]?.title}
            ></Image>
          </div>
          <p className="text-xs my-2">
            App design - {data[0]?.created_at.slice(0, 7)}
          </p>
          <h1 className="font-bold">{data[0]?.title}</h1>
        </div>
        <div className="">
          <div className="">
            <Image
              className="rounded-xl"
              src={data[1]?.image}
              width={500}
              height={500}
              alt={data[1]?.title}
            ></Image>
          </div>
          <p className="text-xs ">
            App design - {data[1]?.created_at.slice(0, 7)}
          </p>
          <h1 className="font-bold">{data[1]?.title}</h1>
        </div>
        <div className="">
          <div className="rounded-xl">
            <Image
              className=""
              src={data[2]?.image}
              width={500}
              height={500}
              alt={data[2]?.title}
            ></Image>
          </div>
          <p className="text-xs ">
            App design - {data[2]?.created_at.slice(0, 7)}
          </p>
          <h1 className="font-bold">{data[2]?.title}</h1>
        </div>
        <div className="">
          <div className="">
            <Image
              className="rounded-xl"
              src={data[3]?.image}
              width={500}
              height={500}
              alt={data[3]?.title}
            ></Image>
          </div>
          <p className="text-xs ">
            App design - {data[3]?.created_at.slice(0, 7)}
          </p>
          <h1 className="font-bold">{data[3]?.title}</h1>
        </div>
        <div className="">
          <div className="">
            <Image
              className="rounded-xl"
              src={data[4]?.image}
              width={500}
              height={500}
              alt={data[4]?.title}
            ></Image>
          </div>
          <p className="text-xs ">
            App design - {data[4]?.created_at.slice(0, 7)}
          </p>
          <h1 className="font-bold">{data[4]?.title}</h1>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
