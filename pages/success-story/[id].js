import React from 'react'
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import CauseContent from '../../components/causes/cause-content';


const SuccessStory = () => {
 
    return (
        <Layout pageTitle="Success Story">
            <HeaderOne />
            <StickyHeader />
            <CauseContent/> 
        </Layout>
    )
}

export default SuccessStory
