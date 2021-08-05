import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import GalleryPage from "../components/gallery/gallery-page";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import One from "../assets/images/new/13.jpg"

const Gallery = () => {
  return (
    <Layout pageTitle="Photo Gallery">
      <HeaderOne />
      <StickyHeader />
      <PageHeader bg={One} title="Photo Gallery" crumbTitle="Photo Gallery" />
      <GalleryPage />
      <Footer />
    </Layout>
  );
};

export default Gallery;
