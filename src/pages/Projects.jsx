// src/pages/Projects.jsx
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: "Portofolio Website",
      description: "Website portofolio pribadi dengan React dan React Router",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      githubLink: "https://github.com/username/portofolio-dio",
      demoLink: "https://portofolio-dio.vercel.app"
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur drag & drop",
      technologies: ["React", "Tailwind CSS", "LocalStorage"],
      githubLink: "https://github.com/username/task-app",
      demoLink: "https://task-app-demo.vercel.app"
    },
    {
      title: "E-commerce Website",
      description: "Website toko online dengan sistem keranjang belanja",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/username/ecommerce",
      demoLink: "https://ecommerce-demo.vercel.app"
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