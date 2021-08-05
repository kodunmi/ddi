import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import brandImage from "../assets/images/resources/brand-1-1.png";
import { API_URL } from "../constant";

const BrandCarousel = ({ extraClass }) => {
  const [loading, setLoading] = useState(true);
  const [partners, setpartners] = useState();
  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
              `${API_URL}/partners`,
          );

          setpartners(result.data);
          setLoading(false)
      };

      fetchData();
  }, []);
  const brandCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5
      }
    }
  };
  return (
    <div className={`client-carousel pt-120 pb-120  ${extraClass}`}>
      <Container>
        <Swiper {...brandCarouselOptions}>
          <div className="swiper-wrapper">
          {
                    loading ? 'loading' : partners.map(({ name, secure_url }) =>
                         <SwiperSlide>
                          <img src={secure_url} alt="" />
                      </SwiperSlide>
                )
            }
           
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default BrandCarousel;
