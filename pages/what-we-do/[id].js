import React from 'react'
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import Team from "../../components/team/team-home";
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap';
import Projects from '../../components/projects/projects-content';
import axios from 'axios';
import { API_URL } from '../../constant'
import WhatWeDoPage from '../../components/what-we-do/what-we-do-page';
import img1 from '../../assets/images/services/BusinessSupport.jpg';
import img2 from '../../assets/images/new/11.jpg';
import img3 from '../../assets/images/new/12.jpg';
import img4 from '../../assets/images/new/10.jpg';
import img5 from '../../assets/images/new/14.jpg';
import img6 from '../../assets/images/services/grant-management.png';
import img7 from '../../assets/images/employability.jpg';
import img from '../../assets/images/home3.jpeg';
import Footer from '../../components/footer';

const WhatWeDo = () => {

    const router = useRouter()
    const { id } = router.query;
    let image
    let fullname
    
    switch (id) {
        case '1':
            fullname = 'Business Support & Enterprise Management'
            image = img1
            break;
        case '2':
            fullname = 'Agricultural Value Chain Improvement'
            image = img2
            break;
        case '3':
            fullname = 'Renewable/Off-Grid Energy Support'
            image = img3
            break;
        case '4':
            fullname = 'Agricultural Commodity Market Access Services'
            image = img4
            break;
        case '5':
            fullname = 'Youth/Women-led Enterprise Support'
            image = img5
            break;
        case '6':
            fullname = 'Grants Management'
            image = img6
            break;
        case '7':
            fullname = 'Employability Program'
            image = img7
            break;
        default:
            break;
    }



    return (
            <Layout pageTitle="What We Do">
                <PageHeader bg={image} title={fullname} crumbTitle="What We Do" />
                <HeaderOne />
                <StickyHeader />
                <WhatWeDoPage/>
                <Footer/>
            </Layout>

        
    )
}

export default WhatWeDo
