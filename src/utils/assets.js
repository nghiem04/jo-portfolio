// Vite serves the public/ dir from the configured base path (e.g. /jo-portfolio/).
// Data stores asset paths relative ("assets/opal/opal_1.png"); these helpers
// prefix them with BASE_URL so they resolve correctly on any route.
const BASE = import.meta.env.BASE_URL; // includes trailing slash

/** Prefix a single relative asset path with the base URL. */
export const asset = (path = '') => BASE + path.replace(/^\//, '');

/** Rewrite src="assets/..." occurrences inside an HTML string to include the base. */
export const withBaseHtml = (html = '') =>
  html.replaceAll('src="assets/', `src="${BASE}assets/`);
