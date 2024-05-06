import projects from './projectData'
import Project from '../components/Project'

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="projects">
                <Project project={projects[0]} />
                <Project project={projects[1]} />
                <Project project={projects[2]} />
                <Project project={projects[3]} />
                <Project project={projects[4]} />
                <Project project={projects[5]} />
                
            </div>
        </div>
    )
}

    