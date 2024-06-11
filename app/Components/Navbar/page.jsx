"use client"
import React, { useState } from 'react';
import Logo from "../../../public/TrashCrew Logo.png"
import Image from 'next/image';
const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{backgroundColor:"black",borderBottom:"5px solid #29838B"}} className="border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 w-11/12">
        <a style={{width:"56px",height:"56px",flexShrink:"0"}} href="/" className="">
          <Image src={Logo} className="" height={100} width={100} alt="Flowbite Logo" />
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto justify-center ${isMenuOpen ? '' : 'hidden'}`} id="navbar-menu">
          <ul className="flex flex-col ms-10 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li style={{fontSize:"12px"}} className=''>
              <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0  md:dark:bg-transparent" aria-current="page">STAKING</a>
            </li>
            <li style={{fontSize:"12px"}} className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                aria-expanded={isDropdownOpen}
              >
                ABOUT
                <svg
                  className="w-2.5 h-2.5 ms-2.5 transform transition-transform duration-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div
                className={`${
                  isDropdownOpen ? 'block' : 'hidden'
                } absolute z-10 font-normal bg-gray-600 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 text-white">Sign out</a>
                
                </div>
              </div>
            </li>
            <li style={{fontSize:"12px"}}>
              <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0  md:dark:bg-transparent" aria-current="page">WHITEPAPER</a>
            </li>
            <li style={{fontSize:"12px"}}>
              <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0  md:dark:bg-transparent" aria-current="page">MARKETPLACE</a>
            </li>
            <li style={{fontSize:"12px"}}>
              <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0  md:dark:bg-transparent" aria-current="page">AUDIT</a>
            </li>
            <li style={{fontSize:"12px"}}>
              <a href="#" className="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0  md:dark:bg-transparent" aria-current="page">PRESALE</a>
            </li>
          </ul>
        </div>
        <div className="hidden xs:hidden sm:hidden md:hidden lg:hidden xl:flex">
          <button style={{border:"1.667px solid #FFDE5C;",fontWeight:"700"}} className="mx-2 text-yellow-300 text-sm  bg-transparent border-2 text-gray-700 py-2 px-6 rounded-full">WIN A TRASHIE</button>
          <button style={{background: "linear-gradient(90deg, #FFDE5C 0%, #E6DCB4 66.89%)",borderRadius:"65.72px",border:"0.657px solid #000",boxShadow:"0px 2.629px 2.629px 0px rgba(0, 0, 0, 0.25) inset;",fontWeight:"700"}} className="py-2 px-7">Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
