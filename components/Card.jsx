"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function Card() {
  const[match,setMatch]=useState([]);
  useEffect(()=>{
    const fetchMatches=async()=>{
      try {
        const response=await axios.get("api/matchcontroller/fetchmatch");
        console.log(response.data);
        
        const matches=response.data.message;

        console.log(matches);
        
      } catch (error) {
        console.log("Error in fetching match",error)
      }
    }
    fetchMatches()
  },[])
  return (
    <div className="h-[20rem] w-[20rem] border-[1px] ml-[2rem] mt-[5px] rounded-xl text-white border-gray-500">
      <div className="flex justify-between p-[1rem]">
        <p className="bg-gray-900 h-[1.5rem] w-[5rem] px-[0.6rem] rounded-lg font-semibold">
          Football
        </p>
        <p className="text-gray-500">Thu,Feb 20222222222222222222222222222</p>
        
      </div>
      <div className=" w-[10rem] mx-[5.5rem] ">
        <div className="flex gap-1 items-center px-[1rem]">
          <div className="size-[20px] relative">
            <Image src="/Spain.png" alt="Flag" fill />
          </div>
          <p>Spain</p>
          <FontAwesomeIcon icon={faCircle} className="h-[4px] mt-[3px]" />
          <p>LaLiga</p>
        </div>

        </div>
        <div className=" h-[6rem] w-[15rem] mx-[2.5rem] flex items-center justify-center pl-[1rem]">
            <div className="flex items-center gap-[2rem]">

            <div className="size-[40px] relative">
            <Image
            src="/real.png"
            alt='Club'
            fill
            />
            </div>
            <p>VS</p>
            <div className="h-[43px] w-[55px] relative">
                <Image
                src="/city.png"
                alt="City"
                fill
                />
            </div>
            </div>
      </div>
      <div className="flex  items-center justify-center gap-[1rem]">
        <div className="border-[1px] border-gray-800 w-[5rem] flex flex-col items-center rounded-lg">
            <p>1</p>
            <p>2.7</p>
        </div>
        <div className="border-[1px] border-gray-800 w-[5rem] flex flex-col items-center rounded-lg ">
            <p>X</p>
            <p>3.8</p>
        </div>
        <div className="border-[1px] border-gray-800 w-[5rem] flex flex-col items-center rounded-lg">
            <p>2</p>
            <p>5.2</p>
        </div>
      </div>
      <div className="w-[11rem]  mt-[1rem] mx-[4.4rem] text-xl font-semibold px-[2.8rem] h-[3rem] py-[0.5rem] rounded-xl bg-gradient-to-b from-blue-800 to-gray-800">
        <button>Place Bet</button>
      </div>
    </div>
  );
}
