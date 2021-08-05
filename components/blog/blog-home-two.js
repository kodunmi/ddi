import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "../block-title";
import BlogCard from "./blog-card";
import bgImage from "../../assets/images/home3.jpeg";
import { API_URL } from "../../constant";

const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


const BlogHomeTwo = () => {

  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/latest-post`,
      );

      setPosts(result.data);
      setLoading(false)
    };
    fetchData();
  }, [setPosts, setLoading]);
  
  console.log('====================================');
  console.log(posts);
  console.log('====================================');

  const blogCarouselOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <>
      <section
        className="news__top news-home  pt-120"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Container>
          <Row className="align-items-start align-items-md-center flex-column flex-md-row">
            <Col lg={7}>
              <BlockTitle
                title={`Latest news & articles \n directly from the blog.`}
                tagLine="Blog Posts"
              />
            </Col>
            <Col lg={5} className="d-flex">
              <div className="my-auto">
                <p className="block-text pr-10 mb-0">
                  The latest blog post from DDI{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="news-page pb-120">
        <Container>
          <Swiper {...blogCarouselOptions}>
          { loading ? 'loading' : posts.map(
            (
              { secure_url, title, date, preview, id, comments, created_by },
              index
            ) => (
              <SwiperSlide key={index}>
                <BlogCard
                key={index}
                image={secure_url}
                title={title}
                date={`${new Date(date).getDate()} ${ months[new Date(date).getMonth()] }`}
                text={preview}
                link={`blog/${id}`}
                commentCount={comments.length}
                author={created_by}
              />
              </SwiperSlide>
              
            )
          )}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default BlogHomeTwo;
