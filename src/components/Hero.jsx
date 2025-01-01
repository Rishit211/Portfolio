import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import rishit from "../assets/rishit.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const jobTitles = ["Web Developer", "Software Engineer","AI Enthusiast"];
  const [currentTitle, setCurrentTitle] = useState(jobTitles[0]);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rishit-singh21/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rishit211",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rishitsingh021@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/itz_me_rishit_/",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < currentTitle.length) {
        setCurrentText((prev) => prev + currentTitle[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex(0);
          setCurrentTitle((prev) => {
            if (prev === "Web Developer") return "Software Engineer";
            if (prev === "Software Engineer") return "AI Enthusiast";
            return "Web Developer";
          });
        }, 500); // Wait before switching to the next title
      }
    }, 150); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, currentTitle]);

  return (
    <div
      id="home"
      className="flex flex-col-reverse items-center min-h-screen w-full justify-center gap-8 lg:flex-row lg:justify-between lg:px-32"
    >
      {/* Social Links Section */}
      <div className="hidden lg:flex flex-col fixed left-0 top-1/3 z-10">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-blue-500 to-pink-500 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Text Content Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center lg:items-start gap-4 text-white text-center lg:text-left"
      >
        <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl font-light md:text-6xl">
          <b>Hello,I'm Rishit Singh </b>
        </h1>

        <motion.h3
          className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span>I'm a </span>
          <motion.span
            key={currentTitle}
            className="ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentText}
          </motion.span>
        </motion.h3>

        <p className="text-sm text-gray-400 md:text-base md:leading-relaxed">
          I'm a passionate web developer with a keen interest in building scalable web applications. This is my portfolio where I showcase my projects and skills. Feel free to explore and contact me for any queries.
        </p>

        <motion.a
          href="#contact"
          className="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-md text-lg font-bold hover:scale-110 transition-transform duration-300"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Profile Picture Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center"
      >
        <img
          src={rishit}
          alt="Rishit Singh"
          className="w-[250px] h-[250px] object-cover rounded-full shadow-xl shadow-indigo-900 transition-transform duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[700px] md:h-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
