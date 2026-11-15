/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

const educationEntries = [
  {
    institution: "State Polytechnic of Jember",
    qualification: "Applied Bachelor in Informatics Engineering",
    period: "August 2021 – June 2025",
    details: [
      "GPA: 3.97 / 4.00",
      "Final Project: “Performance and Resource Management Comparison of Golang, Node.js, and Python Backend Frameworks in API Web Services.”",
    ],
  },
  {
    institution: "SMKN 5 Jember",
    qualification: "Computer and Network Engineering",
    period: "August 2018 – May 2021",
    details: [
      "GPA: 85.93",
      "Graduated with the 2nd highest rank in the cohort.",
    ],
  },
];

const professionalCredentials = [
  {
    name: "Introduction to Systems Analysis",
    organization: "Coursera",
    meta: "Completed, 2026",
  },
  {
    name: "Project Management Foundations",
    organization: "Coursera",
    meta: "Completed, 2026",
  },
  {
    name: "Web Developer",
    organization: "BNSP",
    meta: "June 2025 – June 2028",
  },
  {
    name: "Junior Mobile Programmer",
    organization: "BNSP",
    meta: "November 2022 – May 2025",
  },
];

const technicalPrograms = [
  {
    name: "Best Mentees Ruangguru Camp 2024",
    organization: "Ruangguru Indonesia",
    meta: "June 2024",
  },
  {
    name: "Backend Golang Advanced",
    organization: "Ruangguru Indonesia",
    meta: "June 2024",
  },
  {
    name: "IDCamp Dicoding — Backend Developer",
    organization: "IDCamp Dicoding",
    topics: "Node.js, REST API, Jest testing, and deployment",
  },
  {
    name: "IDCamp Dicoding — React Developer",
    organization: "IDCamp Dicoding",
    topics: "React.js, JavaScript, state management, and component lifecycle",
  },
  {
    name: "Program Talent Scouting Academy (TSA) — Junior Mobile Developer",
    organization: "Talent Scouting Academy",
    topics: "Flutter, Dart, UI/UX, and state management",
  },
];

const credentialGroups = [
  {
    title: "Professional Certifications",
    entries: professionalCredentials,
  },
  {
    title: "Technical Training & Programs",
    entries: technicalPrograms,
  },
];

const allCredentials = credentialGroups.flatMap((group) => group.entries);

const CredentialItem = ({ credential }) => (
  <li className="border-b border-slate-800/80 py-4 last:border-b-0">
    <p className="text-sm font-medium leading-6 text-white">
      {credential.name}
    </p>
    <p className="mt-1 text-xs leading-5 text-slate-500">
      {credential.organization}
      {credential.meta && ` · ${credential.meta}`}
    </p>
    {credential.topics && (
      <p className="mt-2 text-xs leading-5 text-slate-400">
        Topics: {credential.topics}
      </p>
    )}
  </li>
);

const Education = () => {
  const [showAllCredentials, setShowAllCredentials] = useState(false);

  return (
    <section
      className="mx-auto flex w-full max-w-6xl flex-col px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16"
      id="education"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-labelledby="education-heading"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
          Background
        </p>
        <h2
          id="education-heading"
          className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Education
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Academic background and achievements.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 border-t border-slate-700/60 pt-8 sm:mt-12 sm:pt-10"
        >
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-slate-700/60">
            {educationEntries.map((entry, index) => (
              <article
                key={entry.institution}
                className={index === 0 ? "lg:pr-12" : "lg:pl-12"}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    {entry.period}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {entry.institution}
                  </h3>
                  <p className="text-sm text-slate-300">
                    {entry.qualification}
                  </p>
                </div>
                <div className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                  {entry.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        aria-labelledby="credentials-heading"
        className="mt-20 border-t border-slate-700/60 pt-16 sm:mt-28 sm:pt-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-400">
          Continuous Learning
        </p>
        <h2
          id="credentials-heading"
          className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Certifications &amp; Credentials
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Professional certifications, technical training, and achievements.
        </p>

        <div
          id="credential-list"
          className="mt-10 grid grid-cols-1 gap-10 border-t border-slate-700/60 pt-8 sm:mt-12 sm:pt-10 lg:grid-cols-2 lg:gap-x-16"
        >
          {credentialGroups.map((group) => {
            const visibleEntries = showAllCredentials
              ? group.entries
              : group.entries.slice(0, 3);

            return (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                  {group.title}
                </h3>
                <ul className="mt-2">
                  {visibleEntries.map((credential) => (
                    <CredentialItem
                      key={credential.name}
                      credential={credential}
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-expanded={showAllCredentials}
          aria-controls="credential-list"
          onClick={() => setShowAllCredentials((isVisible) => !isVisible)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-400 transition-colors hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
        >
          {showAllCredentials
            ? "Show Less"
            : `View All Credentials (${allCredentials.length})`}
          <BiChevronDown
            aria-hidden="true"
            className={`text-lg transition-transform duration-200 ${
              showAllCredentials ? "rotate-180" : ""
            }`}
          />
        </button>
      </motion.section>
    </section>
  );
};

export default Education;
