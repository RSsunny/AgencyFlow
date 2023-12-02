import AllService from "@/Components/Services/AllService";
import BannerLink from "@/Shared/BannerLink";
import Title from "@/Shared/Title";

const ServicePage = () => {
  return (
    <>
      <BannerLink title={"Our Services"}></BannerLink>
      <Title
        title={"Our All Services"}
        subTitle={"We Provide BestWeb design services"}
      ></Title>
      <AllService />
    </>
  );
};

export default ServicePage;
