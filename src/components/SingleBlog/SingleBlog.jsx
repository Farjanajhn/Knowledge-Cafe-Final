import React from 'react';
import './SingleBlog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';

const SingleBlog = ({ blog,handleAddCart ,handleReadTime}) => {
 
 /*  console.log(blog) */
  return (
    <div className='single_blog'>
    <img className="cover-image" src={blog.cover_image} alt="" />
    <div className='blog-information'>
      
    
        <div className="author-detail">
          <div className='author'>
          <img src={blog.author_image} alt="" />
          </div>
          <div>
            <p>{blog.author_name}</p>
          <p>
              { blog.published_date}(4 days ago)
          </p>
          </div>
          </div>
    
      



        <div className="readTime">
          <p>{blog.readTime}(min read)</p>
          <p onClick={()=>handleReadTime(blog.readTime)}><FontAwesomeIcon icon={faBookBookmark} /></p>
        </div>
    </div>
      <h2>{blog.blog_title}</h2>
    <p onClick={()=>handleAddCart(blog)}>Mark as read</p> 
    
  </div>

  );
};

export default SingleBlog;