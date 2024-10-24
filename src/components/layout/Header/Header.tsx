import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MyLogo</h1> {/* Aquí puedes poner una imagen o texto */}
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header