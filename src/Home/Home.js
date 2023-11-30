import React, { useEffect } from "react";
import "./Home.scss";
import logo from "./workillus.jpg";
import bounce from "../bounce.js";
import Plane from "../plane/Plane";
const RESUME_LINK =
  "https://drive.google.com/file/d/1D_gIlKABPmbONR7RNiOmaEAtxdHVU_hj/view";
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
              <a href="https://leetcode.com/Krithiik/">
                <svg
                  width="18"
                  height="111"
                  viewBox="0 0 95 111"
                  fill="#0d6efd"
                  xmlns="http://www.w3.org/2000/svg"
                  class="pb-2 mx-2"
                >
                  <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                  ></path>
                </svg>
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
