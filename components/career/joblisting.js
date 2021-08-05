import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { API_URL } from "../../constant";


const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const JobListing = () => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState();
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `${API_URL}/jobs`,
        );
   
        setJobs(result.data);
        setLoading(false)
      };
   
      fetchData();
    }, []);

    console.log(jobs);
  return (
    <>
    {
      <section className="news-page pt-50 pb-120">
      <Container>
        <div className="row">
          {loading ? 'loading' : jobs.length > 0 ? jobs.map(
            ({id, title, location, salary, description, type },index) => (
                <div className="col-md-4">
                    <div className="event-card">
                    <div className="event-card-inner w-100">
                        
                        <div className="event-card-content">
                        <h3>
                            <Link href={`career/${id}`}>
                            <a>{title}</a>
                            </Link>
                        </h3>
                        <ul className="event-card-list">
                            <li>
                            <i className="azino-icon-clock"></i>
                            <strong>type:</strong> {type}
                            </li>
                            <li>
                            <i className="azino-icon-pin1"></i>
                            <strong>Location:</strong> {location}
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                </div>
                
            )
          ) : 'No Job Posting Yet'}
        </div>
      </Container>
    </section>
    }
    
    </>
    
  );
};

export default JobListing;
