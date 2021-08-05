import React from 'react'
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import One from "../assets/images/new/11.jpg"
import Footer from '../components/footer';
const whoWeAre = () => {
    return (
        <Layout pageTitle="who we are">
          <PageHeader  bg={One} title="who we are" crumbTitle="Who We Are" />
          <HeaderOne />
          <StickyHeader />
          <AboutOne />
          <Footer/>
        </Layout>
    )
}

export default whoWeAre
