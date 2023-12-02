async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/WorkList");
  return res.json();
}

const WorkList = async () => {
  const data = await getData();
  console.log(data);
  return <div></div>;
};

export default WorkList;
