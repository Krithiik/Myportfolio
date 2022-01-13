import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm px-5 nav-col navbar-dark ">
        <div class="container-fluid ">
          <a class="brand">Krithiik</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-1 mb-lg-0">
              <li class="nav-item">
                <Link activeClass="active" to="home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="about">About</Link>
              </li>
              <li class="nav-item">
                <Link to="skills">Skills</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
}
