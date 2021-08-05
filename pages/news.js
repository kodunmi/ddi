import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import NewsPage from "../components/news/news-page";
import Footer from "../components/footer";

const Events = () => {
  return (
    <Layout pageTitle="news">
      <HeaderOne />
      <StickyHeader />
      <PageHeader title="News" crumbTitle="News" />
      <NewsPage/>
      <Footer />
    </Layout>
  );
};

export default Events;
