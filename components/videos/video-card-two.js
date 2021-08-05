import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import videoBg from "../../assets/images/shapes/video-bg-1-1.png";
import videoImage from "../../assets/images/resources/video-1-1.png";
import One from "../../assets/images/new/20.jpg"
import Two from "../../assets/images/new/13.jpg"

const VideoCardTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="video-card-two">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <Container>
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${videoBg})` }}
        >
          <Row className="align-items-center">
            <Col lg={3}>
              <div className="video-card-two__box">
                <img height='255px' width='255px' src={Two} alt="" />
                <span
                  className="video-card-two__box-btn video-popup"
                  onClick={() => setOpen(true)}
                >
                  <i className="fa fa-play"></i>
                </span>
              </div>
            </Col>
            <Col lg={4}>
              <h3>Diamond Development Initiatives (DDI)</h3>
            </Col>
            <Col lg={5}>
              <p>
              Diamond Development Initiatives (DDI) is a Nigerian-registered not-for-profit organization that complements the role of development agencies, donors, and other funding organizations{" "}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VideoCardTwo;
