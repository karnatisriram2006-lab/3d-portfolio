import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // <nav
    //   className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    // >
    //   <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
    //     <Link to="/" className="flex items-center gap-2" onClick={()=>{
    //       setactive("");
    //       window.scrollTo(0,0);
    //     }}>
    //       <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
    //        <p className="text-white text-[18px] font-bold cursor-pointer">Sriram <span className="sm:block hidden">|Karnati</span></p>
    //     </Link>
    //     <ul className="list-none hidden sm:flex flex-row gap-10">
    //       {navLinks.map((Link)=>{
    //         <li>
    //           <a href={`#${Link.id}`}>{Link.title}</a>
    //         </li>
    //       })}

    //     </ul>
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-[#050816]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Sriram &nbsp;
            <span className="sm:block hidden"> |Karnati</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#aaa6c3]"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"}  p-2 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-35 z-10 rounded-xl`}
          >
            <ul className=" list-none flex justify-center items-start flex-col  gap-4 ">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-[#aaa6c3]"
                  } p-10 hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}` } className="block w-full" >{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
