"use client"

import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Logo from "../../assets/TryNow.svg"
import { navItems } from "src/constants";



const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b bg-white border-[#004AAD]">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/">
              <img className="h-10 w-25 mr-2" src={Logo} alt="Logo" />
            </a>

          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-gray-600">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="/Main"
              className="bg-gradient-to-r text-white from-[#004AAD] to-[#004AAD] py-2 px-3 rounded-md"
            >
              Free trial
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} className="text-[#101720]">{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="/"
                className="py-2 px-3 rounded-md text-white bg-gradient-to-r from-[#004AAD] to-[#004AAD]"
              >
                Free trial
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
