import React from 'react'
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Team from "../../components/team/team-home";
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap';
import CausesPage from "../../components/causes/causes-page";
import img from '../../assets/images/home3.jpeg';


const SuccessStory = () => {
 
    return (
        <Layout pageTitle="Success Story">
            <PageHeader bg={img} title="Success Story" crumbTitle="Success Story" />
            <HeaderOne />
            <StickyHeader />
            <CausesPage/>
        </Layout>
    )
}

export default SuccessStory
