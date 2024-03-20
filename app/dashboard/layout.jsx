"use client";
import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";

const layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex justify-start items-start">
      <div className="w-fit bg-blue-500">
      <button onClick={() => setIsOpen(!isOpen)} className="text-3xl bg-yellow-500">
        {isOpen ? "" : <RxHamburgerMenu />}
      </button>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="w-full bg-red-500">{children}</div>
    </div>
  );
};

export default layout;
