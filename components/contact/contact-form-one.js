import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { API_URL } from "../../constant";
import BlockTitle from "../block-title";

const ContactFormOne = () => {
  const aboutState = useSelector((state) => state.about)
  const {loading, about} = aboutState
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');

  const handleSub = (e) =>{
    e.preventDefault()

    
      axios.post(`${API_URL}/send-message`, {
        firstname,
        lastname,
        phone,
        message,
        email
      }).then(({data})=> {
        // console.log(data.success);
        setAlert(data.success)
        setFirstname('')
        setEmail('')
        setPhone('')
        setLastname('')
        setMessage('')
        
      }).catch(error =>{
        // setAlert(error)
        console.log(error);
        setAlert('')
        setFirstname('')
        setEmail('')
        setPhone('')
        setLastname('')
        setMessage('')
      })
  }
  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`Feel free to write us \n a message.`}
                tagLine="Contact With Us"
              />
              <p className="block-text mb-30 pr-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Have you done google research which works all the
                time.{" "}
              </p>
              <div className="footer-social black-hover">
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
          </Col>
          <Col lg={7}>
            <p>{alert}</p>
            <form className="contact-form-validated contact-page__form form-one mb-40" onSubmit={handleSub}>
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    First  Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="first name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="name" className="sr-only">
                    Last  Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="last name"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="sr-only">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="phone" className="sr-only">
                    phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    required
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                
                <div className="form-control form-control-full">
                  <label htmlFor="message" className="sr-only">
                    message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write a Message"
                    id="message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-control form-control-full">
                  <button type="submit" className="thm-btn ">
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;
