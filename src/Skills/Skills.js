import React, { useEffect, useState } from "react";
import "./Skills.scss";
//uses AOS for flip animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
export default function Skills() {
  const [ref, inView] = useInView();
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
    if (inView) {
      //Only once on-load flip
      document.getElementById("skills-div").setAttribute("data-aos", "none");
    }
  });
  return (
    <>
      <div
        id="skills"
        className="skills d-flex flex-column justify-content-center align-items-center"
      >
        <div className="skillTitle d-inline-block">
          <span className="blast">S</span>
          <span className="blast">k</span>
          <span className="blast">i</span>
          <span className="blast">l</span>
          <span className="blast">l</span>
          <span className="blast">s&nbsp;</span>
          <span className="blast">&&nbsp;</span>
          <span className="blast">E</span>
          <span className="blast">x</span>
          <span className="blast">p</span>
          <span className="blast">e</span>
          <span className="blast">r</span>
          <span className="blast">i</span>
          <span className="blast">e</span>
          <span className="blast">n</span>
          <span className="blast">c</span>
          <span className="blast">e</span>
        </div>
        <section
          id="skills-div"
          ref={ref}
          data-aos="flip-up"
          className="skillsContainer"
        >
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Web Development
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Data Science
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <section className="frontend  text-center">
                <h1>Front-end</h1>
                <ul className="d-flex flex-column px-3">
                  <h3>Framework</h3>
                  <li>
                    <i class="fab fa-react"></i> ReactJS
                  </li>
                  <li>
                    <i class="fab fa-angular"></i> AngularJS
                  </li>
                  <li>NextJs</li>

                  <h3>Design tools</h3>
                  <div className="">
                    <li>
                      <i class="fab fa-figma"></i> Figma
                    </li>
                    <li>Framer-motion</li>
                  </div>
                </ul>
              </section>
              <section className="backend text-center">
                <h1>Back-end</h1>
                <ul className="d-flex flex-column px-3">
                  <li>
                    <i class="fab fa-node-js"></i> NodeJS
                  </li>
                  <li>ExpressJS</li>
                  <li>Django</li>
                  <h3>Database systems</h3>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                </ul>
              </section>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <section className="datascience text-center">
                <ul className="d-flex flex-column px-3">
                  <h1>
                    <i class="fas fa-caret-right"></i> Statistics and
                    Mathematics
                  </h1>
                  <h1>
                    <i class="fas fa-caret-right"></i> Data Visualization
                  </h1>
                  <h1>
                    <i class="fas fa-caret-right"></i> Machine Learning
                  </h1>
                  <h1>
                    <i class="fas fa-caret-right"></i> NLP
                  </h1>
                  <h1>
                    <i class="fas fa-caret-right"></i> Deep learning
                  </h1>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
