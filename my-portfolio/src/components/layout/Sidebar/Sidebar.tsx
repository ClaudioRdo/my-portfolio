import React from "react"
import "./Sidebar.css"
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa"

interface SidebarProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="sidebar">
      <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <button className="toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  )
}

export default Sidebar