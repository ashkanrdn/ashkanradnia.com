const projects = [
  {
    id: "01",
    title: "HOK AI Canvas",
    subtitle: "Creative AI workspace for design teams",
    category: "AI TOOLS",
    href: "https://github.com/HOKGroup/ai-canvas",
    body: "Built for design teams using image models in real project work. It keeps prompts, images, model runs, and reusable prompt inputs in one workspace so designers can iterate without losing context.",
    proof: "Next.js, React, tldraw, Prisma/PostgreSQL, Azure Blob, Entra ID, provider integrations",
  },
  {
    id: "02",
    title: "Deep Due Diligence",
    subtitle: "Compliance review workspace for sanctions teams",
    category: "AGENTS",
    href: "https://github.com/ashkanrdn/DD",
    body: "Built for sanctions and AML review; it won the Best Implementation Award at the IBM Enterprise Agents Hackathon. It combines watchlist screening, ownership context, deterministic risk rules, bounded agents, and audit-ready reports for analyst review.",
    proof: "Next.js, shadcn/ui, Prisma/PostgreSQL, workers, sanctions/watchlist data, bounded agents",
  },
  {
    id: "03",
    title: "Sanctions Expert Feed",
    subtitle: "Regulatory reader for sanctions teams",
    category: "LEGAL TECH",
    href: "https://feed.sanctionsexpert.com",
    body: "Built for people who track sanctions and AML changes. It turns source material into Briefs with citations, taxonomy tags, entity context, saved/read state, feedback, and admin review.",
    proof: "Next.js, Prisma, Supabase Postgres, Better Auth, PostHog, source citation models",
  },
  {
    id: "04",
    title: "SiteBrief",
    subtitle: "Real estate site diligence brief generator",
    category: "PROPTECH",
    href: "https://github.com/ashkanrdn/DueIntelligence",
    body: "Built for early-stage real estate site review; it won first place at the Vercel x Google DeepMind Hackathon. It pulls parcel, zoning, flood, DOB, comps, census, and HUD rent data into a sourced development brief.",
    proof: "Next.js, Gemini, Vercel AI SDK, Deck.gl, Socrata APIs, vision reasoning",
  },
  {
    id: "05",
    title: "CASI Justice Explorer",
    subtitle: "County justice data explorer",
    category: "CIVIC DATA",
    href: "https://casi-2.vercel.app",
    body: "Built for comparing California counties across justice metrics. It gives people maps, rankings, charts, per-capita views, filters, and exports without forcing them into raw tables.",
    proof: "Next.js, TypeScript, Redux Toolkit, Deck.gl, Mapbox GL, preprocessed county data",
  },
  {
    id: "06",
    title: "Prompt Analysis",
    subtitle: "AI Canvas usage research system",
    category: "RESEARCH",
    href: "https://github.com/HOKGroup/prompt-analysis",
    body: "Built to study how designers actually prompt inside AI Canvas. It turns raw prompt records into clusters, summaries, review screens, and product questions about where the tool helps or breaks.",
    proof: "Python, SQLite, Chroma, FastAPI, Next.js, clustering workflows",
  },
  {
    id: "07",
    title: "Proposal Library",
    subtitle: "Internal proposal search workspace",
    category: "INTERNAL TOOL",
    href: "https://github.com/HOKGroup/proposal_library",
    body: "Built for teams that need to find past proposal work across PDFs and decks. It handles upload, extraction, indexing, project lookup, hybrid search, and deep-zoom review.",
    proof: "Next.js, Entra ID, Postgres/Prisma job queue, Elasticsearch, LanceDB, OpenSeadragon",
  },
];

const tools = [
  "NEXT.JS / REACT",
  "PYTHON / FASTAPI",
  "POSTGRES / PRISMA",
  "RETRIEVAL / SEARCH",
  "LLM AGENTS / AI SDK",
  "CITATIONS / REVIEW FLOWS",
];

const trajectory = [
  {
    label: "Architecture",
    body: "Technical drawings, constraints, site context, client review.",
  },
  {
    label: "Computational design",
    body: "Rhino, Grasshopper, Revit, Dynamo, Python, C#, WebGL.",
  },
  {
    label: "Software development",
    body: "TypeScript, React, Next.js, Python, Postgres, AI workflows, retrieval/search.",
  },
];

const rulerMarks = [
  "0MM",
  "100MM",
  "200MM",
  "300MM",
  "400MM",
  "500MM",
  "600MM",
  "700MM",
  "800MM",
  "900MM",
  "1000MM",
  "1100MM",
];

export default function Home() {
  return (
    <main className="blueprint-page">
      <section className="blueprint-sheet" aria-label="Ashkan Radnia portfolio">
        <div className="ruler" aria-hidden="true">
          {rulerMarks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>

        <section className="drawing-field">
          <div className="coordinate-box">RETRIEVAL / AGENTS / PRODUCT</div>

          <div className="title-block">
            <h1>Ashkan Radnia</h1>
            <p>Software developer / computational designer</p>
          </div>
        </section>

        <section className="archive-index" aria-label="Portfolio index">
          <aside className="mission-panel">
            <p className="mission-copy">
              I build AI, search, data, and visualization tools for design,
              compliance, civic data, and document-heavy workflows.
            </p>

            <div className="trajectory">
              <h2>Background</h2>
              <ul>
                {trajectory.map((step) => (
                  <li key={step.label}>
                    <strong>{step.label}</strong>
                    <span>{step.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="apparatus">
              <h2>What I use</h2>
              <ul>
                {tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="project-panel">
            <div className="project-header">
              <span>ID</span>
              <span>Selected systems</span>
              <span>CATEGORY</span>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <a className="project-row" href={project.href} key={project.id}>
                  <span className="project-id">{project.id}</span>
                  <span className="project-copy">
                    <strong>{project.title}</strong>
                    <em>{project.subtitle}</em>
                    <span>{project.body}</span>
                    <small>{project.proof}</small>
                  </span>
                  <span className="project-category">{project.category}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="sheet-footer">
          <span>CONTACT: ashkan.rdn@gmail.com</span>
          <span>LINKEDIN / GITHUB: ashkanradnia / ashkanrdn</span>
        </footer>
      </section>
    </main>
  );
}
