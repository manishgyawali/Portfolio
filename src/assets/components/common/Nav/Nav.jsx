import React from "react";

const Nav = () => {
  return (
    <nav className="shadow-md ">
      <div className="flex justify-between items-center  py-6 cursor-pointer w-11/12 mx-auto  ">
        <div>
          <h1 className="font-bold text-xl">Personal</h1>
        </div>
        <div>
          <ul className="flex gap-7  text-xs">
            <li>
              <span className="text-blue-400 font-semibold">HOME</span>
            </li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>PRICING</li>
            <li>BLOG</li>
            <li>PAGES</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
