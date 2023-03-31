import React from 'react';
import ('./BookMarkList.css')

const BookMarkList = ({ bookMark }) => {

  return (
    <div className='bookMark-items'>
      <h3>{ bookMark.blog_title}</h3>
      
    </div>
  );
};

export default BookMarkList;