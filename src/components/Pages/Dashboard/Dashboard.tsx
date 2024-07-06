import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
          <div className="flex justify-center mb-2">
            <img
              src="https://res.cloudinary.com/dg4spmx5h/image/upload/v1720260269/b5nymz5k3zzr7yqevjvh.png"
              width={150}
              alt=""
              className="text-center"
            />
          </div>
          {/* Sidebar content here */}

          <div className="h-[2px] rounded bg-[#c6ab7c] my-4"></div>
          <li className="uppercase">
            <NavLink to="/dashboard/add-project">Add Project</NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/add-skill">Add Skill</NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/add-experience">Add Experience</NavLink>
          </li>
          <li className="uppercase">
            <NavLink to="/dashboard/add-blog">Add Blog</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
