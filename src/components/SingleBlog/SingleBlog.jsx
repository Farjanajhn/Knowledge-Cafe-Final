import React from 'react';
import './SingleBlog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';


const SingleBlog = ({ blog,handleAddCart ,handleReadTime}) => {
 
  const handleToast = () => {

 toast("Wow so easy!")
  }
 /*  console.log(blog) */
  return (
    <div className='single_blog'>
    <img className="cover-image" src={blog.cover_image} alt="" />
    <div className='blog-information'>
      
    
        <div className="author-detail">
          <div className='author'>
          <img src={blog.author_image} alt="" />
          </div>
          <div className='author_info'>
            <h4>{blog.author_name}</h4>
          <p>
              { blog.published_date}(4 days ago)
          </p>
          </div>
          </div>
    
      



        <div className="readTime">
          <p onClick={handleToast}> {blog.readTime}(min read)</p>
          <p  onClick={() => handleReadTime(blog.readTime)}><FontAwesomeIcon icon={faBookmark} />
          </p>
        </div>
    </div>
      <h2>{blog.blog_title}</h2>
      <p onClick={() => handleAddCart(blog)} style={{ color: 'blueviolet',  textDecoration: 'underline' }}>Mark as read</p> 
      
  
  </div>

  );
};

export default SingleBlog;