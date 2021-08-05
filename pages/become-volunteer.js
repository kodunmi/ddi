import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import VolunteerForm from "../components/team/volunteer-form";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import img from '../assets/images/volunteering.jpg'

const BecomeVolunteer = () => {
  return (
    <Layout pageTitle="Become a Volunteer">
      <HeaderOne />
      <StickyHeader />
      <PageHeader bg={img} title="Become a Volunteer" crumbTitle="Become Volunteer" />
      <VolunteerForm />
      <BrandCarousel extraClass="client-carousel__has-border-top" />
      <Footer />
    </Layout>
  );
};

export default BecomeVolunteer;
