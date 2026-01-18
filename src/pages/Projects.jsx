// src/pages/Projects.jsx
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: "Portofolio Website",
      description: "Website portofolio pribadi dengan React dan React Router",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      githubLink: "https://github.com/Diolutviandr3/portofolio-dio_lutvi",
      demoLink: "https://diolutviandr3.github.io/portofolio-dio_lutvi/"
    },
    {
      title: "Waste Management Web",
      description: "Aplikasi manajemen sampah dengan fitur drag & drop",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/Diolutviandr3/E-Recycle",
      demoLink: "https://diolutviandr3.github.io/E-Recycle/"
    },
    {
      title: "Real-Time Monitor Selaras Truck",
      description: "Website monitoring truk secara real-time menggunakan HTML, dan CSS",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/Diolutviandr3/Selaras-Truck_Universitas-Ahmad-Dahlan",
      demoLink: "https://diolutviandr3.github.io/Selaras-Truck_Universitas-Ahmad-Dahlan/"
    }
  ];

  return (
    <div>
      <h1>Proyek Saya</h1>
      <p>Berikut adalah daftar proyek yang telah saya kerjakan.</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;