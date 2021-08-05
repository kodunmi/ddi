import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import PageHeader from "../../components/page-header";
import BlogDetails from "../../components/blog-details";
import Footer from "../../components/footer";
import { API_URL } from "../../constant";
import axios from "axios";
import { useRouter } from "next/router";

const Blog = () => {

  return (
    <Layout pageTitle='blog page' >
      <HeaderOne />
      <StickyHeader />
      <BlogDetails />
      <Footer />
    </Layout>
  );
};

export default Blog;
