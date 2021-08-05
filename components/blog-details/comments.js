import React from "react";
import comment1 from "../../assets/images/blog/comment-1-1.jpg";
import comment2 from "../../assets/images/blog/comment-1-2.jpg";

const months = ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Comments = ({comments = []}) => {
  return (
    <div>
      <h3 className="blog-details__title">{comments.length} comments</h3>
      <div className="comment-one">
        {
          comments.length < 1 ? 'no comments yet' : comments.map(({name, email, message, created_at})=> 
          
           <div className="comment-one__single">
          <img src={comment1} alt="" />
          <h3>{name}</h3>
          <p className="comment-one__date">{`${new Date(created_at).getDate()}  ${ months[new Date(created_at).getMonth()] }  ${new Date(created_at).getFullYear()}`}</p>
          <p>
            {message}
          </p>
          {/* <a href="#" className="thm-btn ">
            Reply
          </a> */}
        </div>
          ) 
         
        }
      </div>
    </div>
  );
};

export default Comments;
