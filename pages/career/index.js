import React from 'react'
import { Container, Row, Col, Collapse } from "react-bootstrap";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import bgImage from "../../assets/images/shapes/event-map-1-2.png";
import heart from "../../assets/images/shapes/heart-2-1.png";
import map from "../../assets/images/Where-we-work-Map.jpg";
import JobListing from '../../components/career/joblisting';

const Career = () => {
    return (
        <Layout pageTitle="Career">
          <PageHeader title="Career" crumbTitle="Career" />
          <HeaderOne />
          <StickyHeader />
          <section
            className="event-home-two pb-120"
            >
            <Container className='pt-5'>
                <Row className=" align-items-start align-items-md-center flex-column flex-md-row mb-60">
                <Col lg={7}>
                    <div className="block-title">
                    <p>
                        <img src={heart} width="15" alt="" />
                        Career
                    </p>
                    <h3>
                        Checkout our <br /> job opening.
                    </h3>
                    </div>
                </Col>
                <Col lg={5} className="d-flex">
                    <div className="my-auto">
                    <p className="block-text pr-10 mb-0">
                    Diamond Development Initiatives (DDI) is a Nigerian-registered not-for-profit organization that complements the role of development agencies, donors, and other funding organizations by providing technical assistance in the design, planning and implementation of various development initiatives{" "}
                    </p>
                    </div>
                </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <JobListing/>
                    </Col>
                   
                </Row>
            
            </Container>
            </section>
        </Layout>
    )
}

export default Career
