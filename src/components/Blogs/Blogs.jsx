import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []); 
  return (
    <div className='blog-container'>

    <div className="blogCart">

        {
          blogs.map(blog => <SingleBlog
            key={blog.id}
            blog={blog}></SingleBlog>)
  }
 
    
    </div>

    <div className="sideCart">
 
    </div>
  </div>
  );
};

export default Blogs;