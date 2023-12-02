import Container from "@/Shared/Container";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/BrandList");
  return res.json();
}

const BrandList = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="bg-white ">
      <Container>
        <div className="flex justify-between gap-10 py-10 ">
          {data?.map((brand) => (
            <div key={brand.id}>
              <Image
                src={brand.image}
                width={100}
                height={100}
                alt={brand.name}
              ></Image>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BrandList;
