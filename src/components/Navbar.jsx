import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experince", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
      <nav
        className={`fixed top-0 left-0 bg-gradient-to-b from-gray-600 to-transparent  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/70 shadow-md text-gray-700 backdrop-blur-lg py-2 md:py-4 h-19"
            : "h-22"
        } `}
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            className={`h-30 ${
              isScrolled && "invert opacity-80"
            } transition-all duration-300`}
            src={assets.logo}
            alt="logo"
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((item, index) => (
            <Link
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-800" : "text-white"
              } transition-all duration-300`}
              key={index}
              to={item.path}
            >
              {item.name}
              <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`}></div>
            </Link>
          ))}
          <div />
          <Link
            to="/dashboard"
            className={`border px-4 py-1 rounded-full text-sm font-light cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } transition-all duration-300`}
          >
            Dashboard
          </Link>
        </div>
        {/* Desctop Right */}
        <div className="hidden md:flex items-center gap-3">
          <img
            className={`h-8 w-8 mt-2 ${
              isScrolled && "invert"
            } transition-all duration-300`}
            src={assets.searchIcon}
            alt="search-icon"
          />
          <button className="rounded-full py-2.5 px-8 cursor-pointer text-white bg-black">
            Login
          </button>
        </div>
        {/* mobile Button */}
        <div className="flex item-center gap-3 md:hidden ">
            <img className={`h-6 px-3 ${isScrolled && "invert"}`} onClick={()=> setIsMenuOpen(true)} src={assets.menuIcon} alt="menu-icon" />
        </div>

        {/* Mobile menu */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}  `}>
          <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
            <img className="h-6.5" src={assets.closeIcon} alt="menu-Icon" />
          </button>
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/dashboard" className="border rounded-full px-5 py-2 text-sm">Dashboard</Link>
          <button className="bg-black rounded-full px-5 py-2 text-white">Login</button>
        </div>
      </nav>

    
  );
};
export default Navbar;
