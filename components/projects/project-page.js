import React, { useEffect, useState } from 'react'
import PageHeader from "../../components/page-header";
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap';
import ProjectsCard from '../../components/projects/projects-content';
import { API_URL } from '../../constant'
import axios from 'axios';

const ProjectPage = () => {
    const [projects, setProjects] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `${API_URL}/projects`,
          );
     
          setProjects(result.data);
        };
     
        fetchData();
      }, []);
    
    const router = useRouter()
    const {cat} = router.query;

    return (
        <>
            <PageHeader bg='https://picsum.photos/200/300?grayscale' title={ cat ? cat[0] : 'Projects'} crumbTitle={ cat ? cat[0] : 'Projects'} />
            <Container className='mt-5 mb-5'>
                <h1 className='mb-3'>{ cat &&cat[0]}</h1>

                <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta impedit recusandae aspernatur dignissimos sapiente fuga cumque ipsum culpa ullam ex nesciunt possimus nisi similique, facere adipisci veniam, voluptate corrupti. Magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis eaque sapiente inventore consequuntur animi ut dolorum, beatae delectus quidem officia nostrum eos, deleniti modi quas, iusto officiis tempore. Cum, facere.</p>
                <h1 className='mb-5'>Projects</h1>
                {
                    projects && <ProjectsCard projects={projects.data} />
                }
                
                
            </Container>
        </>
    )
}

export default ProjectPage
