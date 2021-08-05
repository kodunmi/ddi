import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constant";
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import heartImage from "../../assets/images/shapes/heart-2-1.png";
import bgImage from "../../assets/images/team/team-map-1-1.png";





const TeamHome = () => {

  const [loading, setLoading] = useState(true);
  const [members, setmembers] = useState();
  const [show, setShow] = useState(false);
  const [member, setMember] = useState()

  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {member && member.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={6}>
              <Image width='100%' src={member && `${member.image}`} rounded />
            </Col>
            <Col xs={12} md={12} lg={6}>
             <p>{member && member.text}</p>
            </Col>
          </Row>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/members`,
      );
 
      setmembers(result.data);
      setLoading(false)
    };
 
    fetchData();
  }, []);

  console.log(members);
  return (
    <section
      className="team-about pt-120 pb-120"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={7}>
              <div className="block-title">
                <p>
                  <img src={heartImage} width="15" alt="" />
                  Our Board
                </p>
                <h3>
                  Meet our <br /> board members.
                </h3>
              </div>
            </Col>
            {/* <Col md={12} lg={5}>
              <p className="team-about__top-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Have you done google research which works all the
                time.{" "}
              </p>
            </Col> */}
          </Row>
        </div>
        <div className="team-4-col">
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
          {loading ? 'loading':members.map(
            ({ image,text, extraClassName, name, position, fb_link,linkedin_link,secure_url,twitter_link,youtube_link,type }, index) => (
              type == 'board' && 
              <div
                className={`team-card text-center ${extraClassName}`}
                key={`team-card-key-${index}`}
              >
                <div className="team-card__image" onClick={() =>{
                    setMember({name,position,image:secure_url,text})
                    setModalShow(true)
                   }}>
                  <img src={secure_url} alt="" />
                </div>
                <div className="team-card__social">
                  { fb_link &&
                    <a
                      href={fb_link}
                      aria-label="social link"
                    >
                      <i className='fab fa-facebook-square'></i>
                    </a>
                  }
                  { twitter_link &&
                    <a
                      href={twitter_link}
                      aria-label="social link"
                    >
                      <i className='fab fa-twitter'></i>
                    </a>
                  }
                  { youtube_link &&
                    <a
                      href={youtube_link}
                      aria-label="social link"
                    >
                      <i className='fab fa-youtube'></i>
                    </a>
                  }
                  { linkedin_link &&
                    <a
                      href={linkedin_link}
                      aria-label="social link"
                    >
                      <i className='fab fa-linkedin'></i>
                    </a>
                  }
                </div>
                <div className="team-card__content">
                  <h3>{name}</h3>
                  <p>{position}</p>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
      <Container className='mt-5'>
        <div className="team-about__top">
          <Row className=" align-items-center">
            <Col md={12} lg={7}>
              <div className="block-title">
                <p>
                  <img src={heartImage} width="15" alt="" />
                  Our Team
                </p>
                <h3>
                  Meet our <br /> team members.
                </h3>
              </div>
            </Col>
            {/* <Col md={12} lg={5}>
              <p className="team-about__top-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Have you done google research which works all the
                time.{" "}
              </p>
            </Col> */}
          </Row>
        </div>
        <div className="team-4-col">
        {loading ? 'loading':members.map(
            ({ image, extraClassName, name, position, fb_link,linkedin_link,secure_url,twitter_link,youtube_link,type }, index) => (
              type == 'team' && 
              <div
                className={`team-card text-center ${extraClassName}`}
                key={`team-card-key-${index}`}
              >
                <div className="team-card__image">
                  <img src={secure_url} alt="" />
                </div>
                <div className="team-card__social">
                  { fb_link &&
                    <a
                      href={fb_link}
                      aria-label="social link"
                    >
                      <i className='fab fa-facebook-square'></i>
                    </a>
                  }
                  { twitter_link &&
                    <a
                      href={twitter_link}
                      aria-label="social link"
                    >
                      <i className='fab fa-twitter'></i>
                    </a>
                  }
                  { youtube_link &&
                    <a
                      href={youtube_link}
                      aria-label="social link"
                    >
                      <i className='fab fa-youtube'></i>
                    </a>
                  }
                  { linkedin_link &&
                    <a
                      href={linkedin_link}
                      aria-label="social link"
                    >
                      <i className='fab fa-linkedin'></i>
                    </a>
                  }
                </div>
                <div className="team-card__content">
                  <h3>{name}</h3>
                  <p>{position}</p>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default TeamHome;
