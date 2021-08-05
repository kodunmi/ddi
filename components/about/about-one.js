import React from "react";
import { Container, Row, Col, Card,Image } from "react-bootstrap";
import about2 from "../../assets/images/resources/vision3.jpg";
import about3 from "../../assets/images/resources/mission.jpeg";
import exp from "../../assets/images/new/1.jpg";
import exp2 from "../../assets/images/new/19.jpg";
import bg from "../../assets/images/new/12b.jpg";
import bg2 from "../../assets/images/new/20.jpg";
import BrandCarousel from "../../components/brand-carousel";

const AboutOne = () => {
  return (
    <section className="about-one pt-120 pb-40" style={{backgroundColor:'#f1f1f1'}}>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={12}>
              <h3 className='text-center mb-5'>Who We Are</h3>
              <p className="team-about__top-text">
                Diamond Development Initiatives (DDI) is a Nigerian-registered not-for-profit organization that complements the role of development agencies, donors, and other funding organizations by providing technical assistance in the design, planning and implementation of various development initiatives. Established in 2002, DDI harnesses a multi-sectoral ecosystem of government, business and social services, layering development, growth and strengthening of small and medium-scale grassroots businesses and start-ups – particularly in agriculture, agro-based businesses, off-grid energy solutions, youth-led entrepreneurship development, and economic empowerment – by providing sustainable technical support in the planning, implementation, financial and programmatic management.
              </p>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col md={12} lg={12}>
              <h3 className='text-center mb-5 text-dark'>Vision And Mission</h3>
            </Col>
            <Col md={12} lg={12}>
            <Row>
              <Col lg={6}>
                <img src={about2} alt="" className="img-fluid" />
                <h3 className='mt-5'>Vision</h3>
                <p className='text-dark'>Accountability, transparency, dedication & commitment; honesty & integrity; empathy for the poor; humility, and professionalism.</p>
              </Col>
              <Col lg={6}>
                <img src={about3} alt="" className="img-fluid" />
                <h3 className='mt-5'>Mission</h3>
                <p className='text-dark'>To build a society that provides equitable opportunity for self-actualization through economic empowerment and sustainable livelihood initiatives. </p>
              </Col>
            </Row>
            </Col>
            
          </Row>

          <Row className='mt-5'>
            
            <section className="call-to-action-two">
            <div
              className="call-to-action-two__bg"
              style={{ backgroundImage: `url(${bg2})` }}
            ></div>
            <Container className="container pt-80 pb-80">
              <i className="azino-icon-charity call-to-action-two__icon"></i>
              <Row className=" align-items-center">
                <Col lg={12}>
                  <div className="block-title">
                  <p>
                   
                    Our Operational Philosophy
                  </p>
                    <h3>
                    DDI is committed to the ideals of participatory and bottom-top development, ensuring that benefitting parties are actively involved throughout the process.
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
    </section>


          </Row>
          <Row className='mt-5'>
            <Col md={12} lg={12}>
              <h3 className='text-center mb-5'>Our Cure Value</h3>
            </Col>
            <Container>
            <Row>
              <Col className='mb-4' lg={3} md={4} sm={6} xs={12} >
              <Card style={{borderRadius:'20px'}} border='light' >
              <Card.Body style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                  <div style={{backgroundColor:'green', borderRadius:'50%', padding: '30px', width:'100px', height:'100px', display:'flex',justifyContent:'center',alignItems:'center', textAlign:'center'}}>
                    <i style={{fontSize:'30px', color:'white'}} class="fa fa-calendar" aria-hidden="true"></i> 
                  </div>
                </Card.Body>
                <Card.Body>
                  <Card.Title>first feature</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col className='mb-4' lg={3} md={4}  sm={6} xs={12}>
              <Card style={{borderRadius:'20px'}} border='light'>
            
                <Card.Body style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                  <div style={{backgroundColor:'var(--thm-special)', borderRadius:'50%', padding: '30px', width:'100px', height:'100px', display:'flex',justifyContent:'center',alignItems:'center', textAlign:'center'}}>
                    <i style={{fontSize:'30px', color:'white'}} class="fa fa-calendar" aria-hidden="true"></i> 
                  </div>
                </Card.Body>
               
                <Card.Body>
                  <Card.Title>first feature</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col className='mb-4' lg={3} md={4}  sm={6} xs={12}>
              <Card style={{borderRadius:'20px'}} border='light'>
                <Card.Body style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                  <div style={{backgroundColor:'var(--thm-primary)', borderRadius:'50%', padding: '30px', width:'100px', height:'100px', display:'flex',justifyContent:'center',alignItems:'center', textAlign:'center'}}>
                    <i style={{fontSize:'30px', color:'white'}} class="fa fa-calendar" aria-hidden="true"></i> 
                  </div>
                </Card.Body>  
                <Card.Body>
                  <Card.Title>first feature</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col lg={3} md={4} sm={6} xs={12}>
              <Card style={{borderRadius:'20px'}} border='light'>
                <Card.Body style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                  <div style={{backgroundColor:'var(--thm-secondary)', borderRadius:'50%', padding: '30px', width:'100px', height:'100px', display:'flex',justifyContent:'center',alignItems:'center', textAlign:'center'}}>
                    <i style={{fontSize:'30px', color:'white'}} class="fa fa-calendar" aria-hidden="true"></i> 
                  </div>
                </Card.Body>
                <Card.Body>
                  <Card.Title>first feature</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
            </Container>
            
          </Row>
          <Row className='mt-5'>
            <Col md={12} lg={12}>
              <h3 className='text-center mb-5'>Our Experience</h3>
            </Col>
            <Col md={12}>
            <p>With deep experience in operating in complex socio-political environments in Nigeria, DDI has since 2002 strategically applied lessons learned across several projects that involved quick resource mobilization, and a seamless adaptation to change. With the application of both recent innovations and proven global best practices, DDI combines a broad local experience, technical depth, and unmatched management and programmatic skills in delivering on its core focus areas. </p>
            </Col>
            <Row>
              <Col md={12} lg={6} sm={12}>
                <ul  className="list-unstyled ul-list-one">
                  <li className='mb-5'>Over 300 CBOs (such as cooperatives or producer groups), SMEs, youth- and women-led entreprises/start-ups have benefitted from DDI technical and managerial support and mentorship. They were supported to accelerate the use of proven, evidence-based technologies and strategies to improve standard of living, increase earning capacity and profit and enhance health outcomes of community members.</li>
                  <li  className='mb-5'>Over 40 off-grid energy enterprises have been supported and scaled-up to accelerate the use of proven off-grid energy technologies to reach both unserved and underserved communities across Nigeria.</li>
                  <li  className='mb-5'>Thousands of smallholder farmers and livestock herders have been supported to access a range of services including agricultural extension services, agro-inputs and marketing skills training, vocational training, Best Agronomy Practice (BAP) and Skills for Marketing and Rural Transformation (SMART) training, and input support – to improve yield and income,</li>
                </ul>
              </Col>
              <Col md={12} lg={6} sm={12}>
                <Image className='mb-5' src={exp} fluid />
                <Image src={exp2} fluid />
              </Col>
            </Row>
          </Row>
          <Row className='mt-5 p-5' style={{backgroundImage:`url(${bg})`, color:'white',backgroundRepeat:'no-repeat'}}>
            <Col md={12} lg={12}>
              <h3 className='text-center text-white mb-5'>Our Funders And Partners</h3>
            </Col>
            <Col md={12}>
              <p className='color-black'>Through robust financial management, programme delivery systems and Monitoring and Evaluation, DDI has managed a portfolio of grants from strategic partnerships with the U.S. African Development Foundation (USADF), United States Agency for International Development (USAID), Catholic Relief Services (CRS), German Ministry for Foreign Cooperation, Alliance for Green Revolution in Africa (AGRA), All On (an impact investor seeded by Shell Nigeria), Chemonics, Justice for All (J4A), the World Bank, Federal Government of Nigeria, and Foundation for Partnership Initiatives in the Niger Delta (PIND).</p>
            </Col>
            <Col style={{ backgroundColor:'white' }}>
              <BrandCarousel extraClass="client-carousel__has-top-shadow" />
            </Col>
            

          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutOne;
