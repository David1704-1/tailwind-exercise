import banner from "../assets/Home-Banner.png";

export const HeaderContent = () => {
  return (
    <div className="text-white">
      <img src={banner} />
      <div className="top-60 left-[650px] absolute z-40">
        <h1 className="text-xl">Welcome to "CORTEZZA"</h1>
        <h1 className="text-4xl">Where sophisticated wood</h1>
        <h1 className="text-4xl">Craftmanship Meets Elegance</h1>
        <h1 className="text-4xl mb-4">And Functionallity.</h1>
        <h1 className="text-xl mb-8">
          We will work together to achieve the best look that fits your needs.
        </h1>
        <span className="bg-orange-600 pl-6 pr-6 pb-4 pt-4 rounded-s">
          READ MORE
        </span>
      </div>
    </div>
  );
};
