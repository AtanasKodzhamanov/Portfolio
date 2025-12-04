import ProjectMini from './MiniProjectGrid/ProjectMini'
import projectsData from '@/data/projectData'

const MiniProjects = () => {
  const projectsOrder = {
    'Bilingual Crosswords': 0,
    'Know Thy Art': 3,
    'Walks Of Life': 1,
    'Planetary Defence': 2,
    Babylon: 6,
    EOA: 5,
    DonaDogs: 7,
    'Construct-M': 8,
    'Itesica Notes': 9,
  }

  const sortedProjectsData = [...projectsData].sort(
    (a, b) => projectsOrder[a.projectName] - projectsOrder[b.projectName]
  )

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-4 justify-items-space-between align-items-center mt-16">
        {sortedProjectsData.map((project) => (
          <div key={project.projectName}>
            <ProjectMini project={project} targetId={project.projectName} />
          </div>
        ))}
      </div>
      <div className="flex gap-4 w-full">
        <div className="bubble w-full">
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
            href="https://store.steampowered.com/app/3220820/Bilingual_Crosswords/"
          >
            Download <strong>Bilingual Crosswords</strong> demo
          </a>
        </div>
        <div className="bubble w-full">
          <a
            target="_blank"
            className="hover:underline"
            rel="noreferrer"
            href="https://store.steampowered.com/app/2797630/Walks_Of_Life/"
          >
            Wishlist <strong>Walks of Life</strong>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MiniProjects
