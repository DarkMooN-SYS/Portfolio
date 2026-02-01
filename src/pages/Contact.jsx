import { useState, useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

function Contact() {
  const contactRef = useScrollAnimation('.contact-info-item');
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send this to your backend
      console.log('Form data:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      detail: 'hello@myportfolio.com',
      link: 'mailto:hello@myportfolio.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      detail: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco,+CA'
    },
    {
      icon: '⏰',
      title: 'Working Hours',
      detail: 'Mon - Fri: 9AM - 6PM',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com' }
  ];

  return (
    <div className="contact" ref={contactRef}>
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Have a project in mind? Let's collaborate and create something amazing together.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="grid-2">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out to me through any of the channels below. I'll get back to you as soon as possible!</p>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="info-link">
                          {info.detail}
                        </a>
                      ) : (
                        <p className="info-detail">{info.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Connect with me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send me a Message</h2>
              <p>I'd love to hear from you. Please fill out the form below and I'll get back to you soon.</p>

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Me Here</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <p>Map would be displayed here</p>
              <p>📍 San Francisco, CA</p>
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
              <a href="/projects" className="btn btn-primary">View My Work</a>
              <a href="mailto:hello@myportfolio.com" className="btn btn-secondary">Email Me</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;