import React from "react";
import blogDetailsImage from "../../assets/images/blog/blog-d-1-1.jpg";

const BlogContent = ({post}) => {
  
const newPost = post.data[0];
const prePost = post.data[1];
const nxtPost = post.data[2];

const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  // const date = new Date(post.data.date)
  return (
   
        <div>
          {
            post && 
            <div>
<div className="blog-card__image">
          <img src={newPost.secure_url} alt="" />
          <div className="blog-card__date">{`${new Date(newPost.date).getDate()} ${ months[new Date(newPost.date).getMonth()] }`}</div>
        </div>
        <div className="blog-card__meta d-flex justify-content-start mt-0 mb-0">
          <a href="news-details.html">
            <i className="far fa-user-circle"></i> {newPost.created_by}
          </a>
          <a href="news-details.html">
            <i className="far fa-comments"></i> {newPost.comments?.length} Comments
          </a>
        </div>
        <h3>{newPost.title}</h3>
        
        <div dangerouslySetInnerHTML={{ __html: newPost.body }} />
        <div className="blog-details__meta">
          <ul className="list-unstyled blog-details__category">
            <li>
              <span>Tags:</span>
            </li>
            {
              newPost.tags && newPost.tags.map(({name,id})=><li><a href={`/tag/${id}`}>{name}</a></li>)
            }
          </ul>
        </div>
        <div className="blog-navigations">
          <a href={prePost && `/blog/${prePost.id}`}>{prePost ? prePost.title : 'no previous post'}</a>
          <a href={nxtPost && `/blog/${nxtPost.id}`}>{nxtPost ? nxtPost.title : 'no next post'}</a>
        </div>
            </div>
          }
        
      </div>
     
  );
};

export default BlogContent;
