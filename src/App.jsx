import { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CookingWithKidsPage from "./pages/CookingWithKidsPage";
import CraftyCornerPage from "./pages/CraftyCornerPage";
import PlaytimeIdeasPage from "./pages/PlaytimeIdeasPage";
import AboutUsPage from "./pages/AboutUsPage";

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
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route
          path="cooking-with-kids"
          element={
            <CookingWithKidsPage
              blogPosts={blogPosts}
              extBlogPosts={extBlogPosts}
            />
          }
        />
        <Route
          path="crafty-corner"
          element={
            <CraftyCornerPage
              blogPosts={blogPosts}
              extBlogPosts={extBlogPosts}
            />
          }
        />
        <Route
          path="playtime-ideas"
          element={
            <PlaytimeIdeasPage
              blogPosts={blogPosts}
              extBlogPosts={extBlogPosts}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
