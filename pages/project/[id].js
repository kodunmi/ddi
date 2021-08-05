import React from 'react'
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import Footer from '../../components/footer';
import ProjectDetail from '../../components/projects/project-detail';


const Project = () => {
   
    return (
      <Layout pageTitle="Project Detail">
        <HeaderOne />
        <StickyHeader />
        <ProjectDetail/>
        <Footer/>
      </Layout>
    )
}


export default Project
