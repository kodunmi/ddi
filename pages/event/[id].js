import React from "react";
import Layout from "../../components/layout";
import HeaderOne from "../../components/header/header-one";
import StickyHeader from "../../components/header/sticky-header";
import Footer from "../../components/footer";
import EventDetailPage from '../../components/event/event-detail'

const EventDetails = () => {
  

  return (
    <Layout pageTitle='event detail'>
      <HeaderOne />
      <StickyHeader />
      <EventDetailPage/>
      <Footer />
    </Layout>
  );
};

export default EventDetails;
