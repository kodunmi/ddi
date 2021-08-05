import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import Footer from "../../components/footer";
import TagPage from "../../components/blog/tag-page";

const Tag = () => {
  return (
    <Layout pageTitle='tag page'>
    <HeaderOne />
    <StickyHeader />
    <TagPage/>
    <Footer />
  </Layout>
  );
};

export default Tag;
