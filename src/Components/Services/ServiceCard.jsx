import Album from "@/Shared/Album";

const ServiceCard = ({ item }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">{item.title}</h1>
      <p className="mb-5"> {item.des}</p>
      <Album
        img1={item.image1}
        img2={item.image2}
        img3={item.image3}
        img4={item.image4}
      ></Album>
    </div>
  );
};

export default ServiceCard;
