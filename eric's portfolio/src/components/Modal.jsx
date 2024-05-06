import './Modal.css'
import githubIcon from '../assets/media/github-mark.png'; 

export default function Modal({ isOpen, close, project }) {
    if (!isOpen) return null;
    const paragraphs = project.description.split(/[\r\n]+/);

    return (
        <div className="modal-overlay" onClick={close}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={project.img} alt='App Screenshot' className="project-image" />

                <div className="text-content">
                    <div>
                        <a href={project.deployedLink} className="project-title" target="_blank" rel="noopener noreferrer">
                                {project.name}
                        </a>

                        <span className='project-tech'>: {project.tech} </span>

                        <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub Link" className="github-icon" />
                        </a>
                    </div>

                    {paragraphs.map((paragraph, index) => (
                        <p className="project-description" key={index}>{paragraph}</p>
                    ))}
                    
                </div>
                <button onClick={close}>X</button>
            </div>
        </div>
    );
}
