import { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryPage.css";
import Header from "../Header";
import BlogPost from "../BlogPost";
import Footer from "../Footer";

const PlaytimeIdeasPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const response = await axios.get(
        "http://localhost:3000/blog/playtime_ideas"
      );
      //console.log(response.data);
      setBlogPosts(response.data);
    };
    getBlogPosts();
  }, []);

  return (
    <>
      <Header />
      <h1 className="category-title">Playtime Ideas</h1>
      <div>
        {
        blogPosts.map((index)=>(<BlogPost blogPosts={blogPosts} i={blogPosts.indexOf(index)}/>))
        }
       
      </div>
      <Footer />
    </>
  );
};

export default PlaytimeIdeasPage;
