import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../../assets/sabit-logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarBgColor, setNavbarBgColor] = useState("transparent");
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);

      if (currentPosition > 200) {
        setNavbarBgColor("bg-base-300");
      } else {
        setNavbarBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <Link
          activeClass="active"
          to="banner"
          isDynamic={true}
          spy={true}
          smooth={true}
          // offset={-64}
          duration={500}
          onClick={handleCloseMenu}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          isDynamic={true}
          to="about"
          spy={true}
          smooth={true}
          // offset={-64}
          duration={500}
          onClick={handleCloseMenu}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="skills"
          isDynamic={true}
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          onClick={handleCloseMenu}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="projects"
          isDynamic={true}
          spy={true}
          smooth={true}
          offset={-58}
          duration={500}
          onClick={handleCloseMenu}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="contact"
          isDynamic={true}
          spy={true}
          smooth={true}
          offset={-58}
          duration={500}
          onClick={handleCloseMenu}
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className={`${navbarBgColor} w-full fixed top-0 z-20`}>
      <div className="navbar justify-between py-0 min-h-0 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={handleOpenMenu}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content left-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  ${
                !isOpen ? "hidden" : ""
              }`}
            >
              {navItems}
            </ul>
          </div>
          <img src={logo} className="w-36" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
