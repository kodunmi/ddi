import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constant'
import BlogRow from "../../components/blog/blog-row";
import axios from "axios";
import { getPosts } from '../../slices/blogSlice';
import { useDispatch, useSelector } from 'react-redux';

const BlogPage = () => {
  const dispatch = useDispatch()
  const post = useSelector(state => state.post)

  const {loadingBlog:loading, postData} = post
  console.log(post);
  // const [posts, setPosts] = useState();
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       `${API_URL}/posts`,
  //     );

  //     setPosts(result.data);
  //     setLoading(false)
  //   };
  //   fetchData();
  // }, [setPosts, setLoading]);


  useEffect(() => {
    dispatch(getPosts())
  }, []);

  return (
    <div>
      {
        loading ? 'loading' : <BlogRow posts={postData} />
      }
    </div>
  )
}

export default BlogPage
