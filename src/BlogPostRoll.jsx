import React from 'react';
import { useState, useEffect } from 'react';

const BlogPostRoll = (blogPosts) => {
   
  const [blogsArray, setBlogsArray] = useState([]);

  
  
   
  useEffect(()=> {
    Object.keys(blogPosts)[0][1].length === 0 ? setBlogsArray([]) : setBlogsArray(Object.entries(blogPosts)[0][1])
  });

  //console.log(blogsArray)
  

    return (
     
      <>
        {blogsArray.length == 0 ? "... Loading Blog Posts" :
        blogsArray.map((post)=> (
          <div className="blogPosts" id={post.sys.id}>
            <h2>{post.fields.title}</h2>
            <time date={post.fields.date}>First published: {new Date(post.fields.date).getFullYear()}-{new Date(post.fields.date).getMonth()+1}-{new Date(post.fields.date).getDay()}</time>
            <img src={post.fields.image.fields.file.url} alt={post.fields.image.fields.title} />
            
            <span>{post.fields.textblock}</span>
            <hr /> 
  
        </div>
        )
        )}  
      </>
    )
}

   

export default BlogPostRoll;