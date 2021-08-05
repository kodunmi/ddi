import React, { useEffect, useState } from 'react'
import{ API_URL} from '../../constant'
import axios from "axios";
import PageHeader from "../../components/page-header";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";

const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function tConvert (timeString) {
  var hourEnd = timeString.indexOf(":");
  var H = +timeString.substr(0, hourEnd);
  var h = H % 12 || 12;
  var ampm = H < 12 ? "AM" : "PM";
  return timeString = h + timeString.substr(hourEnd, 3) + ampm;
}

const EventDetailPage = () => {
    const router = useRouter()
  const {id} = router.query;


  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/events/${id}`,
      );
      setEvent(result.data);
      setLoading(false)
    };

    if(router.asPath !== router.route){
       fetchData();
    }
   
    
  }, [id,router]);

  console.log(event);
    return (
        <>
        <PageHeader title={loading ? 'loading': event.title} crumbTitle="Event" />
      
        <section className="event-details pt-120">
          <Container>
            <Row>
              <Col md={12} lg={6}>
                <h3>{loading ? 'loading': event.title}</h3>
                <p>
                {loading ? 'loading': event.description}
                </p>
              </Col>
              <Col md={12} lg={6}>
                <img src={loading ? 'loading': event.image} alt="" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </section>
        <div className="event-infos pt-20 pb-90">
          <Container>
            <Row>
              <Col md={12} lg={6} className="mb-30">
                <div className="event-infos__single background-secondary">
                  <h3>Venue</h3>
                  <ul className="list-unstyled event-infos__list">
                    <li>{loading? 'loading':`${new Date(event.date).getDate()} ${ months[new Date(event.date).getMonth()] }, ${new Date(event.date).getFullYear()}`}</li>
                    <li> {loading? 'loading':`${tConvert(event.opening)} ${tConvert(event.closing)}`}</li>
                    <li>{loading ? 'loading': event.location}</li>
                  </ul>
                
                </div>
              </Col>
              
              <Col md={12} lg={6} className="mb-30">
                <div className="event-infos__single background-special">
                  <h3>Organizer</h3>
                  <ul className="list-unstyled event-infos__list event-infos__list-has-icons">
                    <li>
                      <i className="azino-icon-telephone"></i>
                      <a href="tel:6668880000">666 888 0000</a>
                    </li>
                    <li>
                      <i className="azino-icon-email"></i>
                      <a href="mailto:info@azino.com">info@azino.com</a>
                    </li>
                    <li>
                      <i className="azino-icon-pin"></i>
                      88 top broklyn street road new york, USA
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      
        </>
    )
}

export default EventDetailPage
