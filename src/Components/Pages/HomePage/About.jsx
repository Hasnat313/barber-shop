import React from "react";
import "../../../Styles/Styles.css";
import man from "../../../assets/icons/man.png";
const About = () => {
  return (
    <>
      <div className="">

        <div className="col-6 justify-end flex float-right">
          <div className="w-[150px] h-[150px] rounded-[6px] bg-[#C5AC80] flex rotate-45 -mt-3 mr-[-20px] "></div>
        </div>
      </div>
      <div className="relative">

        <div className="bg-[#1E1E1E]  background-image-About  flex">
          <div className="w-[431px] h-[579px]  col-md-6 flex justify-center items-center mt-10 -ml-1">
            <img src={man} />
          </div>
          <div className="col-md-4 text-white mt-[70px] ">
            <h2>About Us</h2>
            <p>
              Suspendisse velit risus, efficitur nec lacinia sit amet, finibus a
              dolor. Aenean elementum lacinia purus, non rhoncus justo dignissim
              sed.
            </p>
            <p>
              Nulla magna ipsum, pellentesque id rutrum eget, feugiat eget velit.
              Mauris ornare, lacus in faucibus faucibus, ligula ligula imperdiet
              tortor, quis sodales nunc turpis nec diam.
            </p>
            <button className="w-[146px] h-[43px] bg-[#C5AC80] rounded-[70px]">
              Book Now
            </button>
          </div>
        </div>
      </div>


      {/* <span className="absolute left-0 bottom-0 w-[250px] h-[250px] rounded-[6px] bg-[#C5AC80] flex rotate-45 "></span> */}

    </>
  );
};

export default About;
