import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./AboutUsSection.css";
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
});

function AboutUsSection() {
  return (
    <div className="about-us-section">
      <h1>About Us</h1>
      <hr />
      <div className="description">
        <p>
          At Happy Homemade, we're dedicated to unleashing creativity and
          providing inspiration. Our platform offers a diverse range of creative
          content, from DIY projects to imaginative ideas for kids and adults
          alike. Join us in exploring a world of endless possibilities and let
          your creative journey begin with us.
        </p>
      </div>
    </div>
  );
}

export default AboutUsSection;
