import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../assets/images/logo.png";
import blogPost1 from "../assets/images/resources/footer-img-1-1.jpg";
import blogPost2 from "../assets/images/resources/footer-img-1-2.jpg";
import { useSelector } from "react-redux";
import axios from "axios";
import TextTruncate from 'react-text-truncate'; // recommend
import { API_URL } from "../constant";
const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Footer = () => {
  const contactState = useSelector((state) => state.contact)
  const { loading, contact, status } = contactState
  const aboutState = useSelector((state) => state.about)
  const {about} = aboutState

  const [posts, setPosts] = useState();
  const [loadingRecent, setLoading] = useState(true);
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

  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <Link href="/">
                  <a aria-label="logo image">
                    <img
                      src={logoLight}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                </Link>
                <p>
                  Development Service Provider.
                </p>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#">
                      <i className="azino-icon-telephone"></i>{loading ? 'loading' : contact.phone_1}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-email"></i>{loading ? 'loading' : contact.email}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-pin"></i>{loading ? 'loading' : contact.address}
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Explore</h3>
                <ul className="list-unstyled footer-widget__link-list">
                  <li>
                    <Link href="/success-story">
                      <a>Success Story</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news">
                      <a>News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <a>Upcoming Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <a>Photos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/event">
                      <a>Upcoming Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/career">
                      <a>Career Opportunity</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__blog">
                <h3 className="footer-widget__title">Blog</h3>
                <ul className="list-unstyled footer-widget__blog">
                  {
                    loadingRecent ? 'loading' : posts.map(({ secure_url, title, date, preview, id, comments, created_by },index) => {
                      if (index <= 2) {
                        return  (
                          <li key={'recent'+id}>
                            <img height='75px' width='75px' src={secure_url} alt="" />
                            <p>{`${new Date(date).getDate()} ${ months[new Date(date).getMonth()] } ${new Date(date).getFullYear()}`}</p>
                            <h3>
                              <Link href={`blog/${id}`}>
                              <TextTruncate
                                line={2}
                                element="a"
                                truncateText="…"
                                text={title}
                                />
                              </Link>
                            </h3>
                          </li>
                        )
                        
                      }
                    }
                   
                  )
                  }
                  
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__newsletter">
                <h3 className="footer-widget__title">Newletter</h3>
                <p>Signup to keep in touch with us</p>
                <form
                  data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                  className="footer-widget__newsletter-form mc-form"
                >
                  <label htmlFor="mc-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    id="mc-email"
                    className=""
                    placeholder="Email address"
                  />
                  <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                    <button type="submit" className="thm-btn ">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                <div className="mc-form__response"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>{loading ? 'loading' : about.footnote}</p>
          <div className="footer-social">
            <a href={loading ? 'loading' : about.twitter_link} aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={loading ? 'loading' : about.fb_link} aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href={loading ? 'loading' : about.linkedin_link} aria-label="pinterest">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={loading ? 'loading' : about.youtube_link} aria-label="instagram">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
