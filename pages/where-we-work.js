import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import bgImage from "../assets/images/shapes/event-map-1-2.png";
import heart from "../assets/images/shapes/heart-2-1.png";
import map from "../assets/images/Where-we-work-Map.jpg";
import One from "../assets/images/new/5.jpg"
import Footer from '../components/footer';

const WhereWeWork = () => {
    return (
        <Layout pageTitle="Where we work">
          <PageHeader  bg={One} title="Where We Work" crumbTitle="Where We Work" />
          <HeaderOne />
          <StickyHeader />
          <section
            className="event-home-two pb-120 mt-120"
            style={{ backgroundImage: `url(${bgImage})` }}
            >
            <Container>
                <Row className=" align-items-start align-items-md-center flex-column flex-md-row mb-60">
                <Col lg={7}>
                    <div className="block-title">
                    <p>
                        <img src={heart} width="15" alt="" />
                        where we work
                    </p>
                    <h3>
                        Checkout the states <br /> where we operate.
                    </h3>
                    </div>
                </Col>
                <Col lg={5} className="d-flex">
                    <div className="my-auto">
                    <p className="block-text pr-10 mb-0">
                    DDI operates from its headquarters in Abuja and maintains project offices in Lagos, Kebbi, Adamawa, Borno and Yobe States, while supporting the implementation of projects across 23 other states through the provision of technical assistance to, and strategic partnerships with indigenous community-based organizations, businesses, cooperative societies, producer groups, and government agencies with shared values.{" "}
                    </p>
                    </div>
                </Col>
                </Row>
                <Row className='mt-5'>
                    <img height='100%'  width='100%' src={map} alt=""/>
                </Row>
            
            </Container>
            </section>
            <Footer/>
        </Layout>
    )
}

export default WhereWeWork
