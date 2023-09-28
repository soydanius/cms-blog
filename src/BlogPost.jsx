import React from "react";
import { useState, useEffect } from "react";
import "/src/pages/CategoryPage.css";

const BlogPost = (props) => {
  const { blogPosts, i} = props;
  const [date, setDate] = useState("");

  useEffect(() => {
    blogPosts.length === 0
      ? setDate("")
      : setDate(blogPosts[i].date);
  });
  const blogDate = new Date(date);
  const blogYear = blogDate.getFullYear();
  const blogMonth = blogDate.getMonth() + 1;
  const blogDay = blogDate.getDate();
 
 
  return (

    <div className="blog-post-container">
      {blogPosts.length === 0 ? (
        "... Loading"
      ) : (
        <>
          <div className="blog-post-left">
            <img
              src={blogPosts[i].image}
              alt={blogPosts[i].title}
              className="blog-post-image"
            />
            <time date={blogPosts[i].date} className="blog-post-time">
              First published: {blogYear}-{blogMonth}-{blogDay}
            </time>
          </div>
          <div className="blog-post-right">
            <h2 className="blog-post-title">{blogPosts[i].title}</h2>
            <p className="blog-post-text">{blogPosts[i].textblock}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPost;
