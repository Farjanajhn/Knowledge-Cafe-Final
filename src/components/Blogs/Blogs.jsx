import React, { useState } from 'react';
import { useEffect } from 'react';
import BookMarkList from '../BookMarkList/BookMarkList';

import ReadTimer from '../ReadTimer/ReadTimer';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarkList, setBookMarkList] = useState([]);
  const [readTime, setReadTime] = useState("");
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []); 




  const handleAddCart = (blog) => {
    const newBookMarkList = [...bookMarkList, blog];
    setBookMarkList(newBookMarkList);
  }

  const handleReadTime = (readTime) => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'))
    if(previousReadTime)
    {
      const sum = previousReadTime + readTime;
      localStorage.setItem('readTime', sum);
      setReadTime(sum);
}
   
    else {
      localStorage.setItem('readTime', readTime)
      setReadTime(readTime);
    }
  }

  return (
    <div className='blog-container'>

    <div className="blogCart">

        {
          blogs.map(blog => <SingleBlog
            key={blog.id}
            blog={blog}
          handleReadTime={handleReadTime}
          handleAddCart={handleAddCart}></SingleBlog>)
  }
 
    
    </div>


      <div className="sideCart">
     
        
          <ReadTimer readTime={readTime}> </ReadTimer>
        
        <h2 className='BookMarkCounter'>Bookmarked Blogs :{bookMarkList.length }</h2>
        
        {
          bookMarkList.map(bookMark=><BookMarkList bookMark={bookMark}></BookMarkList>)
 }
    </div>
  </div>
  );
};

export default Blogs;