import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import usePerformanceOptimization from '../hooks/usePerformanceOptimization'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { throttleScroll } = usePerformanceOptimization()

  useEffect(() => {
    const handleScroll = throttleScroll(() => {
      setIsScrolled(window.scrollY > 50)
    }, 16)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [throttleScroll])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <span className="logo-icon">🚀</span>
          <span>MyPortfolio</span>
        </Link>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
          <li><Link to="/certificates" onClick={handleLinkClick}>Certificates</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
