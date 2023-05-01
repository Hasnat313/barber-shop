import React from "react";
import "../../../Styles/Styles.css";
import lady from "../../../assets/icons/barberrr.png";
const Home = () => {
  return (
    <div className="h-[651px] ">
      <div className="background-image-landing bg-[#1E1E1E] ">
        <div className="flex ">
          <div className="col-md-6 ml-10">
            <p className="text-[72px] font-normal text-[white] leading-[90px]]">
              Your Hair
            </p>
            <p className="text-[60px] text-[#C5AC80] leading-[70.31px]">
              Deservers The Best
            </p>
            <p className="text-[22px] text-[#FFFFFF] leading-[48px]">
              Suspendisse velit risus, efficitur nec lacinia sit amet, finibus a
              dolor. Aenean elementum lacinia purus, non rhoncus justo dignissim
              sed.
            </p>
            <button className="w-[146px] h-[43px] bg-[#C5AC80] rounded-[70px] ">
              Book Now
            </button>
          </div>
          <div className="col-md-6 background-image-lady-background ml-[-40px]">
            <div className="">
              <img
                src={lady}
                className="z-40 mt-[-40px] w-[918px] h-[638px] -ml-10"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
