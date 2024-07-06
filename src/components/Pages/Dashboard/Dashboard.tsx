import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";

const Dashboard = () => {

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-300 flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm bg-[#213644] text-[#c6ab7c]  drawer-button lg:hidden"
        >
          Open Menu
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-[#213644] text-white">
          <img className="mt-8 w-40 mb-12" src="/logo-transparent.png" alt="" />
          {/* Sidebar content here */}
          
          <div className="h-[2px] rounded bg-[#c6ab7c] my-4"></div>
          <li className="uppercase">
            <NavLink to="/">
              <AiFillHome></AiFillHome>Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/instructors">
              <GiTeacher></GiTeacher>Instructors
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/classes">
              <SiGoogleclassroom></SiGoogleclassroom>Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
