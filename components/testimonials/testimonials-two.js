import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import testimonialImage1 from "../../assets/images/resources/testimonial-2-1.jpg";
import testimonialImage2 from "../../assets/images/resources/testimonial-2-2.jpg";
import testimonialImage3 from "../../assets/images/resources/testimonial-2-3.jpg";
import axios from "axios";
import { API_URL } from "../../constant";

SwiperCore.use([Autoplay, Thumbs]);

// const TESTIMONIALS_DATA = [
//   {
//     image: testimonialImage1,
//     name: "Christine Rose",
//     designation: "Customer",
//     text:
//       "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch."
//   },
//   {
//     image: testimonialImage2,
//     name: "Christine Rose",
//     designation: "Customer",
//     text:
//       "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch."
//   },
//   {
//     image: testimonialImage3,
//     name: "Christine Rose",
//     designation: "Customer",
//     text:
//       "This is due to their excellent service, competitive pricing and \n customer support. It’s throughly refresing to get such a \n personal touch."
//   }
// ];

const TestimonialsTwo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [testimonies, setTestimonies] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/testimonies`,
      );
 
      setTestimonies(result.data);
      setLoading(false)
    };
 
    fetchData();
  }, []);


  const TESTIMONIALS_DATA = testimonies;

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="testimonials-two">
      <Container>
        <div className="team-about__top">
          <Row className="align-items-center">
            <Col md={12} lg={7}>
              <BlockTitle
                title={`What they are talking \n about DDI.`}
                tagLine="Our Testimonials"
              />
            </Col>
            <Col md={12} lg={5}>
              <p className="team-about__top-text">
              What They Are Saying About DDI
              </p>
            </Col>
          </Row>
        </div>
        <Swiper
          id="testimonials-two__thumb"
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          {loading? 'loading': TESTIMONIALS_DATA.map(({ secure_url, name }, index) => (
            <SwiperSlide key={index}>
              <img src={secure_url} alt={name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          id="testimonials-two__carousel"
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          {loading? 'loading': TESTIMONIALS_DATA.map(({ designation, name, text }, index) => (
            <SwiperSlide key={index}>
              <p>{text}</p>
              <div className="testimonials-two__meta">
                <h3>{name}</h3>
                <span>{designation}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;
