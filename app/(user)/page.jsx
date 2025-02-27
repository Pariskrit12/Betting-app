import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "@/components/Card";



export default function page() {
  
 
  return (
    <>
      <div className=" mt-[2.7rem] shadow-2xl rounded-lg ml-[2rem] text-white bg-gradient-to-b from-blue-800 to-gray-800 h-[18rem]">
        <div className="flex flex-col ml-[3rem] pt-[2rem]">
          <h className="text-5xl font-bold ">Join The Fun</h>
          <h className="text-5xl font-bold ">Betting MarketPlace!</h>
          <p className="mt-[1rem]">
            Bets With Transparency and real-time updates
          </p>
          <div className="border-[1px] rounded-lg w-[13rem] mt-[2rem] h-[4rem] flex items-center gap-[10px] px-[10px]">
            <p>Start Betting Now</p>
            <FontAwesomeIcon icon={faArrowRight} className="h-[3rem] " />
          </div>
        </div>
      </div>
      <div className="text-white flex ml-[2rem]  justify-between mt-[10px]">
        <p>Trending</p>
        <p>See more</p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-1">
        <Card />
      </div>
    </>
  );
}
