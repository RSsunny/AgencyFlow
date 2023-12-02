import Container from "./Container";

const Title = ({ title, subTitle }) => {
  return (
    <Container>
      <h1 className="text-xl font-bold text-green-500 py-5">{title}</h1>
      <p className="text-3xl font-bold mb-3 w-[400px]">{subTitle}</p>
    </Container>
  );
};

export default Title;
