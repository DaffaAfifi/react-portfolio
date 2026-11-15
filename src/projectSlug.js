export const slugifyProjectTitle = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getProjectSlug = (project) =>
  project.detailSlug || slugifyProjectTitle(project.title);
