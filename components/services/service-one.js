import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import serviceBg from "../../assets/images/backgrounds/service-hand-bg-1-1.png";
import serviceLine from "../../assets/images/shapes/service-line-1-1.png";
import blockTitleHeart from "../../assets/images/shapes/heart-2-1.png";

const serviceOneData = [
  {
    icon: "fa fa-briefcase",
    extraClassName: "background-secondary",
    title: "Business Support & Enterprise Management",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  },
  {
    icon: "fa fa-leaf",
    title: "Agricultural Value Chain Improvement",
    extraClassName: "background-base",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  },
  {
    icon: "fa fa-rocket",
    title: "Renewable/Off-Grid Energy Support",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#",
    extraClassName: "background-primary"
  },
  {
    icon: "fa fa-shopping-basket",
    title: "Agricultural Commodity Market Access Services",
    extraClassName: "background-special",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  },
  {
    icon: "fa fa-users",
    title: "Youth/Women-led Enterprise Support",
    extraClassName: "background-primary",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  },
  {
    icon: "fa fa-credit-card",
    title: "Grants Management",
    extraClassName: "background-base",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  },
  {
    icon: "fa fa-envelope-open",
    title: "Employability Program",
    extraClassName: "background-secondary",
    text: "Lorem ipsum is simply free text available in the market wesbites.",
    link: "#"
  }
];

const ServiceOne = () => {
  return (
    <section
      className="service-one pt-120 pb-90"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <Container>
        <img src={serviceLine} alt="" className="service-one__shape-1" />
        <div className="block-title">
          <p>
            <img src={blockTitleHeart} width="15" alt="" />
            Welcome to Diamond Development Initiatives
          </p>
          <h3>
          We are always doing amazing things <br/> to help rural communities
          </h3>
        </div>
        <Row className='text-center justify-content-center'>
          {serviceOneData.map(
            ({ icon, title, text, link, extraClassName }, index) => (
              <Col md={6} lg={3} key={`service-one-key-${index}`}>
                <div className={`service-one__box`}>
                  <div className={`service-one__icon ${extraClassName}`}>
                    <div className="service-one__icon-inner">
                      <i className={icon}></i>
                    </div>
                  </div>
                  <h3>
                    <Link href={link}>
                      <a>{title}</a>
                    </Link>
                  </h3>
                  <p>{text}</p>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
