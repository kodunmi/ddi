import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import VideoPage from "../components/videos/video-page";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import img from '../assets/images/new/14.jpg'

const Video = () => {
  return (
    <Layout pageTitle="Videos">
      <HeaderOne />
      <StickyHeader />
      <PageHeader bg={img} title="Video Gallery" crumbTitle=" Video Gallery" />
      <VideoPage />
      <Footer />
    </Layout>
  );
};

export default Video;
