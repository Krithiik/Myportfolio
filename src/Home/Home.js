import React, { useEffect } from "react";
import "./Home.scss";
import "../blast.scss";
import logo from "./workillus.jpg";
import bounce from "../bounce.js";
export default function Home() {
  useEffect(() => {
    bounce();
    const hi = document.querySelector(".hi");
    hi.classList.add("sayhi");
    setTimeout(() => {
      hi.classList.remove("sayhi");
    }, 3000);
    const s = document.querySelector(".klast");
    s.style.opacity = 1;
    s.style.transform = "rotate(360deg)";
    return () => {
      s.style.opacity = 0;
      s.style.transform = "rotate(0deg)";
    };
  }, []);
  return (
    <div id="home" className="home-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#0a2540"
          fill-opacity="1"
          d="M0,64L48,85.3C96,107,192,149,288,144C384,139,480,85,576,64C672,43,768,53,864,69.3C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div class="content container row">
        <div class="col-md-6 d-inline-block">
          <div className="text-zone">
            <h1 className="blast-root ">
              <span className="blast">H</span>
              <span className="blast">i</span>
              <span className="blast">!</span>
              <div class="hi">
                <span class="hi">👋</span>
              </div>
              <br />
              <span className="blast">I</span>
              <span className="blast">’</span>
              <span className="blast">m&nbsp;</span>
              <div class="name">
                <span className="klast">K</span>
                <span className="blast">r</span>
                <span className="blast">i</span>
                <span className="blast">t</span>
                <span className="blast">h</span>
                <span className="blast">i</span>
                <span className="blast">i</span>
                <span className="blast">k</span>
              </div>
            </h1>
          </div>
          <p class="description">
            A Web Developer and a Machine learning enthusiast{" "}
          </p>
          <div class="links">
            <a href="https://www.linkedin.com/in/krithiik-s-412a91195/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Krithiik">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 ">
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
}
