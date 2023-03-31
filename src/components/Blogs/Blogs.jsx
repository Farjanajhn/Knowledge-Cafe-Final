import React, { useState } from 'react';
import { useEffect } from 'react';
import BookMarkList from '../BookMarkList/BookMarkList';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarkList, setBookMarkList] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []); 


  const handleAddCart = (blog) => {
    const newBookMarkList = [...bookMarkList, blog];
    setBookMarkList(newBookMarkList);
  }
  return (
    <div className='blog-container'>

    <div className="blogCart">

        {
          blogs.map(blog => <SingleBlog
            key={blog.id}
            blog={blog}
          handleAddCart={handleAddCart}></SingleBlog>)
  }
 
    
    </div>

      <div className="sideCart">
        <h2 className='BookMarkCounter'>Bookmarked Blogs :{bookMarkList.length }</h2>
        
        {
          bookMarkList.map(bookMark=><BookMarkList bookMark={bookMark}></BookMarkList>)
 }
    </div>
  </div>
  );
};

export default Blogs;