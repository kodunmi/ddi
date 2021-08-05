import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap';
import Projects from '../../components/projects/projects-content';
import axios from 'axios';
import { API_URL } from '../../constant'
import Link from 'next/link';

const WhatWeDoPage = () => {

    const router = useRouter()
    const { id } = router.query;
    const [projects, setProjects] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${API_URL}/projects/what-we-do/${id}`,
            );

            setProjects(result.data);
            setLoading(false)
        };

        fetchData();
    }, [id]);


    let fullname
    let content


    switch (id) {
        case '1':
            fullname = 'Business Support & Enterprise Management'
            content = ' DDI provide technical support and enterprise management services to organizations through business planning, design and marketing of products, identification of marketing channels, etc.'
            break;
        case '2':
            fullname = 'Agricultural Value Chain Improvement'
            content = 'DDI provides sustained value chain development and improvement to smallholder farmers’ groups and cooperative, with access to the range of services necessary for enhancing agricultural products as they move from farm/producer to final consumer.'
            break;
        case '3':
            fullname = 'Renewable/Off-Grid Energy Support'
            content = 'DDI as the local implementing partner to the United States African Development Foundation (USADF) supports the provision of sustainable power to underserved and unserved communities in Nigeria by working closely with local energy entrepreneurs to deploy off-grid, renewable energy solutions across the country. '
            break;
        case '4':
            fullname = 'Agricultural Commodity Market Access Services'
            content = 'DDI assists CBOs (cooperatives, farmers/producer groups), to increase their members’ incomes by efficient product marketing and direct product-to-consumer interface by bypassing intermediaries. Youth/Women-led Enterprise Support: DDI, through USADF, facilitates support for youth and women entrepreneurs in Nigeria, providing them with grant funding to launch and expand their businesses. '
            break;
        case '5':
            fullname = 'Youth/Women-led Enterprise Support'
            content = 'DDI, through USADF, facilitates support for youth and women entrepreneurs in Nigeria, providing them with grant funding to launch and expand their businesses.'
            break;
        case '6':
            fullname = 'Grants Management'
            content = 'DDI provides technical assistance to donors and grant beneficiaries such as grant applicants’ screening, pre-grant award due diligence, financial record-keeping, disbursement tracking, project monitoring and evaluation, grant closeouts, etc.'
            break;
        case '7':
            fullname = 'Employability Program'
            content = 'With the support of USADF and in partnership with the Lagos State Employment Trust Fund (LSETF), DDI is currently supporting the provision of industry-, and trade-relevant skills to 15,000 youth in Lagos State for a five-year period.'
            break;
        default:
            break;
    }

    return (
        <Container className='mt-5 mb-5'>
            {
                loading ? 'loading' :
                    <div>
                        <h1 className='mb-3'>{fullname}</h1>

                        <p className='mb-5'>{content}</p>
                        <h1 className='mb-5'>Projects</h1>
                        <Projects projects={projects?.data || []} />
                        {/* <Link href='/projects' className="thm-btn mt-5 ">
                            view all
                        </Link> */}
                    </div>
            }
        </Container>
    )
}

export default WhatWeDoPage
