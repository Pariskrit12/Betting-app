"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

export default function page() {
  const { data: session } = useSession();
  console.log(session);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (session?.user?.id) {
          const response = await axios.get(
            `/api/usercontroller/profile/${session?.user?.id}`
          );
          console.log(response.data.data);
        }
      } catch (error) {
        console.log("Error in fetching user", error);
      }
    };
    fetchUser();
  }, [session]);

  return (
    <div className="text-white bg-gradient-to-b from-blue-800 to-gray-800 mt-[2.7rem] rounded-xl   mx-[2rem] md:h-[18rem] h-[10rem] flex p-[3rem] justify-between items-center  ">
      <div className="flex items-center gap-[1rem] md:gap-[2rem] ">
        <div className="border-[1px] rounded-full md:w-[7rem] md:h-[7rem] w-[5rem] h-[5rem]"></div>
        <div className="">
          <p className="text-lg font-semibold">Ujjwal</p>
          <p className="text-lg font-semibold">Balance</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-evenly">
          <p>100 Bets wins</p>
          <p>bets</p>
        </div>
        <div className="flex">
          <p>400$</p>
          <p>200$</p>
        </div>
      </div>
    </div>
  );
}
