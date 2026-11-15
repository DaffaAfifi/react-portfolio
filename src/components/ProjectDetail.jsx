/* eslint-disable react/prop-types */
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import { projectData } from "../projectData.js";
import { getProjectSlug, slugifyProjectTitle } from "../projectSlug.js";
import AnalysisVisualCarousel from "./AnalysisVisualCarousel.jsx";

const SectionHeading = ({ eyebrow, title, children }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
      {eyebrow}
    </p>
    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
      {title}
    </h2>
    {children && (
      <p className="mt-4 text-base leading-7 text-slate-400">{children}</p>
    )}
  </div>
);

const ListBlock = ({ title, items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      {title && <h3 className="text-lg font-medium text-white">{title}</h3>}
      <ul className={`${title ? "mt-4" : ""} space-y-3`}>
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-slate-400"
          >
            <span className="mt-3 h-px w-4 shrink-0 bg-sky-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SpecList = ({ title, items }) => {
  if (!title || !Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="border-b border-slate-800 pb-4 text-sm leading-6 text-slate-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FlowDiagram = ({ steps }) => {
  if (!Array.isArray(steps) || steps.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-0">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center sm:flex-1">
          <div className="w-full border border-slate-700 bg-slate-900/50 px-3 py-3 text-center text-sm text-slate-200">
            {step}
          </div>
          {index < steps.length - 1 && (
            <BiChevronRight
              aria-hidden="true"
              className="mx-auto rotate-90 text-xl text-sky-400 sm:mx-2 sm:rotate-0"
            />
          )}
        </div>
      ))}
    </div>
  );
};

const ArchitectureDiagram = ({ components }) => {
  if (!Array.isArray(components) || components.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {components.map((component, index) => (
        <div
          key={component}
          className={`border border-slate-700 px-4 py-5 text-center text-sm text-slate-200 ${
            index === 1 ? "border-sky-400/60 text-sky-200" : ""
          }`}
        >
          {component}
        </div>
      ))}
    </div>
  );
};

const CaseStudySections = ({ caseStudy, analysisVisuals }) => {
  const hasOverview =
    caseStudy.overview ||
    caseStudy.problemStatement?.length ||
    caseStudy.objectives?.length;
  const hasAnalysis =
    caseStudy.processSteps?.length ||
    caseStudy.requirements?.length ||
    caseStudy.businessRules?.length;
  const hasSystemDesign =
    caseStudy.architecture?.length ||
    caseStudy.dataModel?.length ||
    caseStudy.apiExample;
  const hasValidation =
    caseStudy.validationNote ||
    caseStudy.acceptanceCriteria ||
    caseStudy.validationDescription;

  return (
    <>
      {hasOverview && (
        <section className="mt-24 border-t border-slate-800 pt-12">
          <SectionHeading eyebrow="Context" title="Overview">
            {caseStudy.overview}
          </SectionHeading>
          {(caseStudy.problemStatement?.length ||
            caseStudy.objectives?.length) && (
            <div className="mt-10 grid gap-10 border-t border-slate-800 pt-8 md:grid-cols-2">
              <ListBlock
                title="Problem Statement"
                items={caseStudy.problemStatement}
              />
              <ListBlock title="Objectives" items={caseStudy.objectives} />
            </div>
          )}
        </section>
      )}

      {caseStudy.scopeItems?.length > 0 && (
        <section className="mt-24 border-t border-slate-800 pt-12">
          <SectionHeading eyebrow="Contribution" title="Scope of Work" />
          <ListBlock items={caseStudy.scopeItems} />
        </section>
      )}

      {hasAnalysis && (
        <section className="mt-24 border-t border-slate-800 pt-12">
          <SectionHeading
            eyebrow="System Analyst Practice"
            title="Analysis & Requirements"
          />
          <AnalysisVisualCarousel visuals={analysisVisuals} />
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {caseStudy.processSteps?.length > 0 && (
              <div className="lg:col-span-3">
                <h3 className="text-xl font-medium text-white">
                  Business Process
                </h3>
                <FlowDiagram steps={caseStudy.processSteps} />
              </div>
            )}
            <SpecList
              title="Functional Requirements"
              items={caseStudy.requirements}
            />
            <SpecList title="Business Rules" items={caseStudy.businessRules} />
          </div>
        </section>
      )}

      {hasSystemDesign && (
        <section className="mt-24 border-t border-slate-800 pt-12">
          <SectionHeading eyebrow="Technical Translation" title="System Design">
            Illustrative system, schema, and API examples for this case study;
            these are not verified implementations.
          </SectionHeading>
          <ArchitectureDiagram components={caseStudy.architecture} />
          {(caseStudy.dataModel?.length || caseStudy.apiExample) && (
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <SpecList
                title="Simplified Data Model"
                items={caseStudy.dataModel}
              />
              {caseStudy.apiExample && (
                <div>
                  <h3 className="text-lg font-medium text-white">
                    API Interaction Example
                  </h3>
                  <code className="mt-4 block overflow-x-auto border border-slate-700 bg-slate-950 p-4 text-sm text-sky-300">
                    {caseStudy.apiExample}
                  </code>
                  {caseStudy.apiDescription && (
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {caseStudy.apiDescription}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {caseStudy.decisions?.length > 0 && (
        <section className="mt-24 border-t border-slate-800 pt-12">
          <SectionHeading eyebrow="Rationale" title="Key Decisions" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {caseStudy.decisions.map((decision) => (
              <article
                key={decision.title}
                className="border-t border-sky-400/60 pt-4"
              >
                <h3 className="font-medium text-white">{decision.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {decision.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {(hasValidation || caseStudy.takeaways?.length > 0) && (
        <section className="mt-24 grid gap-12 border-t border-slate-800 pt-12 md:grid-cols-2">
          {hasValidation && (
            <div>
              <SectionHeading
                eyebrow="Proposed Validation"
                title="Validation & Testing"
              >
                {caseStudy.validationNote}
              </SectionHeading>
              {caseStudy.acceptanceCriteria && (
                <p className="mt-8 border-l-2 border-sky-400 pl-4 text-sm leading-7 text-slate-300">
                  {caseStudy.acceptanceCriteria}
                </p>
              )}
              {caseStudy.validationDescription && (
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {caseStudy.validationDescription}
                </p>
              )}
            </div>
          )}
          {caseStudy.takeaways?.length > 0 && (
            <div>
              <SectionHeading eyebrow="Reflection" title="Key Takeaways" />
              <ListBlock items={caseStudy.takeaways} />
            </div>
          )}
        </section>
      )}
    </>
  );
};

const ProjectDetail = ({ slug }) => {
  const sourceProject = projectData.find(
    (project) =>
      getProjectSlug(project) === slug ||
      slugifyProjectTitle(project.title) === slug ||
      String(project.id) === slug,
  );
  const project = sourceProject;
  const caseStudy = project?.caseStudy;
  const detailTitle = caseStudy?.title || project?.title;

  if (!project) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-40 text-white sm:px-10 lg:px-16">
        <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
          Project not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold">
          This project is unavailable.
        </h1>
        <a
          href="/#projects"
          className="mt-8 inline-flex items-center gap-2 text-sky-400 hover:text-sky-300"
        >
          <BiArrowBack aria-hidden="true" /> Back to projects
        </a>
      </main>
    );
  }

  const projectIndex = projectData.findIndex((item) => item.id === project.id);
  const previous = projectIndex > 0 ? projectData[projectIndex - 1] : null;
  const next =
    projectIndex >= 0 && projectIndex < projectData.length - 1
      ? projectData[projectIndex + 1]
      : null;
  const coverImage = project.images?.[0];
  const projectMetadata = caseStudy
    ? [
        caseStudy.status && ["Status", caseStudy.status],
        caseStudy.period && ["Period", caseStudy.period],
        caseStudy.role && ["Role", caseStudy.role],
        ...(Array.isArray(caseStudy.metadata) ? caseStudy.metadata : []),
      ].filter(Boolean)
    : [];

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32 text-white sm:px-10 lg:px-16">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <a href="/#about" className="hover:text-sky-300">
          Home
        </a>
        <span className="mx-2">/</span>
        <a href="/#projects" className="hover:text-sky-300">
          Projects
        </a>
        <span className="mx-2">/</span>
        <span className="text-slate-300">{detailTitle}</span>
      </nav>

      <header className="mt-10">
        <div className="mx-auto w-full max-w-[1080px] overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/80 p-2 shadow-2xl shadow-slate-950/40 sm:p-3">
          {coverImage ? (
            <img
              src={coverImage}
              alt={`${detailTitle} cover`}
              className="mx-auto max-h-[620px] w-full rounded-lg object-contain"
            />
          ) : caseStudy ? (
            <div className="flex aspect-[16/9] w-full items-center justify-center rounded-lg bg-slate-950/50 p-8">
              <div className="grid w-full max-w-xs grid-cols-2 gap-3 text-center text-xs text-sky-200">
                <span className="border border-sky-400/60 p-4">Reports</span>
                <span className="border border-slate-700 p-4">Review</span>
                <span className="border border-slate-700 p-4">Cases</span>
                <span className="border border-sky-400/60 p-4">Resolution</span>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-12 sm:mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            {caseStudy?.category || "PROJECT CASE STUDY"}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {detailTitle}
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            {caseStudy?.summary || project.description}
          </p>
          {projectMetadata.length > 0 && (
            <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 text-left sm:grid-cols-2 lg:grid-cols-3">
              {projectMetadata.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </header>

      {caseStudy ? (
        <CaseStudySections
          caseStudy={caseStudy}
          analysisVisuals={project.analysisVisuals}
        />
      ) : (
        <section className="mt-24 border-t border-slate-800 pt-12">
          <SectionHeading eyebrow="Project Context" title="Overview">
            {project.description}
          </SectionHeading>

          {project.technologies?.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-slate-700 px-3 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm text-sky-400 hover:text-sky-300"
            >
              View repository ↗
            </a>
          )}
        </section>
      )}

      {Array.isArray(project.analysisVisuals) &&
        project.analysisVisuals.length > 0 &&
        project.id > 6 && (
          <section className="mt-24 border-t border-slate-800 pt-12">
            <SectionHeading
              eyebrow="Project Showcase"
              title="Analysis & Interface Visuals"
            >
              Selected application interfaces and supporting project visuals.
            </SectionHeading>

            <AnalysisVisualCarousel visuals={project.analysisVisuals} />
          </section>
        )}

      <nav
        aria-label="Project navigation"
        className="mt-24 grid gap-4 border-t border-slate-800 pt-8 sm:grid-cols-3"
      >
        {previous ? (
          <ProjectNavLink label="Previous Project" project={previous} />
        ) : (
          <span />
        )}
        <a
          href="/#projects"
          className="text-center text-sm text-sky-400 hover:text-sky-300"
        >
          Back to All Projects
        </a>
        {next ? (
          <ProjectNavLink label="Next Project" project={next} align="right" />
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
};

const ProjectNavLink = ({ label, project, align = "left" }) => (
  <a
    href={`/projects/${getProjectSlug(project)}`}
    className={`group ${align === "right" ? "text-right" : "text-left"}`}
  >
    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
      {label}
    </span>
    <span className="mt-2 block text-sm text-slate-200 transition-colors group-hover:text-sky-300">
      {project.caseStudy?.title || project.title}
    </span>
  </a>
);

export default ProjectDetail;
