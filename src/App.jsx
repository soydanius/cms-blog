import { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./App.css";
import HeroSection from "./HeroSection";
import Header from "./Header";
import BlogPost from "./BlogPost";
import BlogPostRoll from "./BlogPostRoll";
import ExtendedBlogPost from "./ExtendedBlogPost";
import ExtendedBlogPostRoll from "./ExtendedBlogPostRoll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
});

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [extBlogPosts, setExtBlogPosts] = useState([]);
  const [heroSection, setHeroSection] = useState([]);
  const [categoryCards, setCatergoryCards] = useState([]);
  const [aboutUs, setAboutUs] = useState([]);
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        sortAllEntries(response.items); // sorts entries into each content type
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Sorting functions
  const entriesFilter = (entries, contentType) =>
    entries.filter((item) => item.sys.contentType.sys.id === contentType);

  const sortAllEntries = (entries) => {
    setBlogPosts(entriesFilter(entries, "blogPost"));
    setExtBlogPosts(entriesFilter(entries, "extendedBlogPost"));
    //setHeroSection(entriesFilter(entries, "heroSection"));
    setCatergoryCards(entriesFilter(entries, "categoryCard"));
    setAboutUs(entriesFilter(entries, "aboutUs"));
    setFooter(entriesFilter(entries, "footer"));
  };

  return (
    
    <Router>
      <div className="App">
        <Header />
       
        <ExtendedBlogPostRoll extBlogPosts={extBlogPosts} />
        
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<Header />} />
          {/* <Route path="/xxx/blog/i" element={<BlogPost blogPosts={blogPosts} i={0}/>}/> */}
          {/* <Route path="/XYZ/blogPosts" element={<BlogPostRoll blogPosts={blogPosts}/>} /> */}
          {/* <Route path="/XYZ/extendedBlogPost/j" element={<ExtendedBlogPost blogPosts={blogPosts} i={0}/>} /> */}

        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
