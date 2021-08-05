import React, { useEffect, useState } from 'react'
import{ API_URL} from '../../constant'
import axios from "axios";
import PageHeader from "../../components/page-header";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";

const CareerDetailPage = () => {
    const router = useRouter()
  const {id} = router.query;


  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/jobs/${id}`,
      );
      setJobs(result.data);
      setLoading(false)
    };

    if(router.asPath !== router.route){
       fetchData();
    }
   
    
  }, [id,router]);

  console.log(jobs);
    return (
        <>
        <PageHeader title={loading ? 'loading': jobs.title} crumbTitle="Career" />
      
        <section className="event-details pt-120">
          <Container>
            <Row>
              <Col md={12} lg={6}>
                <h3>{loading ? 'loading': jobs.title}</h3>
                <p>
                {loading ? 'loading': <div dangerouslySetInnerHTML={{ __html: jobs.description }} />}
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="event-infos pt-20 pb-90">
          <Container>
            <Row>
              <Col md={12} lg={4} className="mb-30">
                <div className="event-infos__single background-secondary">
                  <h3>Location</h3>
                  <ul className="list-unstyled event-infos__list">
                    <li>{loading? 'loading': jobs.location }</li>
                  </ul>
                
                </div>
              </Col>
              
              <Col md={12} lg={4} className="mb-30">
                <div className="event-infos__single background-special">
                  <h3>Salary</h3>
                  <ul className="list-unstyled event-infos__list ">
                    <li>{loading? 'loading': jobs.salary }</li>
                  </ul>
                </div>
              </Col>

              <Col md={12} lg={4} className="mb-30">
                <div className="event-infos__single background-primary">
                  <h3>Type</h3>
                  <ul className="list-unstyled event-infos__list">
                    <li>{loading? 'loading': jobs.type }</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      
        </>
    )
}

export default CareerDetailPage
