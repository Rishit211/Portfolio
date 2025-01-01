import React from "react";
import tiger from "../assets/tiger.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Text to animate
  const text = "I'm a Full Stack Developer";

  // Variants for animation
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05, // Controls delay between characters
        repeat: Infinity, // Infinite loop
        repeatType: "loop", // Loop type
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and below
    visible: {
      opacity: 1,
      y: 0, // Moves to original position
      transition: { duration: 0.3 }, // Duration for each character
    },
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          {/* Animated Text */}
          <motion.div
            className="text-4xl sm:text-7xl font-bold text-white"
            variants={containerVariants}
            initial="hidden"
            animate="animate"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Next JS, and GraphQL.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("projects")}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Projects
            <span className="group-hover:rotate-90 duration-100">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </motion.button>
        </div>

        <div>
          <img
            src={tiger}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
