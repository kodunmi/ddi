import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GalleryCard from '../gallery/gallery-card'
import PostPaginations from '../post-paginations'
import ProjectCard from './project-card'

const ProjectsCard = ({projects}) => {
// console.log(projects);
    return (
        <>
            <Row>
                {
                   projects.length < 1 ? <h3 className='text-center'>No Projects under this service yet</h3> : projects.map((proj, idx)=>{
                        return(
                            // <Col key={idx} className='mb-5' lg={4} md={6} sm={6} xs={12}><GalleryCard text={proj.name} image={proj.images[0].secure_url} url={`project/${proj.id}`}/></Col>
                            <ProjectCard image={proj.images[0].secure_url} title={proj.name} preview={proj.summary} id={proj.id} />
                        )
                    })
                }
            </Row>
        </>
    )
}

export default ProjectsCard
