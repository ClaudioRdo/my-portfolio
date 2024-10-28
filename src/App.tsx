import Layout from './components/layout/Layout/Layout'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
