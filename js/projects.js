/** @typedef {{ id: string, title: string, tagline: string, image: string, github: string, description: string, howItWasMade: string, stack: string[] }} Project */

/** @type {Project[]} */
const PROJECTS = [
  {
    id: "stellar-garden",
    title: "Stellar Garden",
    tagline: "Generative night-sky visuals in the browser",
    github: "https://github.com/franciscobenjamin/stellar-garden",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    description:
      "An interactive canvas where particles drift like seeds between two hands—users plant constellations with clicks and watch them bloom over time.",
    howItWasMade:
      "Built with vanilla JavaScript and the Canvas 2D API. Particle positions use simple physics (velocity + damping). Color palettes are sampled from your portfolio artwork so the experience feels cohesive. No frameworks—just requestAnimationFrame and careful tuning of spawn rates.",
    stack: ["JavaScript", "Canvas API", "CSS"],
  },
  {
    id: "cave-notes",
    title: "Cave Notes",
    tagline: "A minimal markdown journal with offline support",
    github: "https://github.com/franciscobenjamin/cave-notes",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    description:
      "A distraction-free writing app that stores notes locally and syncs when you're back online—designed for late-night ideas you don't want to lose.",
    howItWasMade:
      "React for the editor UI, IndexedDB via Dexie for persistence, and a small Service Worker for offline caching. Markdown rendering uses a lightweight parser; the sync layer is a thin REST wrapper you can point at any backend.",
    stack: ["React", "IndexedDB", "PWA"],
  },
  {
    id: "echo-map",
    title: "Echo Map",
    tagline: "Audio-reactive map of live venues",
    github: "https://github.com/franciscobenjamin/echo-map",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    description:
      "Explore venues on a map where marker size pulses with recent set-list energy—built for discovering where the crowd is moving tonight.",
    howItWasMade:
      "Mapbox GL JS for the basemap, Web Audio API to analyze preview clips, and a Node/Express API aggregating public event data. Markers scale with a normalized “energy” score computed from tempo and spectral centroid.",
    stack: ["Mapbox", "Node.js", "Web Audio"],
  },
  {
    id: "porcelain-api",
    title: "Porcelain API",
    tagline: "REST toolkit for small creative teams",
    github: "https://github.com/franciscobenjamin/porcelain-api",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    description:
      "Opinionated CRUD scaffolding with built-in auth hooks and OpenAPI docs—so side projects ship APIs without reinventing middleware every weekend.",
    howItWasMade:
      "TypeScript throughout: Fastify for the server, Zod for request validation, and Prisma for Postgres. OpenAPI specs are generated from the same Zod schemas so docs never drift from behavior.",
    stack: ["TypeScript", "Fastify", "Prisma"],
  },
];

function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}
