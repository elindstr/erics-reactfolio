import { useState } from 'react';
import Modal from './Modal'

export default function Project({ project }){
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    
    return (
        <>
            <section className="flex-item" onClick={openModal}>

                <div className="figure" style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover' }}></div>

                <figcaption>{`${project.name}: ${project.tech}`}</figcaption>
            </section>

            <Modal project={project} isOpen={modalOpen} close={closeModal} />
        </>
    )
}
