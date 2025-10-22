import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Navigation */}
        <nav className="nav-left">
          <a href="/" className="nav-link">
            <img src="/Vecto1r.svg" alt="Home" className="home-icon" />
          </a>
          <a href="/services" className="nav-link">
            Services
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
        </nav>

        {/* Center Logo */}
        <a href="/" className="logo">
          <img src="/Logo.svg" alt="VAUM" className="logo-img" />
        </a>

        {/* Right Navigation */}
        <nav className="nav-right">
          <a href="/projects" className="nav-link">
            Projects
          </a>
          <a href="/blogs" className="nav-link">
            Blogs
          </a>
          <a href="/testimonials" className="nav-link">
            Testimonials
          </a>
        </nav>

        {/* Contact Button */}
        <div className="header-actions">
          <a href="/contact" className="contact-btn">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
