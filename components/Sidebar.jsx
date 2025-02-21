"use client"
import React, { useState } from 'react'

export default function Sidebar() {
    const [isDropdownOpen,setIsDropdownOpen]=useState(false);

    const toggleDropdown=()=>{
        setIsDropdownOpen(!isDropdownOpen);
    }
  return (
    <div className={`bg-[#0c0f23] md:flex hidden text-white w-[15rem] p-[1rem] h-[30rem] sticky top-28 ml-5 rounded-xl border-[1px] border-gray-500 shadow-indigo-800`}>
       <ul>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='/Laliga'>LaLiga</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='/PremierLeague'>Premier League</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='/Ucl'>UCL</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='/Bundesliga'>Bundesliga</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>UCL</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>Bundesliga</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>Premier league</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>Bundesliga</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>LaLiga</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>Ligue 1</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>Bundesliga</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>LaLiga</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
        <li className='mb-[0.5rem]'>
            <span className='flex justify-between'>
                <a href='#'>Seria A</a>
                <div className=' w-[3rem] px-[1.3rem] bg-gray-600 rounded-xl'>5</div>
            </span>
        </li>
       </ul>
    </div>
  )
}
