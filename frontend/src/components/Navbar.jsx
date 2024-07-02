import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import FullLogo from "../assets/fulllogo.webp";
import Shortlogo from "../assets/shortLogo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", route: "/" },
    { id: 2, text: "About", route: "/about" },
    { id: 3, text: "Store", route: "/store" },
    { id: 4, text: "Products", route: "/product" },
    { id: 5, text: "Partnership", route: "/partnership" },
    { id: 6, text: "Contact Us", route: "/contactus" },
    { id: 5, text: "Login", route: "/login" },
  ];

  return (
    <>
      <div
        className="bg-black text-white flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto px-20 z-[999999999]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <NavLink to="/">
          <img className="w-40" src={FullLogo} alt="Web-logo" />
        </NavLink>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-2 rounded-xl font-semibold m-2 cursor-pointer duration-300 "
            >
              <NavLink
                to={item.route}
                activeClassName="active"
                className="flex items-center"
              >
                {item.text}
              </NavLink>
            </li>
          ))}
          
        </ul>
        {/* Mobile Navigation Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={`${
            nav ? "fixed" : "hidden"
          } md:hidden left-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`}
        >
          <img className="w-20" src={Shortlogo} alt="Web-logo" />
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black text-white cursor-pointer border-gray-600"
            >
              <NavLink to={item.route} onClick={() => setNav(false)}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
