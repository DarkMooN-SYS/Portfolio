import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

function About() {
  const aboutRef = useScrollAnimation('.about-content');
  const skillsRef = useScrollAnimation('.skill-item');
  const statsRef = useScrollAnimation('.stat-item');

  const skills = [
    { name: 'Web Design', level: 90, icon: '🎨' },
    { name: 'Web Development', level: 85, icon: '💻' },
    { name: 'UI/UX Design', level: 80, icon: '📱' },
    { name: 'Problem Solving', level: 95, icon: '💡' },
    { name: 'Communication', level: 88, icon: '💬' },
    { name: 'Teamwork', level: 92, icon: '👥' }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '100+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Awards Won', value: '10+' }
  ];

  return (
    <div className="about" ref={aboutRef}>
      <section className="about-hero">
        <div className="container">
          <div className="grid-2">
            <div className="about-image">
              <div className="profile-circle">
                <div className="profile-image"></div>
              </div>
            </div>
            <div className="about-content">
              <h1>About Me</h1>
              <h2>Creative Developer & Designer</h2>
              <p>
                Hello! I'm a passionate creative developer and designer with a love for crafting beautiful, 
                functional digital experiences. With over 5 years of experience in the industry, I specialize 
                in creating websites and applications that not only look great but also provide exceptional 
                user experiences.
              </p>
              <p>
                I believe that great design is about solving problems creatively while maintaining a focus 
                on user needs. My approach combines technical expertise with artistic vision to deliver 
                solutions that are both beautiful and effective.
              </p>
              <div className="about-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" ref={skillsRef}>
        <div className="container">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <div className="grid-2">
            <div className="philosophy-content">
              <h2>My Design Philosophy</h2>
              <p>
                I believe that design should be both beautiful and functional. Every project I work on 
                starts with understanding the user's needs and the business goals. From there, I create 
                solutions that are intuitive, accessible, and visually stunning.
              </p>
              <p>
                My process involves research, sketching, prototyping, and testing to ensure that the final 
                product not only meets but exceeds expectations. I'm always learning and staying up-to-date 
                with the latest trends and technologies in the industry.
              </p>
              <div className="philosophy-quotes">
                <blockquote>
                  "Design is not just what it looks like and feels like. Design is how it works."
                  <cite>- Steve Jobs</cite>
                </blockquote>
              </div>
            </div>
            <div className="philosophy-image">
              <div className="design-elements">
                <div className="element element-1"></div>
                <div className="element element-2"></div>
                <div className="element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;