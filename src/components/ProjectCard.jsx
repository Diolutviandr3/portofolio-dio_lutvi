import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  const { title, description, technologies, githubLink, demoLink, image } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="image-placeholder">
            <span>📁</span>
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <span>🔗</span> GitHub
            </a>
          )}
          
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="demo-link"
            >
              <span>🌐</span> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Prop types untuk validasi
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string,
    demoLink: PropTypes.string,
    image: PropTypes.string
  }).isRequired
};

export default ProjectCard;