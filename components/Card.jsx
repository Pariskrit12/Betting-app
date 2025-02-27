"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Card({ leagueType }) {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchMatches = async () => {
      setIsLoading(true);
      try {
        let endpoint = "";

        if (leagueType === "UCL") {
          endpoint = "/api/matchcontroller/fetchuclmatch";
        }
        if (leagueType === "premierLeague") {
          endpoint = "/api/matchcontroller/fetchPLmatches";
        }
        if (leagueType === "Bundesliga") {
          endpoint = "/api/matchcontroller/fetchBundesligaMatches";
        }
        if (endpoint) {
          const response = await axios.get(endpoint);
          console.log(response.data);
          const match = response.data.data;
          setMatches(match);
        }
      } catch (error) {
        console.log("Error in fetching matches", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMatches();
  }, [leagueType]);
  // matches.map((match) => {
  //   const gameUTCDate=new Date(`${match.utcDate}`);
  //   const localTime=new Date();

  //   let matchStatus="Upcoming";

  //   if(gameUTCDate.getTime()===localTime.getTime()){
  //     matchStatus="Live"
  //   }else if(gameUTCDate.getTime()){

  //   }
  // });
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center ">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only text-white">Loading...</span>
          </div>
        </div>
      ) : (
        Array.isArray(matches) &&
        matches.map((match) => (
          <div>
            <div
              key={match.id}
              className="h-[20rem] w-[20rem] border-[1px] ml-[2rem] mt-[5px] rounded-xl text-white border-gray-500"
            >
              <div className="flex justify-between p-[1rem]">
                <p className="bg-gray-900 h-[1.5rem] w-[5rem] px-[0.6rem] rounded-lg font-semibold">
                  Football
                </p>
                <p className="text-gray-500">
                  {new Date(match.utcDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "2-digit",
                  })}
                </p>
              </div>
              <div className=" w-[20rem] flex items-center justify-center ">
                <div className="flex gap-1 items-center px-[1rem]">
                  <div className="size-[20px] relative">
                    <Image src="/Spain.png" alt="Flag" fill />
                  </div>
                  <p>{match.area.name}</p>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="h-[4px] mt-[3px]"
                  />
                  <p>{match.competition.name}</p>
                </div>
              </div>
              <div className=" h-[6rem] w-[15rem] mx-[2.5rem] flex items-center justify-center pl-[1rem]">
                <div className="flex items-center gap-[2rem]">
                  <div className="flex flex-col items-center justify-center w-[5rem]">
                    <div className="h-[43px] w-[55px] relative ">
                      <Image src="/city.png" alt="City" fill />
                    </div>
                    <div className="text-gray-500 text-[12px]">
                      <p>{match.homeTeam.shortName}</p>
                    </div>
                  </div>
                  <p>VS</p>
                  <div className="flex flex-col items-center justify-center w-[5rem]">
                    <div className="h-[43px] w-[55px] relative ">
                      <Image src="/city.png" alt="City" fill />
                    </div>
                    <p className="text-gray-500 text-[12px]">
                      {match.awayTeam.shortName}
                    </p>
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
          </div>
        ))
      )}
    </>
  );
}
