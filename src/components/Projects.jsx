import image1 from "../assets/weathericon.png";
import image2 from "../assets/worldAtlas.jpg";
import image3 from "../assets/convertor.jpg";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsData = [
  {
    image: image1,
    title: "Weather App",
    description:
      "A Weather App built with React, providing real-time weather updates. It offers users an intuitive interface to check current weather conditions globally.",
    technologies: ["React"],
    projectLink: "https://eweatherapp.netlify.app/",
    githubLink: "https://github.com/Rishit211/Weather",
  },
  {
    image: image2,
    title: "World Atlas",
    description:
      "Explore countries with data like population, region, and more. Built with React for an engaging user experience.",
    technologies: ["React"],
    projectLink: "https://watlas.netlify.app/",
    githubLink: "https://github.com/your-github/tic-tac-toe",
  },
  {
    image: image3,
    title: "Currency Convertor",
    description:
      "Convert currencies in real-time with an easy-to-use interface. Built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "JavaScript"],
    projectLink: "https://cuconvertor.netlify.app/",
    githubLink: "https://github.com/Rishit211/currency-converter",
  },
];

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

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={scrollRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="flex flex-col items-center gap-8 md:flex-row"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full cursor-pointer rounded-2xl transition-transform duration-300 hover:scale-105 md:w-[300px]"
      />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        {/* Display technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-200 px-2 py-1 text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Display project and GitHub links */}
        <div className="flex gap-4 mt-2">
          <motion.a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-300 hover:text-blue-400"
            whileHover={{ scale: 1.1, color: "#1D4ED8" }} // Blue color on hover
            transition={{ duration: 0.3 }}
          >
            <FaExternalLinkAlt className="mr-2" /> Project Link
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-300 hover:text-purple-400"
            whileHover={{ scale: 1.1, color: "#8B5CF6" }} // Purple color on hover
            transition={{ duration: 0.3 }}
          >
            <FaGithub className="mr-2" /> GitHub Link
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        variants={scrollRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="text-3xl font-bold text-white md:text-6xl text-center"
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
        My Projects
      </motion.h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {ProjectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={scrollRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Staggered delay for each project card
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
