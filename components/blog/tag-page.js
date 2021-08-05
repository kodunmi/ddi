import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import PageHeader from "../../components/page-header";
import{ API_URL} from '../../constant'
import axios from "axios";
import { Container } from "react-bootstrap";
import BlogCard from '../../components/blog/blog-card'

const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const TagPage = () => {
    const router = useRouter()
    const {id} = router.query;
  
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `${API_URL}/tag/${id}`,
        );
   
        setPosts(result.data);
        setLoading(false)
      };
   
      if(router.asPath !== router.route){
          fetchData();
       }
    }, [id,router]);
    return (
        <>
        <PageHeader title={loading ? 'loading' : posts[1].name} crumbTitle="Tag" />
        <section className="news-page pt-120 pb-120">
        <Container>
            <div className="news-3-col">
            { loading  ? 'loading':  posts[0].data.length > 0 ? posts[0].data.map(
                (
                { secure_url, title, date, preview, id, comments, created_by },
                index
                ) => (
                <BlogCard
                    key={index}
                    image={secure_url}
                    title={title}
                    date={`${new Date(date).getDate()} ${ months[new Date(date).getMonth()] }`}
                    text={preview}
                    link={`/blog/${id}`}
                    commentCount={0}
                    author={created_by}
                />
                )
            ) : <div>No Blog Post for this tag</div>}
            </div>
        {/* <PostPaginations /> */}
      </Container>
    </section>
        </>
    )
}

export default TagPage
