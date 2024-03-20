import aboutImg from "../assets/About.png";

export const AboutUs = () => {
  return (
    <div className="flex flex-row justify-between text-black">
      <div>
        <h1 className="text-6xl ">About Us</h1>
        <span></span>
      </div>
      <div>
        <img src={aboutImg} />
      </div>
    </div>
  );
};
