import React from "react";
import logo from "../../../assets/icons/logo.png";
const Navbar = () => {
  return (
    <div className=" flex mt-2 py-3">
      <div className="col-md-4">
        <img src={logo} className="w-[213px] h-[44px] ml-5" />
      </div>
      <div className="col-md-8 flex justify-evenly items-center">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Advantages</p>
        <button className=" w-[146px] h-[43px] rounded-[70px] bg-[#C5AC80]">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
