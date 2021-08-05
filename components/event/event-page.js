import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import EventCard from "./event-card";
import PostPaginations from "../post-paginations";
import{ API_URL} from '../../constant'
import axios from "axios";

const EventPage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/events`,
      );
 
      setPosts(result.data);
      setLoading(false)
    };
 
    fetchData();
  }, []);

  return (
    <section className="event-page pt-120 pb-120">
      <Container>
        <div className="event-grid">
          { loading ? 'loading':posts.map((event, index) => (
            <EventCard data={event} key={`event-card-key-${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EventPage;
