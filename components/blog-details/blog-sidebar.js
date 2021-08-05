import axios from "axios";
import React, { useEffect, useState } from "react";
import postImage1 from "../../assets/images/blog/blog-s-1.jpg";
import postImage2 from "../../assets/images/blog/blog-s-2.jpg";
import postImage3 from "../../assets/images/blog/blog-s-3.jpg";
import { API_URL } from "../../constant";

const BlogSidebar = () => {
  const [loadingTags, setLoadingTags] = useState(true);
  const [loadingPost, setLoadingPost] = useState(true);
  const [tags, setTags] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(API_URL+'/tags').then(data => {
      setTags(data.data)
      setLoadingTags(false)
    })
    axios.get(API_URL+'/latest-post').then(data => {
      setPosts(data.data)
      setLoadingPost(false)
    })
  }, []);
  

  
  
  return (
    <>
    <div className="blog-sidebar">
      <div className="blog-sidebar__search">
        <form action="#">
          <input type="text" placeholder="Search here" />
          <button type="submit">
            <i className="azino-icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="blog-sidebar__single">
        <h3>Latest Posts</h3>
        <ul className="list-unstyled blog-sidebar__post">
          {
            loadingPost ? 'loadding' : posts.map(({title,id,secure_url}) =>
              <li>
            <img height="70px" width="70px" src={secure_url} alt="" />
            <h3>
              <a href={`/blog/${id}`}>
                {title}
              </a>
            </h3>
          </li>
            )
          }

        </ul>
      </div>
      <div className="blog-sidebar__single">
        <h3>Tags</h3>
        <ul className="list-unstyled blog-sidebar__tags">
          {
            loadingTags ? 'loading' : tags.map(({name,id}) => <li>
            <a href={`/tag/${id}`}>{name}</a>
          </li>)
          }
        </ul>
      </div>
    </div>
    </>
  );
};

export default BlogSidebar;
