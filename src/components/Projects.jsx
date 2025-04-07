import { motion } from "framer-motion";
import { projectData } from "../projectData.js";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "./Arrow.jsx";

const Projects = () => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      className="mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-0 sm:gap-16 items-center justify-center"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl mb-8 sm:mb-0"
      >
        My Projects
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full"
      >
        {projectData.map((project) => (
          <div
            key={project.id}
            target="_blank"
            className="flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 md:hover:scale-105 hover:shadow-2xl hover:sahdow-blue-800"
          >
            <Slider {...sliderSettings}>
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-64 object-contain bg-white"
                  alt={`${project.title} screenshot ${i + 1}`}
                />
              ))}
            </Slider>
            <div className="flex flex-col gap-3 bg-gray-900 p-5 transition-colors duration-300 md:hover:bg-gray-800 flex-grow">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-slate-400">{project.description}</p>
              <a
                href={project.link}
                className="text-sm text-slate-400 underline"
                target="_blank"
              >
                {project.link}
              </a>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-900 rounded-xl text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
