"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faBell,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
 //const dispatch=useDispatch()
 //const user=useSelector(state=>state.auth.user)
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    router.push("/api/auth/signin");
  };
  const handleLogoutClick = async () => {
    await signOut({ redirect: false });
    //dispatch(logout({username}))
    router.push("/");
  };
  const handleBrowseBets = () => {
    if (!session) {
      router.push("/api/auth/signin");
      return;
    }

    router.push("/browse-bets");
  };

  const handleProfile = () => {
    if (!session) {
      router.push("/api/auth/signin");
      return;
    }
    router.push("/profile");
  };
  const navItems = [
    {
      type: "button",
      label: "Browse Bets",
      onClick: handleBrowseBets,
      className:
        "text-white bg-gradient-to-b from-blue-800 to-gray-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    },
    // add the Login or Logout button based on session
    ...(session
      ? [
          {
            type: "button",
            label: "Logout",
            onClick: handleLogoutClick,
            className:
              "text-white bg-gradient-to-b from-red-800 to-gray-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center",
          },
        ]
      : [
          {
            type: "button",
            label: "Login",
            onClick: handleLoginClick,
            className:
              "text-white bg-gradient-to-b from-blue-800 to-gray-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center",
          },
        ]),
    {
      type: "link",
      label: "Support",
      icon: faHeadphones,
      href: "#",
    },
    {
      type: "text",
      onClick: handleProfile,
      label: `Hello ${session?.user?.username || "Guest"}`,
    },
    {
      type: "icon",
      icon: faBell,
    },
  ];

  return (
    <nav className="bg-[#0c0f23] sticky w-full z-20 top-0 start-0 border-b-[1px] border-gray-500 ">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
        <div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-800">
            BetApp
          </span>
        </div>
        <div className="md:flex hidden items-center gap-[1rem]">
          {navItems.map((items, index) => (
            <div key={index}>
              {items.type === "button" && (
                <button
                  type="button"
                  className={items.className}
                  onClick={items.onClick}
                >
                  {items.label}
                </button>
              )}
              {items.type === "link" && (
                <span className="flex items-center gap-[3px] text-white font-semibold">
                  <FontAwesomeIcon
                    className="flex-shrink-0 h-[15px] "
                    icon={items.icon}
                  />
                  <a href={items.href}>{items.label}</a>
                </span>
              )}
              {items.type === "text" && (
                <span className="text-white font-semibold cursor-pointer" onClick={items.onClick}>
                  {items.label}
                </span>
              )}
              {items.type === "icon" && (
                <FontAwesomeIcon
                  icon={items.icon}
                  className="text-white h-[1rem]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white h-[1rem]">
            <FontAwesomeIcon icon={faHamburger} />
          </button>
        </div>

        {/* <div
          className={`md:hidden absolute z-50  ${
            isDropdownOpen ? "right-0 " : " right-[-20rem]"
          } bg-[#0c0f23] border-[1px] top-16 duration-150  border-gray-500 rounded-l-lg w-[15rem] h-screen  p-[2rem]`}
        >
          <div className="flex flex-col items-center gap-[1rem]">
            {navItems.map((items, index) => (
              <div key={index}>
                {items.type === "button" && (
                  <button
                    type="button"
                    className={items.className}
                    onClick={items.onClick}
                  >
                    {items.label}
                  </button>
                )}
                {items.type === "link" && (
                  <span className="flex items-center gap-[3px] text-white font-semibold">
                    <FontAwesomeIcon
                      className="flex-shrink-0 h-[15px] "
                      icon={items.icon}
                    />
                    <a href={items.href}>{items.label}</a>
                  </span>
                )}
                {items.type === "text" && (
                  <span className="text-white font-semibold">
                    {items.label}
                  </span>
                )}
                {items.type === "icon" && (
                  <FontAwesomeIcon
                    icon={items.icon}
                    className="text-white h-[1rem]"
                  />
                )}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </nav>
  );
}
