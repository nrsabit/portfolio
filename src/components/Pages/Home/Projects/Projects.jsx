import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SingleProject from "./singleProject";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { backednUrl } from "../../../../constants";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  useEffect(() => {
    fetch(`${backednUrl}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data?.data));
  }, [projects, project]);

  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      id="projects"
      className="mt-14 p-8 md:p-14 rounded"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">
        My Latest <span className="text-violet-600">Projects</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects?.map((project) => (
          <SingleProject
            key={project.name}
            project={project}
            setProject={setProject}
          ></SingleProject>
        ))}
      </div>

      {/* Modal Area */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-6xl">
          <div className="md:flex justify-between items-center gap-10">
            <div className="w-full flex flex-col items-center justify-center">
              <div
                className="hovered-image w-full h-64 rounded"
                style={{ backgroundImage: `url(${project?.image})` }}
              ></div>
              <div className="mt-4 flex justify-center items-center gap-8 mb-8">
                <p
                  onClick={() => handleOpenLink(project?.liveLink)}
                  className="text-violet-600 flex gap-1 items-center hover:underline hover:text-black cursor-pointer"
                >
                  <FiExternalLink></FiExternalLink> Preview
                </p>
                <p
                  onClick={() => handleOpenLink(project?.frontendLink)}
                  className="text-violet-600 flex gap-1 items-center hover:underline hover:text-black cursor-pointer"
                >
                  <FaGithub></FaGithub> Client
                </p>
                <p
                  onClick={() => handleOpenLink(project?.backendLink)}
                  className="text-violet-600 flex gap-1 items-center hover:underline hover:text-black cursor-pointer"
                >
                  <FaGithub></FaGithub> Server
                </p>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-violet-600">{project?.name}</span>
              </h2>
              <p className="leading-7 text-justify">{project?.description}</p>
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn-sm btn-outline btn-error"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
