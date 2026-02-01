import { Link } from 'react-router-dom';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Home.css';

function Home() {
  const featuredProjectsRef = useScrollAnimation('.project-card');
  const skillsRef = useScrollAnimation('.skill');
  const testimonialsRef = useScrollAnimation('.testimonial-card');

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      text: "Exceptional work! The portfolio website exceeded our expectations. Professional, clean, and highly functional.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      text: "Great attention to detail and excellent communication throughout the project. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Designer at Creative Co",
      text: "Amazing developer to work with. Transformed our vision into reality with stunning results.",
      rating: 5
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and checkout flow.",
      link: "/projects",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      link: "/projects",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing business metrics with real-time charts, graphs, and customizable widgets.",
      link: "/projects",
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <AnimatedGradientBackground />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to My Portfolio</h1>
            <p className="hero-subtitle">I'm a creative developer & designer creating digital experiences</p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects" ref={featuredProjectsRef}>
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={project.link} className="btn-link">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" ref={skillsRef}>
        <div className="container">
          <h2>Technologies & Tools</h2>
          <div className="skills-grid">
            <div className="skill">
              <div className="skill-icon">💻</div>
              <h3>Web Development</h3>
              <div className="tech-list">
                <span className="tech-item">HTML5</span>
                <span className="tech-item">CSS3</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">React</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Express</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-icon">🐍</div>
              <h3>Programming</h3>
              <div className="tech-list">
                <span className="tech-item">Python</span>
                <span className="tech-item">Data Structures</span>
                <span className="tech-item">Algorithms</span>
                <span className="tech-item">OOP</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-icon">📊</div>
              <h3>Data Science</h3>
              <div className="tech-list">
                <span className="tech-item">Pandas</span>
                <span className="tech-item">NumPy</span>
                <span className="tech-item">Matplotlib</span>
                <span className="tech-item">Machine Learning</span>
                <span className="tech-item">TensorFlow</span>
                <span className="tech-item">Neural Networks</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-icon">☁️</div>
              <h3>Cloud & DevOps</h3>
              <div className="tech-list">
                <span className="tech-item">AWS</span>
                <span className="tech-item">GCP</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">Kubernetes</span>
                <span className="tech-item">CI/CD</span>
                <span className="tech-item">Jenkins</span>
                <span className="tech-item">Git</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-icon">🗄️</div>
              <h3>Database</h3>
              <div className="tech-list">
                <span className="tech-item">SQL</span>
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Query Optimization</span>
                <span className="tech-item">Indexing</span>
              </div>
            </div>
            <div className="skill">
              <div className="skill-icon">🔒</div>
              <h3>Security & Performance</h3>
              <div className="tech-list">
                <span className="tech-item">Security</span>
                <span className="tech-item">Encryption</span>
                <span className="tech-item">Performance</span>
                <span className="tech-item">Caching</span>
                <span className="tech-item">Lazy Loading</span>
                <span className="tech-item">SEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" ref={testimonialsRef}>
        <div className="container">
          <h2>Client Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="stars">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
