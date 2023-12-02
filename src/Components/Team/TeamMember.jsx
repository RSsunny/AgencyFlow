import Container from "@/Shared/Container";
import Title from "@/Shared/Title";
import TeamCard from "./TeamCard";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/TeamList");
  return res.json();
}

const TeamMember = async () => {
  const data = await getData();
  return (
    <Container>
      <Title
        title={"Our Team Member"}
        subTitle={"Check our awesome team members"}
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center justify-between gap-5 py-32">
        {data?.map((item) => (
          <TeamCard key={item.id} item={item}></TeamCard>
        ))}
      </div>
    </Container>
  );
};

export default TeamMember;
