import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-10 py-3 text-white backdrop-blur-md md:justify-evenly">
      {/* Rishit Singh with Framer Motion */}
      <motion.a
        href="#home"
        initial={{ y: 0 }} 
        whileHover={{ y: -5 }} 
        transition={{ type: "spring", stiffness: 300, damping: 10 }} 
        className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-4xl font-semibold inline-block"
      >
        {"Rishit Singh"}
      </motion.a>

      {/* Navbar Items */}
      <ul className="hidden md:flex gap-14 ml-auto">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
        >
          <li>Home</li>
        </a>
       
        <a
          href="#about"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
        >
          <li>About</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
        >
          <li>Contact</li>
        </a>
      </ul>

      {/* Hamburger Menu Icons */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }} // Start off-screen
          animate={{ x: 0 }} // Slide in
          exit={{ x: "100%" }} // Slide out
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed right-0 top-[65px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 md:hidden"
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              <li>Home</li>
            </a>
            
            <a
              href="#about"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              <li>About</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:underline hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              <li>Contact</li>
            </a>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
