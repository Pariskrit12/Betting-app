import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faBell } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="bg-[#0c0f23]  sticky w-full z-20 top-0 start-0 border-b-[1px] border-gray-500 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
        <div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-800">
            BetApp
          </span>
        </div>
        <div className="flex items-center gap-[1rem]">
          <div className="flex ">
            <button
              type="button"
              className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Browse Bets
            </button>
          </div>
          <ul className="text-white font-semibold flex gap-[1rem]">
            <li>
              <span className="flex items-center gap-[3px]">
                <FontAwesomeIcon
                  className="flex-shrink-0 h-[15px] "
                  icon={faHeadphones}
                />
                <a href="">Support</a>
              </span>
            </li>
            <li>Hello jack</li>
          </ul>
          
            <FontAwesomeIcon icon={faBell} className="text-white h-[1rem]" />
        </div>
      </div>
    </nav>
  );
}
