import PropTypes from 'prop-types';

function ProjectCard({ project, index }) {
  const { title, description, technologies, githubLink, demoLink, image } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="image-placeholder">
            <span className="placeholder-icon">📁</span>
          </div>
        )}
        <span className="project-number">{index + 1}</span>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="tech-tags">
          {technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {githubLink && githubLink !== '#' && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              <span className="link-icon">🔗</span> GitHub
            </a>
          )}
          
          {demoLink && demoLink !== '#' && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link demo-link"
            >
              <span className="link-icon">🌐</span> Live Demo
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
  }).isRequired,
  index: PropTypes.number
};

ProjectCard.defaultProps = {
  index: 0
};

export default ProjectCard;