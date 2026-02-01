import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

function Services() {
  const servicesRef = useScrollAnimation('.service-card');
  const processRef = useScrollAnimation('.process-step');

  const services = [
    {
      id: 1,
      title: 'Web Design',
      icon: '🎨',
      description: 'Beautiful, responsive websites designed to captivate your audience and drive engagement.',
      features: ['UI/UX Design', 'Responsive Layouts', 'Brand Identity', 'Prototyping']
    },
    {
      id: 2,
      title: 'Web Development',
      icon: '💻',
      description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization']
    },
    {
      id: 3,
      title: 'Mobile App Development',
      icon: '📱',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'App Store Optimization']
    },
    {
      id: 4,
      title: 'UI/UX Design',
      icon: '✨',
      description: 'User-centered design solutions that create intuitive and delightful digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      id: 5,
      title: 'Consulting',
      icon: '💡',
      description: 'Expert guidance and strategic advice to help you achieve your digital goals.',
      features: ['Technical Consulting', 'Project Planning', 'Code Review', 'Performance Audit']
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      icon: '🔧',
      description: 'Ongoing support and maintenance to keep your digital assets running smoothly.',
      features: ['Bug Fixes', 'Updates', 'Security Monitoring', 'Performance Tuning']
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery',
      description: 'We start by understanding your goals, target audience, and project requirements.'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'We create a detailed plan including timelines, milestones, and technical specifications.'
    },
    {
      step: '3',
      title: 'Design',
      description: 'Our designers create beautiful, functional designs that align with your brand.'
    },
    {
      step: '4',
      title: 'Development',
      description: 'We bring the designs to life with clean, efficient code and modern technologies.'
    },
    {
      step: '5',
      title: 'Testing',
      description: 'Rigorous testing ensures your project works flawlessly across all devices and browsers.'
    },
    {
      step: '6',
      title: 'Launch',
      description: 'We deploy your project and provide training and documentation for smooth handover.'
    }
  ];

  return (
    <div className="services" ref={servicesRef}>
      <section className="services-hero">
        <div className="container">
          <h1>Services</h1>
          <p>I offer a comprehensive range of digital services to help your business thrive in the online world.</p>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="services-list">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process" ref={processRef}>
        <div className="container">
          <h2>My Process</h2>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>95%</h3>
              <p>Client Retention Rate</p>
            </div>
            <div className="stat-item">
              <h3>48H</h3>
              <p>Avg. Response Time</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>On-time Delivery</p>
            </div>
            <div className="stat-item">
              <h3>5★</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your project and how I can help bring your vision to life.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get in Touch</a>
              <a href="/projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;