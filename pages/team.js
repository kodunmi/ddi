import React from 'react'
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Team from "../components/team/team-home";
const OurTeam = () => {
    return (
        <Layout pageTitle="Our Team">
          <PageHeader title="Our Team" crumbTitle="Our Team" />
          <HeaderOne />
          <StickyHeader />
            <Team/>
        </Layout>
    )
}

export default OurTeam
