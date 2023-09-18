import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
});

function CategoryCard() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "categoryCard",
      })
      .then((response) => {
        if (response.items) {
          setCategoryData(response.items);
        }
      })
      .catch((error) => {
        console.error("Error fetching Category Cards:", error);
      });
  }, []);

  const routeNames = ["crafty-corner", "cooking-with-kids", "playtime-ideas"];

  return (
    <div className="category-card-container">
      <h1> Learn & Play!</h1>
      {categoryData.map((category) => (
        <div key={category.sys.id} className="category-card">
          <img
            src={category.fields.image.fields.file.url}
            alt={category.fields.title}
          />
          <h2>{category.fields.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
