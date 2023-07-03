import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaLocationArrow,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import resume from "../../../../assets/naeemur-rahman-sabit-resume.pdf";
import Swal from "sweetalert2";

const Contact = () => {
  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:
              "Thank you for reaching out to me. I'll get back to you as soon as possible.",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        id="contact"
        className="mt-14 p-8 md:p-14 rounded md:flex gap-8 justify-between items-center"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-8">
            Contact <span className="text-violet-600">Me</span>
          </h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              className={`border-b-2 mb-8 border-violet-600 bg-transparent w-full focus:outline-none focus:border-b-4`}
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              className={`border-b-2 mb-8 border-violet-600 bg-transparent w-full focus:outline-none focus:border-b-4`}
            />
            <textarea
              name="message"
              className={`border-b-2 mb-8 border-violet-600 bg-transparent w-full focus:outline-none focus:border-b-4`}
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="btn btn-outline btn-primary py-1 px-8"
            />
          </form>
        </div>
        <div className="w-full  flex flex-col md:justify-center gap-6 mt-8 md:mt-0">
          <div className="flex gap-4 items-center md:w-8/12 mx-auto">
            <FaPhoneAlt className="h-6 w-6 text-violet-600"></FaPhoneAlt>{" "}
            <p className="font-semibold">+8801882832590</p>
          </div>
          <div className="flex gap-4 items-center md:w-8/12 mx-auto">
            <FaEnvelope className="h-6 w-6 text-violet-600"></FaEnvelope>{" "}
            <p className="font-semibold">mailbox.sabit@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center md:w-8/12 mx-auto">
            <FaLocationArrow className="h-6 w-6 text-violet-600"></FaLocationArrow>{" "}
            <p className="font-semibold">Rangamati, Bangladesh</p>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 2 }}
            className="flex items-center gap-8 text-violet-600 md:w-8/12 mt-3 mx-auto"
          >
            <FaFacebook
              className="h-8 w-8 hover:scale-125 cursor-pointer transition-all"
              onClick={() =>
                handleOpenLink("https://www.facebook.com/mdsabitnr/")
              }
            ></FaFacebook>
            <FaLinkedin
              className="h-8 w-8 hover:scale-125 cursor-pointer transition-all"
              onClick={() =>
                handleOpenLink("https://www.linkedin.com/in/nrsabit/")
              }
            ></FaLinkedin>
            <FaGithub
              className="h-8 w-8 hover:scale-125 cursor-pointer transition-all"
              onClick={() => handleOpenLink("https://github.com/nrsabit")}
            ></FaGithub>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        className="my-14 px-8 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="text-violet-600">Thanks</span> for Visiting
        </h2>
        <p className="leading-7 text-center">
          I would welcome the opportunity to discuss how my skills and
          experiences align with your or your organization's needs. I am
          available for an interview at your convenience and look forward to the
          possibility to work with you.
        </p>
        <a href={resume} download className="btn btn-outline btn-primary mt-4">
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
