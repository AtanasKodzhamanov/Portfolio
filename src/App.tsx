import SideHeader from './sections/MobileHeader/SideHeader'
import About from './sections/About/About'
import Projects from './sections/Project/Projects'
import Education from './sections/Education/Education'
import Experience from './sections/Experience/Experience'
import './global.css'
import MiniProjects from '@/sections/MiniProjects/MiniProjects'

const App = () => {
  return (
    <div className="relative flex flex-col items-center m-10 border-4 border-primary-color shadow-[0_0_500px_var(--secondary-color)]">
      <div className="max-w-[1400px] flex flex-col p-8 gap-10">
        <SideHeader />
        <section id="about">
          <About />
        </section>
        <section>
          <MiniProjects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </div>
  )
}

export default App
