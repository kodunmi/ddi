import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../assets/images/shapes/heart-2-1.png";
import faqImage from "../assets/images/new/11.jpg";
import heart1 from "../assets/images/shapes/about-count-heart-1-1.png";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import Footer from "../components/footer";

const BecomeAPartner = () => {
  return (
    <Layout pageTitle="become A Partner">
        <HeaderTwo />
         <StickyHeader extraClassName="stricky-header-two" />
        <section className="become-volunteer pt-120 mt-80 pb-80">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="become-volunteer__content mb-40">
              <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  Partner With Us Now
                </p>
                <h3>
                  Register to become a <br />partner with us 
                </h3>
              </div>
              <p className="block-text mb-40 pr-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Have you done google research which works all the
                time.{" "}
              </p>
              <ul className="list-unstyled ul-list-one">
                <li>Nsectetur cing elit.</li>
                <li>Suspe ndisse suscipit sagittis leo.</li>
                <li>Entum estibulum dignissim posuere.</li>
              </ul>
              <h3 className='mt-5'>Contact ddi@ddinigeria.com</h3>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-counter__image clearfix">
              <div className="about-counter__image-content">
                <img src={heart1} alt="" />
                <p>We’re here to support you every step of the way.</p>
              </div>
              <img src={faqImage} alt="" className="float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
     <Footer/>
    </Layout>
   
  );
};

export default BecomeAPartner;
