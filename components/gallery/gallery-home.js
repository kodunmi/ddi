import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import GalleryCard from "./gallery-card";

import galleryImage1 from "../../assets/images/home1.jpeg";
import galleryImage2 from "../../assets/images/home2.jpeg";
import galleryImage3 from "../../assets/images/home3.jpeg";
import axios from "axios";
import { API_URL } from "../../constant";


SwiperCore.use([Autoplay]);

const GalleryHome = () => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/photos`,
      );
 
      setPhotos(result.data);
      setLoading(false)
    };
 
    fetchData();
  }, []);
  const galleryOptions = {
    spaceBetween: 100,
    slidesPerView: 4,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      425: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      767: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      991: {
        spaceBetween: 20,
        slidesPerView: 3
      },
      1289: {
        spaceBetween: 20,
        slidesPerView: 4
      },
      1440: {
        spaceBetween: 20,
        slidesPerView: 5
      }
    }
  };
  return (
    <section className="gallery-home-one pt-5">
      <Container fluid>
        <Swiper {...galleryOptions}>
          {
            loading?'loading': photos.map(({secure_url,text})=><SwiperSlide> <GalleryCard text={text} image={secure_url} /> </SwiperSlide>)
          }
        </Swiper>
      </Container>
    </section>
  );
};

export default GalleryHome;
