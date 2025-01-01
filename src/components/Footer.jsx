import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-8 gap-6">
          <motion.a
            href="https://github.com/Rishit211"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white hover:text-green-400 transition text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:rishitsingh021@gmail.com"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="text-white hover:text-green-400 transition text-2xl"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rishit-singh21/"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            className="text-white hover:text-green-400 transition text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://wa.me/916300393618"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            className="text-white hover:text-green-400 transition text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </motion.a>
        </div>

        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} All rights reserved | Designed and developed by Rishit Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
