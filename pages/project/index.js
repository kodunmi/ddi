import React from 'react'
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";

import ProjectPage from '../../components/projects/project-page';


const Projects = () => {

    return (
        <Layout pageTitle="Projects">
            <HeaderOne />
            <StickyHeader />
            <ProjectPage />
        </Layout>
    )
}

export default Projects
