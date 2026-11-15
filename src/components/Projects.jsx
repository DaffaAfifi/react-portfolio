import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";
import { projectData } from "../projectData.js";
import { getProjectSlug } from "../projectSlug.js";

const Projects = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2.15,
    swipeToSlide: true,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.08,
        },
      },
    ],
  };

  return (
    <section
      className="mx-auto w-full max-w-6xl overflow-hidden px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
            Selected Work
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projects &amp; Case Studies
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            A selection of systems and digital products I&apos;ve contributed
            to.
          </p>
        </div>

        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={currentSlide === 0}
            className="rounded-full border border-slate-700 p-2 text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-400 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <BiChevronLeft aria-hidden="true" className="text-2xl" />
          </button>
          <button
            type="button"
            aria-label="Next projects"
            onClick={() => sliderRef.current?.slickNext()}
            disabled={currentSlide >= projectData.length - 2}
            className="rounded-full border border-slate-700 p-2 text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-400 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <BiChevronRight aria-hidden="true" className="text-2xl" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="project-carousel mt-12 sm:mt-16"
      >
        <Slider ref={sliderRef} {...sliderSettings}>
          {projectData.map((project) => {
            const cardContent = (
              <>
                <img
                  src={project.images[0]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={`${project.title} preview`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-5 pb-5 pt-20 sm:px-6 sm:pb-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
                    {project.technologies.slice(0, 2).join(" · ")}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                  {project.link && (
                    <span className="mt-4 inline-block text-sm font-medium text-white transition-colors group-hover:text-sky-300">
                      View Project <span aria-hidden="true">↗</span>
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <div key={project.id} className="px-2 sm:px-3">
                <a
                  href={`/projects/${getProjectSlug(project)}`}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {cardContent}
                </a>
              </div>
            );
          })}
        </Slider>
      </motion.div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2" aria-label="Project pagination">
          {projectData.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Go to project ${index + 1}: ${project.title}`}
              aria-current={currentSlide === index ? "true" : undefined}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-sky-400"
                  : "w-1.5 bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
        <span className="text-xs tabular-nums text-slate-500">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(projectData.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default Projects;
