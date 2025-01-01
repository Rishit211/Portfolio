import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import java from "../assets/java.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";

import { motion } from "framer-motion";

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-8 md:gap-16 bg-black mt-0 px-4 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Color animation for the title */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl font-bold text-white md:text-6xl"
        animate={{
          color: [
            "#FF5733", // Red
            "#33FF57", // Green
            "#3357FF", // Blue
            "#FF33A1", // Pink
            "#FFFF33", // Yellow
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 p-5">
        {[ 
          { Icon: BiLogoMongodb, color: "text-green-600" },
          { Icon: SiExpress, color: "text-white" },
          { Icon: SiReact, color: "text-blue-400" },
          { Icon: FaNodeJs, color: "text-green-500" },
          { Icon: FaJs, color: "text-yellow-300" },
          { Icon: FaJava, color: "text-orange-500", img: java },
          { Icon: FaPython, color: "text-blue-500", img: python },
          { Icon: FaGitAlt, color: "text-red-600" },
          { Icon: RiTailwindCssFill, color: "text-blue-600" },
          { Icon: FaGitAlt, color: "text-red-600", img: mysql },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            {tech.img ? (
              <img
                src={tech.img}
                alt="Tech"
                className="w-[40px] md:w-[80px] cursor-pointer transition-all duration-300 hover:translate-y-2 md:hover:translate-y-5 hover:shadow-lg hover:opacity-70"
              />
            ) : (
              <tech.Icon
                className={`cursor-pointer text-[40px] md:text-[80px] transition-all duration-300 hover:translate-y-2 md:hover:translate-y-5 hover:shadow-lg hover:opacity-70 ${tech.color}`}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Tech;
