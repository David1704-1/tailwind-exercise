import logo from "../assets/cortezza-logo.png.png";

const menuItems = ["Home", "About", "Service", "Portfolio", "Contact"];

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-around mb-8">
      <img src={logo} />
      <div>
        {menuItems.map((item) => (
          <span
            key={item}
            className="text-gray-900 mr-4 hover:text-orange-400 cursor-pointer hover:underline"
          >
            {item}
          </span>
        ))}
        <span className="border-orange-400 border-4 pr-8 pl-8 pt-4 pb-4 rounded-s text-orange-400">
          APPOINTMENT
        </span>
      </div>
    </div>
  );
};
