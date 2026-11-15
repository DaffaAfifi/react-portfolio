import { motion } from "framer-motion";

const expertiseAreas = [
  {
    number: "01",
    title: "System Analysis",
    description:
      "Translating business requirements into clear system specifications and technical solutions.",
    skills: [
      "Requirements & Process Analysis",
      "Functional Requirements",
      "System Documentation",
      "API & Integration",
      "Database & Data Modeling",
      "User Acceptance Testing",
    ],
  },
  {
    number: "02",
    title: "Project Coordination",
    description:
      "Coordinating stakeholders, documentation, and delivery across business and technical teams.",
    skills: [
      "Stakeholder Communication",
      "Project Documentation",
      "Progress Tracking",
      "Task & Issue Coordination",
      "Cross-functional Collaboration",
      "Testing & Delivery Support",
    ],
  },
];

const Expertise = () => {
  return (
    <section
      className="mx-auto max-w-6xl w-full px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      id="expertise"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
          What I Do
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Areas of Expertise
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Connecting business needs with well-structured technical solutions.
        </p>
      </motion.div>

      <div className="mt-14 border-t border-slate-700/60 sm:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-slate-700/60">
          {expertiseAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`py-10 sm:py-12 ${
                index === 0
                  ? "lg:pr-14"
                  : "border-t border-slate-700/60 lg:border-t-0 lg:pl-14"
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-medium tracking-[0.2em] text-sky-400">
                  {area.number}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {area.title}
                </h3>
              </div>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                {area.description}
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {area.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-4 shrink-0 bg-sky-400"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
