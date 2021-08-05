import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import PartnersPage from "../components/partners";

const OurPartners = () => {
    
    return (
        <Layout pageTitle="Our Partners">
            <PageHeader title="Our Partners" crumbTitle="Partners" />
            <HeaderOne />
            <StickyHeader />
            <PartnersPage/>
        </Layout>
    )
}

export default OurPartners

