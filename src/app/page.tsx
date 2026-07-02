const projects = [
  {
    id: "01",
    title: "HOK AI Canvas",
    subtitle: "Generative media collaboration platform",
    category: "PRODUCT",
    href: "https://github.com/HOKGroup/ai-canvas",
    body: "Canvas workspace for design teams to connect prompts, images, and model tools.",
  },
  {
    id: "02",
    title: "Deep Due Diligence",
    subtitle: "AML and sanctions investigation platform",
    category: "COMPLIANCE",
    href: "https://github.com/ashkanrdn/DD",
    body: "Entity-centric diligence system for sanctions screening, ownership context, and analyst review.",
  },
  {
    id: "03",
    title: "SancTrustFeed",
    subtitle: "Sanctions and AML regulatory workbench",
    category: "LEGAL TECH",
    href: "https://feed.sanctionsexpert.com",
    body: "Live reader and workbench for sanctions professionals tracking regulatory developments.",
  },
  {
    id: "04",
    title: "NYC Development Site Evaluator",
    subtitle: "First place, Vercel x Google DeepMind Hackathon",
    category: "AGENTS",
    href: "https://www.linkedin.com/posts/ujinseah_1st-place-at-the-google-deepmind-x-vercel-activity-7442952589907890176-KkDh",
    body: "Agentic feasibility tool for zoning, parcel, permitting, and site-context review.",
  },
  {
    id: "05",
    title: "CASI",
    subtitle: "Criminal justice data visualization",
    category: "CIVIC DATA",
    href: "https://casi-2.vercel.app",
    body: "County-level California justice data map with filters, metrics, charts, and exports.",
  },
  {
    id: "06",
    title: "Prompt Analysis",
    subtitle: "AI Canvas usage research system",
    category: "RESEARCH",
    href: "https://github.com/HOKGroup/prompt-analysis",
    body: "Analysis workspace for clustering, summarizing, and reviewing AI Canvas prompt activity.",
  },
  {
    id: "07",
    title: "Proposal Library",
    subtitle: "Internal document search and review system",
    category: "TOOLING",
    href: "https://github.com/HOKGroup/proposal_library",
    body: "Document library with upload, project lookup, worker processing, and deep zoom viewing.",
  },
];

const tools = [
  "REACT / NEXT.JS",
  "PYTHON / FASTAPI",
  "POSTGRES / PRISMA",
  "WEBGL / THREE.JS",
  "LLM AGENTS",
  "DATA VISUALIZATION",
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
      <section className="blueprint-sheet" aria-label="Ashkan Radnia archive">
        <header className="sheet-meta" aria-label="Technical metadata">
          <div>
            <span>STUDIO ARCHIVE</span>
            <strong>REF: AR-2026-001</strong>
          </div>
          <div>
            <span>LOCATION DATA</span>
            <strong>BROOKLYN NY</strong>
          </div>
          <div>
            <span>SYSTEM STATUS</span>
            <strong>ACTIVE ARCHIVE</strong>
          </div>
          <div>
            <span>LAST UPDATED</span>
            <strong>02.JUL.2026</strong>
          </div>
        </header>

        <div className="ruler" aria-hidden="true">
          {rulerMarks.map((mark) => (
            <span key={mark}>{mark}</span>
          ))}
        </div>

        <section className="drawing-field">
          <div className="angle-note">30 DEG ANGLE_REF</div>
          <div className="scale-note">SCALE_1:1.00</div>
          <div className="coordinate-box">x0.58, y0.54</div>

          <div className="title-block">
            <h1>Ashkan</h1>
            <p>Archive_Vol.01</p>
          </div>

          <div className="field-footer">
            <span>GRID_UNIT: 10MM</span>
            <span>MATERIAL: DOMAIN_TRANSLATION</span>
          </div>
        </section>

        <section className="archive-index" aria-label="Portfolio index">
          <aside className="mission-panel">
            <p className="mission-copy">
              Software developer and computational designer building tools for
              AI media, compliance, civic data, research, and internal workflows.
            </p>

            <div className="apparatus">
              <h2>TOOLS &amp; APPARATUS</h2>
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
              <span>PROJECT NOMENCLATURE</span>
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
          <span>END_OF_INDEX</span>
        </footer>
      </section>
    </main>
  );
}
