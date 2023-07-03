import React, { useEffect, useState } from "react";
import skillBg from "../../../../assets/skill-bg-main.png";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, [skills]);

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      id="skills"
      className="mt-14 p-8 md:p-14 rounded shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-8">
        My <span className="text-violet-600">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-14 items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative w-28 h-28 flex flex-col justify-center items-center"
          >
            <motion.img
              animate={{ rotate: 360 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 w-full h-full object-cover"
              src={skillBg}
              alt=""
            />
            <img src={skill.image} className="relative z-10 w-20 h-20" alt="" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
