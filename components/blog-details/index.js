import React,{useEffect,useState}  from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogContent from "./blog-content";
import Comments from "./comments";
import CommentForm from "./comment-form";
import BlogSidebar from "./blog-sidebar";
import PageHeader from "../page-header";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "../../constant";
import {InlineReactionButtons, InlineShareButtons} from 'sharethis-reactjs';

const BlogDetails = () => {
  const router = useRouter()
  const {id} = router.query;


  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${API_URL}/posts/${id}`,
      );
      setPost(result);
      setLoading(false)
    };

    if(router.asPath !== router.route){
       fetchData();
    }
   
    
  }, [id,router]);

  return (
    <>
    <PageHeader bg={loading?'loading':post.data[0].secure_url} title={loading?'loading':post.data[0].title} crumbTitle='blog'  />
    <section className="blog-details pt-120 pb-40">
      <Container>
        {
          loading ? 'loading':
          <Row>
          <Col md={12} lg={8}>
            <BlogContent post={post}/>
            <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'linkedin',
              'messenger',
              'facebook',
              'twitter'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,
            size: 40,             // the size of each button (INTEGER)
 
            // OPTIONAL PARAMETERS
            // url: `https://www.ddinigeria.org/blog/${id}`, // (defaults to current url)
            image: post.data[0].secure_url,  // (defaults to og:image or twitter:image)
            description: post.data[0].preview,       // (defaults to og:description or twitter:description)
            title: post.data[0].title,            // (defaults to og:title or twitter:title)
            message: post.data[0].preview,     // (only for email sharing)
            subject: post.data[0].title,  // (only for email sharing)
            username: 'DDINigeria' // (only for twitter sharing)
          }}
        />
        <InlineReactionButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            enabled: true,        // show/hide buttons (true, false)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            padding: 12,          // padding within buttons (INTEGER)
            reactions: [          // which reactions to include (see REACTIONS)
              'slight_smile',
              'heart_eyes',
              'laughing',
              'astonished',
              'sob',
              'rage'
            ],
            size: 48,             // the size of each button (INTEGER)
            spacing: 8,           // the spacing between buttons (INTEGER)
 
            // OPTIONAL PARAMETERS
            // url: `https://www.ddinigeria.org/blog/${id}` // (defaults to current url)
          }}
        />
            <Comments comments={post.data[0].comments}/>
            <CommentForm id={post.data[0].id}/>
          </Col>
          <Col md={12} lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
        }
      </Container>
    </section>
    </>
  );
};

export default BlogDetails;
