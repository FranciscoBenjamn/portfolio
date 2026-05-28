/** @typedef {{ id: string, title: string, tagline: string, image: string, github: string, live?: string, description: string, howItWasMade: string, stack: string[] }} Project */

/** @type {Project[]} */
const PROJECTS = [
  {
    id: "finance-tracking",
    title: "Finance Tracking",
    tagline: "Simple finance tracker built with JS, HTML, and CSS",
    github: "https://github.com/FranciscoBenjamn/finance-tracking",
    image: "images/finance-tracking.png",
    description:
      "A lightweight personal finance tracker for logging income and expenses, viewing balances, and keeping tabs on spending without a heavy app or sign-up.",
    howItWasMade:
      "Built as a static web app with HTML structure, CSS for layout and styling, and vanilla JavaScript for adding entries, updating totals, and persisting data in the browser. No frameworks—just the core web stack.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "currency-conversion",
    title: "Currency Converter",
    tagline: "Simple currency converter built with JavaScript, HTML, and CSS",
    github: "https://github.com/FranciscoBenjamn/currency-conversion",
    image: "images/currency-conversion.png",
    description:
      "A straightforward currency converter—pick a source and target currency, enter an amount, and see the converted result instantly.",
    howItWasMade:
      "Built as a static web app with HTML for structure, CSS for the centered layout and purple accents, and vanilla JavaScript in convert.js to handle dropdowns, amount input, and conversion logic.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "find-your-scent",
    title: "Find Your Scent",
    tagline: "Find your ideal cologne scents for each season",
    github: "https://github.com/FranciscoBenjamn/find-your-scent",
    image: "images/find-your-scent.png",
    description:
      "A simple app that helps users discover cologne recommendations matched to the season—browse scent profiles and find what fits spring, summer, fall, or winter.",
    howItWasMade:
      "Built with Create React App: React components for the UI, JavaScript for scent logic and season-based recommendations, and CSS for layout. Structured with a src/ folder and public assets, ready to run locally with npm start.",
    stack: ["React", "JavaScript", "CSS"],
  },
  {
    id: "fits-for-free",
    title: "Fits for Free",
    tagline: "Connect with models and stylists, find new brands and fashion trends here",
    live: "https://fits.saint-central.xyz/",
    github: "https://github.com/FranciscoBenjamn/fits-for-free",
    image: "images/fits-for-free.png",
    description:
      "Connect with models and stylists, find new brands and fashion trends here",
    howItWasMade:
      "Built with HTML, CSS, and JavaScript for layout, styling, and client-side interactivity.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
];

function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
