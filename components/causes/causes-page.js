import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import PostPaginations from "../post-paginations";
import{ API_URL} from '../../constant'
import axios from "axios";


const CausesPage = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStory] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/stories`,
      );
 
      setStory(result.data);
      setLoading(false)
    };
 
    fetchData();
  }, []);

  console.log(stories);

  return (
    <section className="causes-page pt-120 pb-120">
      <Container>
        <div className="causes-col__3">
          {loading ? 'loading': stories.data.map(
            (
              { secure_url, title, summary, id },
              index
            ) => (
              <div className="cause-card" key={`cause-card-key-${index}`}>
                <div className="cause-card__inner">
                  <div className="cause-card__image">
                    <img src={secure_url} alt="" />
                  </div>
                  <div className="cause-card__content">
                    
                    <h3>
                      <Link href={`success-story/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <p>{summary}</p>
                    <div className="cause-card__bottom">
                      <Link href={`success-story/${id}`}>
                        <a className="thm-btn ">Read Story</a>
                      </Link>
                      <Link href="#">
                        <a
                          className="cause-card__share"
                          aria-label="share postr"
                        >
                          <i className="azino-icon-share"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <PostPaginations />
      </Container>
    </section>
  );
};

export default CausesPage;
