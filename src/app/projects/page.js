import AllProject from "@/Components/Project/AllProject";
import BannerLink from "@/Shared/BannerLink";
import Title from "@/Shared/Title";

const ProjectPage = () => {
  return (
    <>
      <BannerLink title={"All Project"}></BannerLink>
      <Title
        title={"All Project"}
        subTitle={"Better Agency/SEO Solution At Your Fingertips"}
      ></Title>
      <AllProject></AllProject>
    </>
  );
};

export default ProjectPage;
