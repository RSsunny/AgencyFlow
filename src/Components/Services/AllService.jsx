import Container from "@/Shared/Container";
import ServiceCard from "./ServiceCard";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/AllService");
  return res.json();
}

const AllService = async () => {
  const data = await getData();
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 pt-20">
        {data?.map((item) => (
          <ServiceCard key={item.id} item={item}></ServiceCard>
        ))}
      </div>
    </Container>
  );
};

export default AllService;
