import "../styles/Projects.css";

const projects = [
  {
    title: "Character Visualization Task",
    description: "A dynamic visual character viewer built using React, allowing users to browse and interact with character data.",
    tech: "React.js, CSS3",
    link: "https://character-visualization-task.vercel.app/",
  },
  {
    title: "BHIVE Workspace App",
    description: "A responsive landing page for coworking spaces with detailed UI design, app download links, and modern visuals.",
    tech: "HTML5, CSS3, JavaScript",
    link: "https://rakeshmandal.github.io/bhive/",
  },
  {
    title: "Paytm Money IPO Page",
    description: "Live IPO listings and schedules for upcoming IPOs, designed for Paytm Money's investment platform.",
    tech: "React.js, Bootstrap",
    link: "https://www.paytmmoney.com/equities/ipo/upcoming_ipo.html",
  },
  {
    title: "Movie Application",
    description: "A movie browsing app displaying trending and latest movies using external movie API integrations.",
    tech: "React.js, CSS3, TMDB API",
    link: "https://rakeshmandal.github.io/movie-application/",
  },
  {
    title: "Walmart Pet Pharmacy",
    description: "Worked on Walmart's PetRx platform to deliver a seamless pharmacy experience for pet supplies.",
    tech: "React.js, TypeScript, GraphQL, Jest",
    link: "https://www.walmart.com/cp/8328098?povid=GlobalNav_rWeb_Pets_PetSupplies_PetPharmacy",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card animated" key={index}>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">Tech Stack: {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Project ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
