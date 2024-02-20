import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CookingWithKidsPage from "./pages/CookingWithKidsPage";
import CraftyCornerPage from "./pages/CraftyCornerPage";
import PlaytimeIdeasPage from "./pages/PlaytimeIdeasPage";
import AboutUsPage from "./pages/AboutUsPage";
import { FaRegFileCode } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="cooking-with-kids" element={<CookingWithKidsPage />} />
        <Route path="crafty-corner" element={<CraftyCornerPage />} />
        <Route path="playtime-ideas" element={<PlaytimeIdeasPage />} />
      </Routes>
    </div>
  );
}

export default App;
