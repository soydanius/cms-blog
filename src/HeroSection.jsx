import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Home Adventures for Tiny Tinkers</h1>

        <div className="hero-introduction">
          <p>
            Where smiles, laughter, and creativity come together. Dive into a
            world of delightful DIY projects, fun activities, and endless
            inspiration for kids of all ages. Let's embark on a colorful journey
            of joy and imagination.
          </p>
        </div>
      </div>
      <img src="/hero.png" alt="happy-kid" />
    </div>
  );
}

export default HeroSection;
