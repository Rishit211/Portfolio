import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const scrollRevealVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="contact"
      className="flex flex-col min-h-[70vh] w-full items-center justify-center px-4 py-8 sm:py-16"
    >
      <motion.div
        variants={scrollRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Staggered delay
        className="flex flex-col items-center justify-center gap-3 space-y-6 text-center p-4 sm:p-14"
      >
        <motion.h1
          variants={scrollRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="text-3xl sm:text-4xl md:text-7xl font-bold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
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
          Get in Touch
        </motion.h1>
        <p className="text-base sm:text-lg font-semibold text-gray-400">
          Feel free to reach out to me using the form. I am always open to
          discussing new projects, creative ideas, or opportunities to be part
          of your vision.
        </p>
      </motion.div>

      <motion.div
        variants={scrollRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }} // Staggered delay
        className="mt-8 w-full max-w-full sm:max-w-[600px] flex flex-col gap-6 px-4 sm:px-0"
      >
        <form
          action="https://getform.io/f/brooewwa"
          method="POST"
          className="flex flex-col gap-6"
        >
          <motion.input
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6 }} // Staggered delay
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm sm:text-base text-gray-800 focus:border-indigo-500 focus:outline-none"
          />
          <motion.input
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.8 }} // Staggered delay
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm sm:text-base text-gray-800 focus:border-indigo-500 focus:outline-none"
          />
          <motion.textarea
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 1 }} 
            name="message"
            placeholder="Enter your message"
            rows="6"
            className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-sm sm:text-base text-gray-800 focus:border-indigo-500 focus:outline-none"
          ></motion.textarea>
          {/* Animated button */}
          <motion.button
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 1.2 }} 
            className="mx-auto mt-4 w-full sm:w-auto rounded-lg bg-gradient-to-r from-cyan-900 to-blue-800 px-6 py-3 text-sm sm:text-lg font-bold text-white transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }} // On hover, scale the button
            animate={{
              color: [
                "#FF5733", // Red
                "#33FF57", // Green
                "#3357FF", // Blue
                "#FF33A1", // Pink
                "#FFFF33", // Yellow
                "#000000",
                "#FFFFFF",
              ],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Let’s Talk
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
