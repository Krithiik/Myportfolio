import React, { useEffect } from "react";
import "./Home.scss";
import logo from "./workillus.jpg";
import bounce from "../bounce.js";
import Plane from "../plane/Plane";
const RESUME_LINK =
  "https://drive.google.com/file/d/1D_gIlKABPmbONR7RNiOmaEAtxdHVU_hj/view?usp=sharing";
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
      <a className="btn resumebtn" href={RESUME_LINK}>
        RESUME
      </a>
      <Plane />
      <div class="content container row">
        <div class="col-md-6 d-inline-block">
          <div className="text-zone row">
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
        </div>
        <div class="col-md-6 ">
          <img className="home-pic" src={logo} alt="...."></img>
        </div>
      </div>
    </div>
  );
}
