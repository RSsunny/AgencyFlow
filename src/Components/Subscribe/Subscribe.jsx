const Subscribe = () => {
  return (
    <div className="max--w-7xl mx-auto px-2 md:px-5 lg:px-0 text-center my-20 capitalize">
      <h3 className="text-green-500 my-5">SUBSCRIBE</h3>
      <h1 className="text-3xl font-bold my-2">
        Subscribe to get the latest <br /> news about us
      </h1>
      <p>Please drop your email below to get daily update about what we do</p>
      <div className="relative w-1/2 mx-auto mt-8">
        <input
          className="w-full px-2  py-4 border border-black rounded-md"
          placeholder="Enter Your Email Adress"
          type="email"
          name="email"
        />
        <h4 className="bg-[#F55F1D] text-white px-4 py-2 rounded-md absolute top-2 right-2 cursor-pointer">
          {" "}
          Subscribe
        </h4>
      </div>
    </div>
  );
};

export default Subscribe;
