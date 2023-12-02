import Container from "@/Shared/Container";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/TestimonialList");
  return res.json();
}

const Testimonial = async () => {
  const data = await getData();
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        {data?.map((item) => (
          <div key={item?.id} className="text-center shadow-xl p-4 rounded-xl">
            <div className="px-20  pt-20 pb-10">
              <Image
                className="rounded-xl"
                src={item?.image}
                width={500}
                height={500}
                alt={item?.name}
              ></Image>
            </div>
            <p>{item?.msg}</p>
            <h1 className="text-2xl font-bold py-3">{item?.name}</h1>
            <p className="font-bold pb-5">{item?.designation}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Testimonial;
