const projects = [
  {
    id: "01",
    title: "HOK AI Canvas",
    subtitle: "A canvas for designers working with AI",
    category: "AI TOOLS",
    href: "https://github.com/HOKGroup/ai-canvas",
    body: "A shared workspace where designers can keep prompts, images, model runs, and generated work in one place instead of losing the thread in chat tools.",
    proof: "Built with Next.js, React, tldraw, model integrations, and prompt workflows",
  },
  {
    id: "02",
    title: "Deep Due Diligence",
    subtitle: "IBM Enterprise Agents Hackathon, 1st place",
    category: "AGENTS",
    href: "https://github.com/ashkanrdn/DD",
    body: "A diligence workspace for sanctions and AML review. It gives analysts watchlist checks, ownership context, risk rules, and agent helpers that stay inside the workflow.",
    proof: "Built with Next.js, Prisma, Postgres, sanctions data, and a workflow engine",
  },
  {
    id: "03",
    title: "Sanctions Expert Feed",
    subtitle: "A working reader for sanctions professionals",
    category: "B2B PRODUCT",
    href: "https://feed.sanctionsexpert.com",
    body: "A product for people who track regulatory changes every day. It supports briefings, saved work, search, feedback, and the admin pieces needed to keep it running.",
    proof: "Built with Next.js, Prisma, Supabase Postgres, Better Auth, and PostHog",
  },
  {
    id: "04",
    title: "SiteBrief",
    subtitle: "First place, Vercel x Google DeepMind Hackathon",
    category: "PROPTECH",
    href: "https://github.com/ashkanrdn/DueIntelligence",
    body: "A tool for reading an NYC parcel quickly. It pulls public city data, checks zoning context, and turns the result into a sourced site brief.",
    proof: "Built with Vercel AI SDK, Gemini, Deck.gl, MapLibre, and Socrata APIs",
  },
  {
    id: "05",
    title: "CASI",
    subtitle: "California justice data, made easier to read",
    category: "CIVIC DATA",
    href: "https://casi-2.vercel.app",
    body: "A map-based data product for comparing California counties across justice metrics, demographics, rankings, charts, and exports.",
    proof: "Built with Next.js, TypeScript, Redux Toolkit, Deck.gl, and Mapbox",
  },
  {
    id: "06",
    title: "Prompt Analysis",
    subtitle: "Learning from how people actually prompt",
    category: "RESEARCH",
    href: "https://github.com/HOKGroup/prompt-analysis",
    body: "A local research system for AI Canvas prompt data. It helps turn raw usage into clusters, summaries, review screens, and product questions worth chasing.",
    proof: "Built with Python, SQLite, Chroma, FastAPI, Next.js, and clustering workflows",
  },
  {
    id: "07",
    title: "Proposal Library",
    subtitle: "A better way to search proposal work",
    category: "INTERNAL TOOL",
    href: "https://github.com/HOKGroup/proposal_library",
    body: "An internal tool for finding and reviewing proposal decks and PDFs, with upload flows, project lookup, background conversion, search, and deep zoom viewing.",
    proof: "Built with Next.js, Entra auth, workers, LanceDB, and OpenSeadragon",
  },
];

const tools = [
  "NEXT.JS / REACT",
  "PYTHON / FASTAPI",
  "POSTGRES / PRISMA",
  "WEBGL / THREE.JS",
  "LLM AGENTS / AI SDK",
  "DOMAIN MODELING",
];

const trajectory = [
  {
    label: "Architecture",
    body: "I started in architecture. That taught me to think in constraints, drawings, clients, and real-world mess.",
  },
  {
    label: "Computational design",
    body: "Then I moved into computational design. Rhino, Grasshopper, Revit, Dynamo, Python, C#, WebGL. Tools for people doing design work.",
  },
  {
    label: "Software development",
    body: "Now I build software. Mostly AI tools, data products, and workflow systems with TypeScript, React, Next.js, Python, and Postgres.",
  },
];

const roleSignals = [
  "Forward Deployed Engineer",
  "AI Product Engineer",
  "Full-Stack Product Engineer",
  "Prototype Engineer",
  "Creative Tools Engineer",
];

const writingDrafts = [
  {
    id: "W01",
    title: "When you own the AI tool, you own the learning loop",
    status: "DRAFT",
    angle:
      "AI Canvas gives us more than generated images. It lets us see what designers are trying to do, where the tool helps, and where the workflow breaks.",
    fill:
      "Add real prompt patterns, screenshots from Prompt Analysis, and one product decision that came from the data.",
  },
  {
    id: "W02",
    title: "Eval loops for architecture agents",
    status: "OUTLINE",
    angle:
      "A practical way to test architecture agents on RFIs and submittals, using real cases and clear pass or fail checks.",
    fill:
      "Add the masonry submittal example, the baseline comparison, and the parts a domain expert should be able to edit without touching code.",
  },
  {
    id: "W03",
    title: "From architecture to computational design to software",
    status: "NOTES",
    angle:
      "The honest version of my path: architecture taught me constraints, computational design taught me tools, and software became the way to ship the work.",
    fill:
      "Add the moments where the path changed. What felt useful, what stopped fitting, and what software let me do that architecture could not.",
  },
  {
    id: "W04",
    title: "Controls beat prompt ping-pong",
    status: "SEED",
    angle:
      "When people keep rewriting the same prompt, the product is telling you it needs a control, a preset, or a better workflow.",
    fill:
      "Add examples from creative tools and prototype demos where the interface made the AI easier to steer.",
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
        <header className="sheet-meta" aria-label="Technical metadata">
          <div>
            <span>PORTFOLIO</span>
            <strong>ASHKAN RADNIA</strong>
          </div>
          <div>
            <span>LOCATION</span>
            <strong>BROOKLYN NY</strong>
          </div>
          <div>
            <span>LOOKING FOR</span>
            <strong>AI PRODUCT / FDE ROLES</strong>
          </div>
          <div>
            <span>UPDATED</span>
            <strong>02.JUL.2026</strong>
          </div>
        </header>

        <div className="ruler" aria-hidden="true">
          {rulerMarks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>

        <section className="drawing-field">
          <div className="angle-note">ARCHITECTURE TO SOFTWARE</div>
          <div className="scale-note">TOOLS FOR MESSY WORK</div>
          <div className="coordinate-box">AI PRODUCT / FULL STACK</div>

          <div className="title-block">
            <h1>Ashkan Radnia</h1>
            <p>I build AI tools for work that needs domain context.</p>
          </div>

          <div className="field-footer">
            <span>Started in architecture</span>
            <span>Now building software for messy domains</span>
          </div>
        </section>

        <section className="archive-index" aria-label="Portfolio index">
          <aside className="mission-panel">
            <p className="mission-copy">
              I like problems where the hard part is not just the code. The hard
              part is learning the work well enough to build the right tool.
              That has taken me through design tools, sanctions research, civic
              data, internal search, and AI product prototypes.
            </p>

            <div className="trajectory">
              <h2>How I got here</h2>
              <ol>
                {trajectory.map((step) => (
                  <li key={step.label}>
                    <strong>{step.label}</strong>
                    <span>{step.body}</span>
                  </li>
                ))}
              </ol>
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
            <div className="role-strip" aria-label="Target roles">
              {roleSignals.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>

            <div className="project-header">
              <span>ID</span>
              <span>Work I can point to</span>
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

        <section className="writing-section" aria-label="Writing and draft articles">
          <div className="writing-intro">
            <span>WRITING</span>
            <h2>Draft articles to fill in</h2>
            <p>
              I want the writing to explain the work without turning it into
              marketing. These are the pieces I should write next.
            </p>
          </div>

          <div className="writing-list">
            {writingDrafts.map((draft) => (
              <article className="writing-card" key={draft.id}>
                <div className="writing-card-meta">
                  <span>{draft.id}</span>
                  <strong>{draft.status}</strong>
                </div>
                <div className="writing-card-copy">
                  <h3>{draft.title}</h3>
                  <p>{draft.angle}</p>
                  <small>{draft.fill}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="sheet-footer">
          <span>CONTACT: ashkan.rdn@gmail.com</span>
          <span>LINKEDIN / GITHUB: ashkanradnia / ashkanrdn</span>
          <span>More soon</span>
        </footer>
      </section>
    </main>
  );
}
