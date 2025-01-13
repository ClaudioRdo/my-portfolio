import React, { useState, useEffect } from "react"
import "./Header.css"
import { Link } from "react-scroll"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll) // Limpia el evento al desmontar
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>MyLogo</h1>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="home" onClick={toggleMenu} smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" onClick={toggleMenu} smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="skills" onClick={toggleMenu} smooth={true} duration={500}>Skills</Link>
          </li>
          <li>
            <Link to="projects" onClick={toggleMenu} smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="contact" onClick={toggleMenu} smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header