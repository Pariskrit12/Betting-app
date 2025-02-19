"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Form({ type }) {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError(result.error);
      console.log("Error");
    } else {
      router.push("/");
    }
  };
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const gender = formData.get("gender");

    try {
      const response = await axios.post("api/usercontroller/register", {
        username,
        password,
        email,
        gender,
      });
      console.log(response.data);
      router.push("/api/auth/signin")
    } catch (error) {
      console.log("Registration Failed", error.message);
    }
  };
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="bg-[#0c0f23] border-[1px] border-gray-500 rounded-xl h-auto w-[35rem] items-center justify-center">
        <div className="flex flex-col items-center justify-center p-[2rem]">
          <div className="text-white font-bold text-4xl">
            {type === "Login" ? "Login" : "Register"}
          </div>
          <form
            className="flex flex-col gap-[2rem] mt-[2rem] items-center"
            onSubmit={type === "Login" ? handleSubmit : handleRegisterSubmit}
          >
            <div className="flex items-center bg-black rounded-xl px-[2rem] text-white gap-[12px] border-[1px] border-blue-800">
              <FontAwesomeIcon icon={faUser} className="h-[1rem] " />
              <input
                type="text"
                name="username"
                required
                placeholder="username"
                className=" group/input w-[20rem] h-[4rem]   bg-black  border-none focus:outline-none text-white"
              />
            </div>
            {type === "Register" && (
              <>
                <div className="flex items-center bg-black rounded-xl px-[2rem] text-white gap-[12px] border-[1px] border-blue-800">
                  <FontAwesomeIcon icon={faEnvelope} className="h-[1rem]" />
                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="email"
                    className="w-[20rem] h-[4rem]   bg-black  border-none focus:outline-none text-white"
                  />
                </div>
                <div className="flex items-center bg-black rounded-xl px-[2rem] text-white gap-[12px] border-[1px] border-blue-800">
                  <select
                    name="gender"
                    required
                    className="w-[21.5rem] h-[4rem] bg-black border-none focus:outline-none text-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male" className="text-white">
                      Male
                    </option>
                    <option value="Female" className="text-white">
                      Female
                    </option>
                    <option value="Other" className="text-white">
                      Other
                    </option>
                  </select>
                </div>
              </>
            )}
            <div className="flex items-center bg-black rounded-xl px-[2rem] text-white gap-[12px] border-[1px] border-blue-800">
              <FontAwesomeIcon icon={faLock} className="h-[1rem] " />
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="w-[20rem] h-[4rem]   bg-black border-none focus:outline-none text-white "
              />
            </div>
            <div className=" bg-gradient-to-b from-blue-500 to-gray-700 w-[10rem] px-[3.1rem] py-[0.5rem] border-none rounded-xl">
              <button
                type="submit"
                className="text-white font-semibold text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
