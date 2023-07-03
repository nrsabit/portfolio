import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../../../assets/sabit-logo.png"

const Footer = () => {
  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="w-full bg-base-300">
      <footer className="footer items-center p-4 max-w-7xl mx-auto">
        <div className="items-center grid-flow-col">
        <img src={logo} className="w-36" alt="" />
          <p>Copyright © 2023 NR Sabit - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <FaFacebook
            className="h-8 w-8 hover:scale-125 cursor-pointer transition-all hover:text-violet-600"
            onClick={() =>
              handleOpenLink("https://www.facebook.com/mdsabitnr/")
            }
          ></FaFacebook>
          <FaLinkedin
            className="h-8 w-8 hover:scale-125 cursor-pointer transition-all hover:text-violet-600"
            onClick={() =>
              handleOpenLink("https://www.linkedin.com/in/nrsabit/")
            }
          ></FaLinkedin>
          <FaGithub
            className="h-8 w-8 hover:scale-125 cursor-pointer transition-all hover:text-violet-600"
            onClick={() => handleOpenLink("https://github.com/nrsabit")}
          ></FaGithub>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
