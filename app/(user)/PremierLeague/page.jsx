import Card from "@/components/Card";
import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <>
    <div className="text-white bg-blue-300 mt-[2.8rem] ml-[2rem] bg-gradient-to-b from-blue-800 to-gray-800 rounded-lg items-center h-[18rem] gap-[6rem] p-[2rem] flex">
      <div>
      <h1 className="text-4xl font-bold">Bet As Much As you can</h1>
      <p className="text-2xl">It's a free world of betting</p>
      </div>
      <div className="relative w-[30rem]  h-[15rem]">
       <Image src="/jjjj.jpg" alt="ronaldo" fill className="object-cover rounded-lg"></Image>
      </div>
    </div>
      <div className="grid md:grid-cols-3 gird-cols-2 mt-[2.3rem]">
        <Card leagueType="premierLeague" />
      </div>
    </>
  );
}
