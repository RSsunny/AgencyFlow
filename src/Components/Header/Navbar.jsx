import Logo from "@/Utility/Logo";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5 max-w-7xl mx-auto px-5 lg:px-0">
      <Logo />
      <NavList />
    </div>
  );
};

export default Navbar;
