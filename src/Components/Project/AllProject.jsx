import Container from "@/Shared/Container";
import ProjectCard from "./ProjectCard";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/AllProject");
  return res.json();
}
const AllProject = async () => {
  const data = await getData();
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20">
        {data?.map((item) => (
          <ProjectCard key={item.id} item={item}></ProjectCard>
        ))}
      </div>
    </Container>
  );
};

export default AllProject;
