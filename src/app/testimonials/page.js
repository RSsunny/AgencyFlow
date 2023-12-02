import Testimonial from "@/Components/Testimonial/Testimonial";
import BannerLink from "@/Shared/BannerLink";
import Title from "@/Shared/Title";

const TestimonialPage = () => {
  return (
    <>
      <BannerLink title={"Testimonial List"}></BannerLink>
      <Title
        title={"Testimonial List"}
        subTitle={"Better Agency/SEO Solution At Your Fingertips"}
      ></Title>
      <Testimonial></Testimonial>
    </>
  );
};

export default TestimonialPage;
