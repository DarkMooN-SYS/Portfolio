import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'
import './Certificates.css'

function Certificates() {
  const ref = useScrollAnimation('h1, p, h2, h3, .certificate-card, .stat-item, .summary-stat')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "3c663eac630066c6474c4cabb30bd618",
      category: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      description: "Comprehensive full stack web development specialization",
      link: "https://coursera.org/share/3c663eac630066c6474c4cabb30bd618"
    },
    {
      id: 2,
      title: "Python Programming Fundamentals",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "030e28e6cadeff8e48d66c0347ab60f3",
      category: "Programming",
      skills: ["Python", "Data Structures", "Algorithms", "OOP"],
      description: "Master Python programming from basics to advanced concepts",
      link: "https://coursera.org/share/030e28e6cadeff8e48d66c0347ab60f3"
    },
    {
      id: 3,
      title: "Data Science Essentials",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "0a69e9be2f24f26e86fa699a38842a30",
      category: "Data Science",
      skills: ["Pandas", "NumPy", "Matplotlib", "Statistical Analysis"],
      description: "Learn data analysis, visualization, and statistical methods",
      link: "https://coursera.org/share/0a69e9be2f24f26e86fa699a38842a30"
    },
    {
      id: 4,
      title: "Google Cloud Fundamentals",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "031786b5febfa4269f3d7432c7687945",
      category: "Cloud",
      skills: ["GCP", "Cloud Computing", "Infrastructure", "Databases"],
      description: "Get started with Google Cloud Platform and cloud infrastructure",
      link: "https://coursera.org/share/031786b5febfa4269f3d7432c7687945"
    },
    {
      id: 5,
      title: "Backend Development with Node.js",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "0918e862d7ed2f646dfe60a80c0de188",
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "Database Design"],
      description: "Build scalable backend applications with Node.js and Express",
      link: "https://coursera.org/share/0918e862d7ed2f646dfe60a80c0de188"
    },
    {
      id: 6,
      title: "React Advanced Patterns",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "bd7a347d4107c7c1c8e448147379dec8",
      category: "Frontend",
      skills: ["React", "Hooks", "State Management", "Performance"],
      description: "Master advanced React patterns and optimization techniques",
      link: "https://coursera.org/share/bd7a347d4107c7c1c8e448147379dec8"
    },
    {
      id: 7,
      title: "DevOps and CI/CD Pipelines",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "4366411cdcf5fc0e30a0a3035bccaefa",
      category: "DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "Git"],
      description: "Implement DevOps practices and continuous deployment pipelines",
      link: "https://coursera.org/share/4366411cdcf5fc0e30a0a3035bccaefa"
    },
    {
      id: 8,
      title: "SQL and Database Management",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "5d643d63e7ea9cbdfd671a06b8a825d0",
      category: "Database",
      skills: ["SQL", "PostgreSQL", "Query Optimization", "Indexing"],
      description: "Design and manage relational databases with SQL",
      link: "https://coursera.org/share/5d643d63e7ea9cbdfd671a06b8a825d0"
    },
    {
      id: 9,
      title: "MERN Stack Specialization",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "098f0a61319cae8f9903adbdf09617b7",
      category: "Web Development",
      skills: ["MongoDB", "Express", "React", "Node.js", "Full Stack"],
      description: "Build complete web applications using the MERN stack",
      link: "https://coursera.org/share/098f0a61319cae8f9903adbdf09617b7"
    },
    {
      id: 10,
      title: "Agile and Scrum Certification",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "994fc1763c9137a9dc22bc5b226471b0",
      category: "Agile",
      skills: ["Agile", "Scrum", "Sprint Planning", "Team Collaboration"],
      description: "Master Agile methodologies and Scrum framework",
      link: "https://coursera.org/share/994fc1763c9137a9dc22bc5b226471b0"
    },
    {
      id: 11,
      title: "Cybersecurity Fundamentals",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "6c63e6717bc0cc693bdf681c0b95dafd",
      category: "Security",
      skills: ["Security", "Encryption", "Threat Detection", "Best Practices"],
      description: "Learn cybersecurity fundamentals and secure coding practices",
      link: "https://coursera.org/share/6c63e6717bc0cc693bdf681c0b95dafd"
    },
    {
      id: 12,
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "718893593d8564deed4dcafa11cba858",
      category: "Data Science",
      skills: ["Machine Learning", "TensorFlow", "Neural Networks", "AI"],
      description: "Build and deploy machine learning models for real-world applications",
      link: "https://coursera.org/share/718893593d8564deed4dcafa11cba858"
    },
    {
      id: 13,
      title: "AWS Solutions Architect",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "7fe6c9fbd976d235558d807fda679c8c",
      category: "Cloud",
      skills: ["AWS", "EC2", "S3", "Lambda", "Architecture"],
      description: "Design and deploy scalable applications on AWS",
      link: "https://coursera.org/share/7fe6c9fbd976d235558d807fda679c8c"
    },
    {
      id: 14,
      title: "Advanced JavaScript ES6+",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "3c3819e9bbc09027f981ce6537083a1f",
      category: "Programming",
      skills: ["JavaScript ES6", "Async/Await", "Promises", "Modern JavaScript"],
      description: "Master modern JavaScript and ES6+ features",
      link: "https://coursera.org/share/3c3819e9bbc09027f981ce6537083a1f"
    },
    {
      id: 15,
      title: "Vue.js and Frontend Frameworks",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "34fbc6153f1a2028bdcabbf62b1504c9",
      category: "Frontend",
      skills: ["Vue.js", "Component Architecture", "State Management", "SSR"],
      description: "Build modern frontend applications with Vue.js framework",
      link: "https://coursera.org/share/34fbc6153f1a2028bdcabbf62b1504c9"
    },
    {
      id: 16,
      title: "Web Performance Optimization",
      issuer: "Coursera",
      date: "January 2025",
      credentialId: "df777f5702e6a494d9364e19df8182cf",
      category: "Web Development",
      skills: ["Performance", "Caching", "Lazy Loading", "Bundling", "SEO"],
      description: "Optimize web applications for speed and performance",
      link: "https://coursera.org/share/df777f5702e6a494d9364e19df8182cf"
    }
  ]

  const categories = [
    { name: "All", count: 16 },
    { name: "Web Development", count: 3 },
    { name: "Programming", count: 2 },
    { name: "Data Science", count: 2 },
    { name: "Cloud", count: 2 },
    { name: "Frontend", count: 2 },
    { name: "Backend", count: 1 },
    { name: "Database", count: 1 },
    { name: "DevOps", count: 1 },
    { name: "Agile", count: 1 },
    { name: "Security", count: 1 }
  ]

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory)

  return (
    <div className="certificates" ref={ref}>
      <section className="certificates-hero">
        <div className="container">
          <h1>Certifications & Credentials</h1>
          <p>16 Professional Certifications from Coursera</p>
          <div className="cert-stats">
            <div className="stat-item">
              <h3>16</h3>
              <p>Certifications</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Skills</p>
            </div>
            <div className="stat-item">
              <h3>10</h3>
              <p>Categories</p>
            </div>
          </div>
        </div>
      </section>

      <section className="certificates-content">
        <div className="container">
          <div className="certificates-filter">
            <h2>Filter by Category</h2>
            <div className="filter-buttons">
              {categories.map(cat => (
                <button 
                  key={cat.name} 
                  className={`filter-btn ${selectedCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name} <span>({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="certificates-grid">
            {filteredCertificates.map((cert, index) => (
              <div key={cert.id} className="certificate-card" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="cert-header">
                  <div className="cert-badge">{cert.category}</div>
                  <div className="cert-date">{cert.date}</div>
                </div>
                
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">Issued by {cert.issuer}</p>
                  <p className="cert-description">{cert.description}</p>
                </div>

                <div className="cert-skills">
                  <div className="skills-list">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="cert-footer">
                  <span className="cert-id">ID: {cert.credentialId}</span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate →</a>
                </div>
              </div>
            ))}
          </div>

          <div className="certificates-summary">
            <h2>Continuous Learning</h2>
            <p>I'm committed to staying up-to-date with the latest technologies and best practices in web development. My certifications demonstrate my expertise across the full technology stack, from frontend frameworks to cloud infrastructure.</p>
            <div className="summary-stats">
              <div className="summary-stat">
                <h4>Cloud Expertise</h4>
                <p>AWS & GCP Certified</p>
              </div>
              <div className="summary-stat">
                <h4>Full Stack Skills</h4>
                <p>Frontend, Backend & DevOps</p>
              </div>
              <div className="summary-stat">
                <h4>Leadership</h4>
                <p>PSM I Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certificates
