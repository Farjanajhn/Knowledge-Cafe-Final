import React, { useState } from 'react';
import { useEffect } from 'react';

import './ReadTimer.css';

const ReadTimer = ({ time }) => {
  
/*  const [time, setTime] = useState(readTime); */

 
/*   useEffect(() => {
    const getReadTime = JSON.parse(localStorage.getItem('readTime'))
    setTime(getReadTime);
},[readTime]) */

  return (
    <div className="reader">
      <h2>Spent time on read :{time}</h2>
    </div>
  );
};

export default ReadTimer;