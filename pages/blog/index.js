import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";

import Footer from "../../components/footer";

import BlogPage from "../../components/blog/blog-page";
import img from '../../assets/images/blog/blog.jpg'

const Blogs = () => {

  return (
    <Layout pageTitle="blog page">
      <HeaderOne />
      <StickyHeader />
      <PageHeader bg={img} title="Blog" crumbTitle="Blog" />
      <BlogPage/>
      <Footer />
    </Layout>
  );
};

export default Blogs;
