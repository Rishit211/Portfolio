import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
      id="about"
      className="w-full min-h-screen bg-black text-white "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-8">
        <motion.div className="pb-8 text-center" variants={itemVariants}>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="text-3xl font-bold md:text-6xl text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
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
            About Me
          </motion.p>
        </motion.div>

        <motion.p
          className="text-lg mt-8 text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          I am a passionate Full Stack Developer with expertise in creating dynamic, responsive, and user-friendly web applications. I also have a strong background in Artificial Intelligence, with experience in building and deploying machine learning models. I am particularly interested in how AI can be integrated into web applications to create smarter and more intuitive user experiences.
        </motion.p>

        <motion.p
          className="text-lg mt-4 text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          I have experience working with modern web technologies such as React, Node.js, Express, MongoDB, and Firebase. I am proficient in building RESTful APIs, creating scalable backend services, and designing interactive front-end interfaces. I am always eager to learn new technologies and improve my skills to stay up-to-date with the latest trends in web development.
        </motion.p>
        <motion.p
          className="text-lg mt-4 text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          Beyond coding, I enjoy collaborating with teams, learning new technologies, and staying up-to-date with the latest trends in tech. My goal is to create impactful solutions that make a difference in people's lives. I am always open to new opportunities and challenges, so feel free to reach out if you have a project in mind or just want to connect!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
