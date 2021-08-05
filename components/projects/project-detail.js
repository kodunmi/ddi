import React,{useState, useEffect} from 'react'
import GalleryCard from '../../components/gallery/gallery-card';
import axios from 'axios';
import{ API_URL} from '../../constant'
import PageHeader from "../../components/page-header";
import { useRouter } from 'next/router'
import { Col, Container, Row } from 'react-bootstrap';
import img from '../..//assets/images/new/14.jpg';

const ProjectDetail = () => {
    const router = useRouter()
    const {id} = router.query;
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            `${API_URL}/projects/${id}`,
        );
    
        setProject(result.data);
        setLoading(false)
        };
    
        fetchData();
    }, [id]);

    return (
    <> 
    <PageHeader bg={loading ? 'loading' : project.images ? project.images[0].secure_url: img } title={loading? 'loading' :project.name} crumbTitle='project' />
    {
        loading ? 'loading' : 
        <div>
             <section className="event-details pt-120">
            <Container>
              <Row>
                <Col md={12} lg={6}>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </Col>
                <Col md={12} lg={6}>
                  <img src={project.images && project.images[0].secure_url} alt="" className="img-fluid" />
                </Col>
              </Row>
            </Container>
          </section>
          <section className='pb-100'>
              <Container>
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
              </Container>
          </section>
          <div className="event-infos pt-20 pb-90">
            <Container>
              <Row>
                <Col md={12} lg={6} className="mb-30">
                  <div className="event-infos__single background-secondary">
                    <h3>Venue</h3>
                    <p>
                      {project.venue}
                    </p>
                  </div>
                </Col>
                <Col md={12} lg={6} className="mb-30">
                  <div className="event-infos__single background-special">
                    <h3>Sponsor</h3>
                    <p>
                      {project.sponsor}
                    </p>
                    
                  </div>
                </Col>
              </Row>
              <Row>
                  {
                      project.images && 
                      project.images.map(({secure_url}, idx)=>{
                        return(
                            <Col key={idx} className='mb-5' lg={3} md={4} sm={6} xs={12}><GalleryCard  image={secure_url} /></Col>
                            // <ProjectCard/>
                            
                        )
                    })
                  }
              </Row>
            </Container>
          </div>
        </div>

    }
    </>
    )
}

export default ProjectDetail
