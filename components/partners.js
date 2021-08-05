import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { API_URL } from "../constant";
import axios from "axios";

const PartnersPage = () => {
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
    return (
        <Container className='mt-5'>
            <Row>
                {
                    loading ? 'loading' : partners.map(({ name, secure_url }) =>
                        <Col lg={4} md={6}>
                            <div class="about-two__box-two  text-center mb-4">
                                <img  src={secure_url} alt=""/>
                                <h3>{name}</h3>
                            </div>
                        </Col>
                    )}

            </Row>
        </Container>
    )
}

export default PartnersPage
