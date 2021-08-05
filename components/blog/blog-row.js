import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loadMorePosts } from "../../slices/blogSlice";

import PostPaginations from "../post-paginations";
import BlogCard from "./blog-card";



const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const BlogRow = ({posts}) => {
  const dispatch = useDispatch()
  return (
    <>
    {
      posts && 
      <section className="news-page pt-120 pb-120">
      <Container>
        <div className="news-3-col">
          {posts.data.map(
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
                link={`blog/${id}`}
                commentCount={comments.length}
                author={created_by}
              />
            )
          )}
        </div>
        {
          posts.last_page !== posts.current_page && <div className="mt-5 thm-btn" onClick={() => dispatch(loadMorePosts(posts.next_page_url))}> Load More </div>
        }
        
      </Container>
    </section>
    }
    
    </>
    
  );
};

export default BlogRow;
