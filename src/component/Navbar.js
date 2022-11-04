import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus, FaPowerOff } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import logo from "../Images/sort_blue.svg";
import { useState } from "react";

const NavBarItem = ({ title, classprops }) => <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-slate-700">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <ul className="text-white hidden md:flex list-none flex-row justify-between items-center flex-initial">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
          {["Movies", "TV Shows", "People", "More"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>
      <div className="xs:hidden">
        <ul className="text-white md:flex list-none flex-row items-center flex-initial">
          {[<FaPlus fontSize={20}/>, <button className="border-2 px-1 ">EN</button>,<IoIosNotifications fontSize={28}/>, <FaPowerOff fontSize={28}/>, <BiSearch fontSize={28} className="text-blue-400"/>].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>
      <div className="flex relative md:hidden">
        {!toggleMenu && <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
        {toggleMenu && <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-0 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
