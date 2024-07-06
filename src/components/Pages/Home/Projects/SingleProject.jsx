import React from "react";
import { motion } from "framer-motion";

const SingleProject = ({ project, setProject }) => {
  const handleSetProject = () => {
    setProject(project);
  };

  const openImageInNewTab = () => {
    window.open(project.primaryImage, "_blank");
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="card  bg-base-100"
    >
      <div
        className="hovered-image w-full h-56 rounded"
        onClick={openImageInNewTab}
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="flex justify-between items-center my-4 px-4">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <label
          htmlFor="my_modal_6"
          onClick={handleSetProject}
          className="btn btn-outline btn-primary btn-sm"
        >
          Details
        </label>
      </div>
    </motion.div>
  );
};

export default SingleProject;
