import { motion } from "framer-motion";
import { BiLogoGithub, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";
import image from "../../public/me2.png";

const About = () => {
  return (
    <div
      className="mx-auto max-w-6xl w-full min-h-screen px-6 py-20 sm:px-10 sm:py-28 lg:px-16 flex items-center justify-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex w-full flex-col-reverse items-center justify-between gap-12 md:flex-row md:gap-16 lg:gap-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex max-w-2xl flex-col items-center justify-center gap-4 md:items-start"
        >
          {/* <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 sm:text-sm">
            Open to Opportunities
          </span> */}

          <h1 className="text-center text-5xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text md:text-left md:text-6xl lg:text-7xl">
            Daffa Afifi
          </h1>

          <h3 className="text-center text-xl font-light text-sky-300 md:text-left md:text-2xl lg:text-3xl">
            System Analyst
          </h3>

          <p className="max-w-xl text-center text-sm leading-7 text-slate-400 md:text-left sm:text-base">
            An IT professional bridging business needs and technical solutions
            through system analysis, requirements engineering, and system
            integration. Combines analytical thinking with hands-on development
            experience to turn complex requirements into practical solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              "Requirements Engineering",
              "Software Development",
              "Database & Data Modeling",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700/80 px-3 py-1.5 text-xs text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-2 flex gap-5">
            <a href="https://github.com/DaffaAfifi" target="_blank">
              <BiLogoGithub className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out"></BiLogoGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/daffa-afifi-syahrony-502102226/"
              target="_blank"
            >
              <BiLogoLinkedin className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-500 hover:rotate-12 transition-all duration-300 ease-in-out"></BiLogoLinkedin>
            </a>
            <a href="https://www.youtube.com/@icetraeeeee" target="_blank">
              <BiLogoYoutube className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-red-500 hover:-rotate-12 transition-all duration-300 ease-in-out"></BiLogoYoutube>
            </a>
          </div>
        </motion.div>

        <img
          src={image}
          className="mt-8 w-[280px] rounded-full transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:shadow-blue-800 sm:w-[320px] md:mt-0 md:w-[380px] lg:w-[400px]"
          alt="Daffa Afifi"
        />
      </motion.div>
    </div>
  );
};

export default About;
