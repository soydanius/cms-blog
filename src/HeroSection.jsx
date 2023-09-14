import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import "./HeroSection.css";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
});

function HeroSection() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "heroSection",
      })
      .then((response) => {
        if (response.items && response.items[0]) {
          setHeroData(response.items[0].fields);
        }
      })
      .catch((error) => {
        console.error("Error fetching Hero Section:", error);
      });
  }, []);

  const renderRichText = (richTextField) => {
    const options = {
      renderMark: {
        [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      },
    };

    return documentToReactComponents(richTextField, options);
  };

  if (!heroData) {
    return null;
  }
  const { title, picture, introduction } = heroData;
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        <div className="hero-introduction">{renderRichText(introduction)}</div>
      </div>
      <img src={picture.fields.file.url} alt={picture.fields.description} />
    </div>
  );
}

export default HeroSection;
