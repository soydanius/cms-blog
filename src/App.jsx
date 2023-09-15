import { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./App.css";
import HeroSection from "./HeroSection";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import AboutUsSection from "./AboutUsSection";

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
    //   <Router>
    //     <div className="App">
    //       <Header />
    //       <Routes>
    //         <Route path="/" element={<HeroSection />} />
    //       </Routes>
    //       <CategoryCard />
    //       <AboutUsSection />
    //     </div>
    //   </Router>
    // );
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CategoryCard />
                <AboutUsSection />
              </>
            }
          />
          <Route path="/about" element={<AboutUsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
