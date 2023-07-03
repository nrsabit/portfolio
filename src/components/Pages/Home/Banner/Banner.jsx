import React from "react";
import profile from "../../../../assets/my-picture-main.png";
import Titles from "./Titles";
import resume from "../../../../assets/naeemur-rahman-sabit-resume.pdf";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      id="banner"
      className="pt-14 md:flex justify-center items-center md:min-h-[600px]"
    >
      <div className="w-full px-4 py-16">
        <p>Hello there,</p>
        <h2 className="text-4xl font-bold my-2 md:w-8/12">
          I'm Md. Naeemur Rahman <span className="text-violet-600">Sabit</span>
        </h2>
        <h2 className="text-2xl font-bold">
          I'm a <span className="text-violet-600">{<Titles></Titles>}</span>
        </h2>
        <a
          href={resume}
          download
          className="btn btn-outline btn-primary mt-8 animate-bounce"
        >
          Download Resume
        </a>
      </div>
      <div className="w-full profile-image pt-8 px-4 flex justify-center">
        <motion.div
          initial={{y: 100}}
          whileInView={{y: 0}}
          transition={{ ease: "easeOut", duration: 1 ,}}
        >
          <img src={profile} />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
