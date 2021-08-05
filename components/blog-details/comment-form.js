import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { API_URL } from "../../constant";

const CommentForm = ({ id }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const route = useRouter();

  const handleComment = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert('')
    // console.log(id);
    try {
     let res = await axios.post(`${API_URL}/comment/${id}`, {
        email: email,
        name: name,
        message: message
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      })

      
      setLoading(false)
      setAlert(['success','Reply submitted successfully'])
      
      // console.log(res);
    } catch (error) {
      setAlert(['error','Error submitting reply'])
    }

  }


  return (
    <div>
      <h3 className="blog-details__title">Leave a comment</h3>
      <h6 className='text-center mb-4'>{alert !== '' ? alert[1] :''}</h6>
      <form
        onSubmit={(e) => handleComment(e)}
        className="contact-form-validated contact-page__form form-one mb-80"
      >
        <div className="form-group">
          <div className="form-control">
            <input type="text" name="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-control">
            <input type="text" name="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-control form-control-full">
            <textarea name="message" placeholder="Write a Message" onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <div className="form-control form-control-full">
            <button type="submit" className="thm-btn ">
                {loading ?'loading':' Submit Comment' }
            </button>
          </div>
        </div>
      </form>
      <div className="result"></div>
    </div>
  );
};

export default CommentForm;
