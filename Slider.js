import React from "react";
import LeftArrow from "../images/icon-angle-left.svg";
import RightArrow from "../images/icon-angle-right.svg";
import Hero1 from "../images/desktop-image-hero-1.jpg";
import Hero2 from "../images/desktop-image-hero-2.jpg";
import Hero3 from "../images/desktop-image-hero-3.jpg";

function Slider() {
  // const [state, setState] = useState([]);

  const leftArrow = <img src={LeftArrow} />;
  const rightArrow = <img src={RightArrow} />;

  return (
    <div className="slider">
      <header style={{ backgroundImage: "url(" + Hero1 + ")" }}>
        <h1 className="logo">room</h1>
        <nav>
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <div className="slider-buttons">
        <button className="left">{leftArrow}</button>
        <button className="right">{rightArrow}</button>
      </div>
    </div>
  );
}

export default Slider;
