import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import HeroSection from "../HeroSection";
import CategoryCard from "../CategoryCard";
import AboutUsSection from "../AboutUsSection";
import Footer from "../Footer";
import BlogSlider from "../BlogSlider";

const HomePage = () => {
  const [allBlogPosts, setAllBlogPosts] = useState([]);

  useEffect(() => {
    const getAllBlogPosts = async () => {
      const response = await axios.get(
        "http://localhost:3000/blog"
      );
      //console.log(response.data);
      setAllBlogPosts(response.data);
    };

    getAllBlogPosts();
  }, []);



  return (
    <>
      <Header />
      <HeroSection />
      <CategoryCard />
      <BlogSlider allBlogPosts={allBlogPosts}/>
      <AboutUsSection />
      <Footer />
    </>
  );
};

export default HomePage;
