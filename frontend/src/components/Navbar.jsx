import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const socialIcons = [
    {
      id : 1,
      icons : <FaWhatsapp/>,
    },
    {
      id : 2,
      icons : < FaInstagram/>,
    },

    {
      id : 3,
      icons : <FaYoutube/>
    }
  ]

  return (
    <div className="w-full z-50 fixed  bg-[#007681] rounded-b-xl border-2 border-black">
      <div className="py-3 w-full mt-3 ">
        <div className="w-11/12 mx-auto">
          <div className="flex sm:flex-row items-center justify-between">

            <div className="flex flex-col sm:flex-row">
            <div className="flex bg-[#000000] px-2 py-2 w-[12rem] -ml-3 rounded-md gap-1 -mt-3 ">
              <div className="flex">
                <div className="flex justify-center text-center bg-white rounded-md mx-auto">
                  <p className="mt-1 text-lg">
                    <IoIosCall />
                  </p>
                  <p className="text-[#FF6D1F] text-sm sm:text-md mt-0 sm:mt-1 ">24x7</p>
                </div>
              </div>
              <p className="text-[#FFFFFF] text-sm sm:text-md mt-0 sm:mt-1">+91 8433700000</p>
            </div>

            <div
              className="font-normal text-[22px] lg:text-[30px] ml-5 sm:ml-12 lg:ml-[10rem] xl:ml-[20rem] leading-[35.55px] tracking-wider "
              style={{ fontFamily: "Rubik Moonrocks" }}
            >
              JOURNEYONWHEEL
            </div>

            </div>

            <div 
              className="w-[20px] h-[20px] lg:w-[35.88px] lg:h-[35.88px] "
            >
              
              <div className="flex gap-1 justify-center  sm:-mt-2 -ml-20 -mt-8  sm:-ml-40 ">
                {
                  socialIcons.map((socialIcon)=>{
                    return (

                      <div key={socialIcon.id} className="flex">
                       <div className="text-white bg-black py-2 px-2 lg:py-3 lg:px-4 rounded-md text-xl "> {socialIcon.icons}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
