import React,{useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "../../constant";
import Link from "next/link";
import PageHeader from "../page-header";

const CauseContent = () => {

  let router = useRouter()
  const {id} = router.query;

  const [loading, setLoading] = useState(true);
  const [loadingLatest, setLoadingLatest] = useState(true);

  const [story, setStory] = useState();
  const [latest, setLatest] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/stories/${id}`,
      );
 
      setStory(result.data);
      setLoading(false)
    };
    if(router.asPath !== router.route){
      fetchData();
   }
  }, [id, router]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/latest-stories/`,
      );
 
      setLatest(result.data);
      setLoadingLatest(false)
    };
    
      fetchData();
   
  }, []);

  console.log(latest);
  return (
    <>
    <PageHeader bg='https://picsum.photos/200/300?grayscale' title={loading ? 'loading' : story.title} crumbTitle="Success Story" />
    <section className="cause-details blog-details  pt-120 pb-40">
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <div className="cause-details__content mb-5">
              <div className="cause-card">
                <div className="cause-card__inner">
                  <div className="cause-card__image mb-5">
                    <img src={loading ? 'loading' : story.secure_url} alt="" />
                  </div>
                </div>
              </div>
              <h3>{loading ? 'loading' : story.title}</h3>
              
              <div className="cause-card__bottom">
                <a href="#" className="cause-card__share">
                  <i className="azino-icon-share"></i>
                </a>
              </div>
              {
                loading ? 'loading' : <div dangerouslySetInnerHTML={{ __html: story.description }} />
              }
              
            </div>
            
            
           
            <div className="result"></div>
          </Col>
          <Col md={12} lg={4}>
            <div className="cause-details__sidebar">
              <div className="cause-details__donations">
                <h4 className="cause-details__donations-title">Latest Stories</h4>
                <ul className="list-unstyled cause-details__donations-list">
                {
                    loadingLatest ? 'loading' : latest.map(({id, secure_url, title})=>
                    <li>
                    <img height="61px" width="61px" src={secure_url} alt="" />
                    <h3>
                      {title}
                    </h3>
                    <Link href={`/success-story/${id}`}>
                      <span className='cuser-pointer'>view story</span>
                    </Link>
                    
                  </li>
                    )
                  }
                  {/* <li>
                    <img src={donor1} alt="" />
                    <h3>
                      David Marks 
                    </h3>
                    <span>God bless you dear</span>
                  </li> */}
                  
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default CauseContent;
