import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Timeline from './components/sections/Timeline'
import Projects from './components/sections/Projects'
import LifeFlowchart from './components/sections/LifeFlowchart'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <LifeFlowchart />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
