import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

import banner1 from "../../assets/images/home1.jpeg";
import banner2 from "../../assets/images/home2.jpeg";
import banner3 from "../../assets/images/home3.jpeg";
import axios from "axios";
import { API_URL } from "../../constant";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSlider = () => {
  const [loading, setLoading] = useState(true);
  const [slides, setslides] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/slides`,
      );
 
      setslides(result.data);
      setLoading(false)
    };
 
    fetchData();
  }, []);

  console.log(slides);

  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions}>
          {
            loading?'loading': slides.map(({header,sub_header,secure_url})=>
            <SwiperSlide>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${secure_url})` }}
            ></div>
  
            <Container>
              <Row className="row justify-content-end">
                <Col xl={7} lg={12} className="text-right">
                  <p>{sub_header}</p>
                  <h2>
                    {header}
                  </h2>
                  <a
                    href="/success-story"
                    data-target=".donate-options"
                    className="scroll-to-target thm-btn"
                  >
                    Success Stories
                  </a>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
            )
          }
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
