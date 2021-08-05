import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import heart from "../../assets/images/shapes/heart-2-1.png";
import { API_URL } from "../../constant";
import Link from 'next/link';    


const NewsPage = () => {
 
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState();
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `${API_URL}/news`,
        );
   
        setNews(result.data);
        setLoading(false)
      };
   
      fetchData();
    }, []);

    console.log(news);

  return (
    <section className="faq-one pt-120 pb-120">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-one__content">
            <div className="block-title">
                <p>
                  <img src={heart} width="15" alt="" />
                  news
                </p>
                <h3>
                 Some news we are involed in 
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='mt-4'>
          {
            loading ? 'loading' : news.map(({title,link,date},index) =>
            <a
              href={`${link}`}
              target='_blank'
              className="button mb-3 border-bottom"
            ><span className='d-block mb-2 text-dark'>{date}</span><h4>{title}</h4></a>
              // <div key={`news-${index}`} className=''>
              //   
              //   <a href={`${link}`}>
              //     <h4>{title}</h4> </a>
              //     {/* <a href={link} >{title}</a> */}
              //     <Link href={link} passHref={true}>
              //        <a><h4>{title}</h4> </a>
              //     </Link>
                
              // </div>
            )
          }
      </Container>
    </section>
  );
};

export default NewsPage;
