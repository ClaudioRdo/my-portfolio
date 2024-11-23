import { useState } from "react"
import { Sidebar, Layout } from "./components/layout/index"
import { Home, About, Skills, Projects, Contact } from "./pages/index"
import { SectionName } from "./components/layout/index"
import useActiveSection from "./hooks/useActiveSection"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const activeSection = useActiveSection(0.6);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('dark-mode', !isDarkMode)
  }


  return (
    <>
      <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <SectionName sections={[activeSection]} activeSection={activeSection} />
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
