import React from 'react'
import { useState, useEffect } from 'react';

const BlogPost = (props) => {
   const {blogPosts, i} = props;
  const [date, setDate] = useState('');
   
  useEffect(()=> {
    Object.keys(blogPosts).length === 0 ? setDate('') : setDate(blogPosts[i].fields.date)
  });
  const blogDate = new Date(date);
  const blogYear = blogDate.getFullYear();
  const blogMonth = blogDate.getMonth()+1;
  const blogDay = blogDate.getDate();
  //console.log(blogDate)
    return (  
     
      <div>
        {Object.keys(blogPosts).length == 0 ? "... Loading" : 

             <>
            <h2>{blogPosts[i].fields.title}</h2>
            <img src={blogPosts[i].fields.image.fields.file.url} alt={blogPosts[i].fields.image.fields.title} />
           
            <time date={blogPosts[i].fields.date}>First published: {blogYear}-{blogMonth}-{blogDay}</time>
          
           
            <span>{blogPosts[i].fields.textblock}</span>
            
            </>
        } 
      </div>
    )
}
  

export default BlogPost;