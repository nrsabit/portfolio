import React from "react";
import about from "../../../../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="mt-14 md:flex justify-center items-center p-8 md:px-14"
    >
      <div className="w-full">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <img src={about} alt="" />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="w-full"
      >
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-violet-600">Me</span>
        </h2>
        <p className="leading-7 text-justify">
          I'm a professional web developer, I'm connected to the web development
          sector since 2019, and I have solid knowledge in this field. My
          primary skills are HTML, CSS, Javascript, React js, Express js,
          MongoDB, Node js, Bubble.io, etc. I completed my graduation from Al
          Jamia Al Islamia Patiya in 2021 and I've completed a Master's in
          Islamic studies and Arabic. and I also have working experience with
          <span className="text-violet-600"> Gooseberry Digital</span> as a
          senior Bubble.io developer. I possess excellent communication,
          leadership, quick learning, and teamwork abilities, and I am
          comfortable working independently or as part of a team.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
