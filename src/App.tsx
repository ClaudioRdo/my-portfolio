import { useState } from 'react';
import Layout from './components/layout/Layout/Layout'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Sidebar from './components/layout/Sidebar/Sidebar'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <>
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Layout>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default App
