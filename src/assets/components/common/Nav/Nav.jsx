import React from "react";
import  {Link}  from "react-router-dom";

const Nav = () => {
  return (
    <nav className="shadow-md ">
      <div className="flex justify-between items-center  py-6 cursor-pointer w-11/12 mx-auto  ">
        <div>
          <h1 className="font-bold text-xl">Personal</h1>
        </div>
        <div>
          <ul className="flex gap-7  text-xs cursor-pointer ">
            <Link to={"/"}>
              {" "}
              <span className="text-blue-400 font-semibold">HOME</span>
            </Link>

            <Link to={"/about"} className="cursor-pointer">
              ABOUT
            </Link>
            <Link to={"/services"} className="cursor-pointer">
              SERVICES
            </Link>

            <Link to={"/portfolio"} className="cursor-pointer">
              PORTFOLIO
            </Link>

            <Link to={"/pricing"} className="cursor-pointer">
              PRICING
            </Link>

            <Link to={"/blog"} className="cursor-pointer">
              BLOG
            </Link>
            <Link to={"/pages"} className="cursor-pointer">
              PAGES
            </Link>
            <Link to={"/contact"} className="cursor-pointer">
              CONTACT
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
