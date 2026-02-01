import { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

function Projects() {
  const projectsRef = useScrollAnimation('.project-card');
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  // Sample project data
  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and checkout flow.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      category: 'web',
      description: 'Interactive dashboard for analyzing business metrics with real-time charts, graphs, and customizable widgets.',
      technologies: ['D3.js', 'React', 'Node.js'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'A secure mobile banking application with biometric authentication, transaction tracking, and budget management features.',
      technologies: ['React Native', 'Redux', 'Node.js'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web',
      description: 'A beautiful portfolio website showcasing creative work with smooth animations and responsive design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    {
      id: 6,
      title: 'Weather App',
      category: 'mobile',
      description: 'A weather application providing real-time weather updates, forecasts, and location-based weather information.',
      technologies: ['React Native', 'API Integration'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    }
  ];

  useEffect(() => {
    // Ensure projects are loaded immediately
    setProjects(allProjects);
    
    // Force re-render to fix any layout issues
    const timer = setTimeout(() => {
      setProjects([...allProjects]);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const categories = ['all', 'web', 'mobile'];

  return (
    <div className="projects" ref={projectsRef}>
      <section className="projects-hero">
        <div className="container">
          <h1>My Projects</h1>
          <p>Here are some of the projects I've worked on. Each project represents a unique challenge and solution.</p>
        </div>
      </section>

      <section className="projects-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="projects-list">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                          View Live
                        </a>
                        <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-category">{project.category.toUpperCase()}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <h3>No projects found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <section className="project-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>{projects.length}</h3>
              <p>Total Projects</p>
            </div>
            <div className="stat-item">
              <h3>{projects.filter(p => p.category === 'web').length}</h3>
              <p>Web Projects</p>
            </div>
            <div className="stat-item">
              <h3>{projects.filter(p => p.category === 'mobile').length}</h3>
              <p>Mobile Projects</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;