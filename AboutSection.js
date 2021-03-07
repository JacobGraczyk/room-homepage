import React from "react";
import imageAboutDark from "../images/image-about-dark.jpg";
import imageAboutLight from "../images/image-about-light.jpg";

function AboutSection() {
  return (
    <div className="about-section">
      <img src={imageAboutDark}></img>
      <div>
        <h1>about our furniture</h1>
        <p>
          Our multifunction collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={imageAboutLight}></img>
    </div>
  );
}

export default AboutSection;
