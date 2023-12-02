import Image from "next/image";

const ProjectCard = ({ item }) => {
  return (
    <div className="shadow-lg rounded-xl">
      <div className="p-4">
        <Image
          className="w-full rounded-xl"
          src={item.image}
          width={500}
          height={500}
          alt={item.title}
        ></Image>
      </div>
      <h1 className="text-2xl font-bold pb-4 px-4">{item.title}</h1>
    </div>
  );
};

export default ProjectCard;
