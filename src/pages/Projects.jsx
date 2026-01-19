// src/pages/Projects.jsx
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../App.css';

function Projects() {
  const projects = [
    {
      title: "Portofolio Website",
      description: "Website portofolio pribadi dengan React dan React Router yang responsif dan modern",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      githubLink: "https://github.com/Diolutviandr3/portofolio-dio_lutvi",
      demoLink: "https://diolutviandr3.github.io/portofolio-dio_lutvi/",
      image: null
    },
    {
      title: "Waste Management Web",
      description: "Aplikasi manajemen sampah dengan fitur drag & drop dan dashboard interaktif",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Diolutviandr3/E-Recycle",
      demoLink: "https://diolutviandr3.github.io/E-Recycle/",
      image: null
    },
    {
      title: "Real-Time Monitor Selaras Truck",
      description: "Website monitoring truk secara real-time dengan peta dan status live tracking",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Diolutviandr3/Selaras-Truck_Universitas-Ahmad-Dahlan",
      demoLink: "https://diolutviandr3.github.io/Selaras-Truck_Universitas-Ahmad-Dahlan/",
      image: null
    }
  ];

  const [filter, setFilter] = useState('all');

  return (
    <div className="projects-page">
      {/* Header Section - Desktop Optimized */}
      <div className="projects-header">
        <div className="header-content">
          <h1 className="projects-title">My Projects</h1>
          <h2 className="projects-subtitle">
            Showcasing my work in web development and design
          </h2>
          <p className="projects-description">
            A collection of projects that demonstrate my skills in frontend development, 
            responsive design, and problem-solving. Each project represents a unique 
            challenge and solution.
          </p>
        </div>
      </div>

      {/* Main Content - Desktop Layout */}
      <div className="projects-container">
        {/* Sidebar Filters - Desktop Left */}
        <aside className="projects-sidebar">
          <h3 className="sidebar-title">Filter Projects</h3>
          <div className="sidebar-filters">
            <button 
              className={`sidebar-filter ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <span className="filter-icon">📂</span>
              All Projects
              <span className="project-count">{projects.length}</span>
            </button>
            <button 
              className={`sidebar-filter ${filter === 'react' ? 'active' : ''}`}
              onClick={() => setFilter('react')}
            >
              <span className="filter-icon">⚛️</span>
              React Projects
              <span className="project-count">
                {projects.filter(p => p.technologies.includes('React')).length}
              </span>
            </button>
            <button 
              className={`sidebar-filter ${filter === 'javascript' ? 'active' : ''}`}
              onClick={() => setFilter('javascript')}
            >
              <span className="filter-icon">🟨</span>
              JavaScript
              <span className="project-count">
                {projects.filter(p => p.technologies.includes('JavaScript')).length}
              </span>
            </button>
            <button 
              className={`sidebar-filter ${filter === 'css' ? 'active' : ''}`}
              onClick={() => setFilter('css')}
            >
              <span className="filter-icon">🎨</span>
              CSS/Design
              <span className="project-count">
                {projects.filter(p => p.technologies.includes('CSS')).length}
              </span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="sidebar-stats">
            <h3 className="stats-title">Project Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{projects.length}</div>
                <div className="stat-label">Total Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Responsive</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Live Demos</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Projects Grid - Desktop Right */}
        <main className="projects-main">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;