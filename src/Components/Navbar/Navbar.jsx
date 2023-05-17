import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavLinks from "./NavLinks"

const Navbar = () => {
const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-3 md:w-auto w-full flex justify-between">
          <img src={logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl object-right md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon  name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center  mt-3 lg:gap-5 sm:gap-0 gap-1 font-[Inter]">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">

            </Link>
          </li> */}
          <NavLinks /> 
        </ul>
        <div >
            <button className='hover:bg-custom-hover md:inline hidden bg-custom-green text-white mr-5 md:px-4 md:py-2 rounded-md cursor-pointer'>
              Contact Us
            </button> 
            <button className='md:inline hidden border-2 border-black text-black  md:px-4 md:py-1.5 rounded-md cursor-pointer'>
            Start for free
            </button>
          </div>
        {/* mobile nav  */}
        <ul
          className={`
        md:hidden bg-white absolute w-full top-0 overflow-y-auto bottom-0 py-2 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              
            </Link>
          </li>
          <div className="py-5">
          <div >
            <button className='hover:bg-custom-hover bg-custom-green text-white mr-5 px-4 py-2 rounded-md cursor-pointer'>
              Contact Us
            </button> 
            <button className='border-2 border-black text-black  px-4 py-1.5 rounded-md cursor-pointer'>
            Start for free
            </button>
          </div>
          </div>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
