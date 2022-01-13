import React, { useEffect } from "react";
import "./About.scss";
import aboutimg from "./aboutimg.PNG";
//using react-intersection-observer for scroll in-view tracking and framer-motion for animation
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion/dist/es/index";

const animateFadeLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
const animateFadeRight = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};
export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="about">
      <svg
        id="aboutTopSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300"
      >
        <path
          fill="#0a2540"
          fill-opacity="1"
          d="M0,288L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
      <div id="about" className="about-container">
        <div className=" container row">
          <motion.section
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animateFadeLeft}
            className="about-title col-lg-6"
          >
            <div className="who d-inline-block">
              <span className="blast">W</span>
              <span className="blast">h</span>
              <span className="blast">o</span>
              <span> </span>
              <span className="blast">A</span>
              <span className="blast">m</span>
              <span> </span>
              <span className="blast">I</span>
              <span> </span>
              <span className="blast">?</span>
              <span class="thinkEmoji">🤔</span>
            </div>
            <div className="aboutimg d-none d-lg-block">
              <img class="img-fluid" src={aboutimg}></img>
            </div>
          </motion.section>

          <motion.section
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animateFadeRight}
            className="aboutme col-lg-6  d-flex justify-content-center align-items-center"
          >
            <p>
              Currently pursuing Integrated M-tech CSE with specialization in
              Data science at VIT, Vellore. Immensely interested in accquiring
              new skills. Currently into Web development using MERN stack and
              Data visualization, Machine learning using python. Being an
              aspiring student,young, energetic, I look forward to learn more
              and more, gain experience.
            </p>
          </motion.section>
        </div>
      </div>
      <svg
        id="bottomSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 250"
      >
        <path
          fill="#0a2540"
          fill-opacity="1"
          d="M0,192L1440,96L1440,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
