import React from 'react'

const BlogPost = (blogPosts) => {

    // console.log(blogPosts)
    // console.log(blogPosts[0].fields.image.fields.file.url)

    

  return (
     
    <div>
       <h2>{blogPosts[0].fields.title}</h2>
       <img src={blogPosts[0].fields.image.fields.file.url} alt="" />
       <hr />
       <span>{blogPosts[0].fields.textblock}</span>
       <hr />
    </div>
    
  )
}

export default BlogPost