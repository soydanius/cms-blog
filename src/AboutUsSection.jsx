import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./AboutUsSection.css";
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
});

function AboutUsSection() {
  const [aboutUsData, setAboutUsData] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "aboutUs",
      })
      .then((response) => {
        if (response.items && response.items[0]) {
          setAboutUsData(response.items[0].fields);
        }
      })
      .catch((error) => {
        console.error("Error fetching About Us data:", error);
      });
  }, []);

  if (!aboutUsData) {
    return null;
  }

  const { title, description } = aboutUsData;

  const renderRichText = (richTextField) => {
    const options = {};

    return documentToReactComponents(richTextField, options);
  };

  return (
    <div className="about-us-section">
      <h1>{title}</h1>
      <hr />
      <div className="description">{renderRichText(description)}</div>
    </div>
  );
}

export default AboutUsSection;
