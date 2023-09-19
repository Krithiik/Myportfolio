import { useEffect } from "react";
import "./About.scss";
export default function About() {
  const handleScroll = () => {
    const elements = document.querySelectorAll(".bg-static");
    const windowTop = window.scrollY;

    elements.forEach((element) => {
      const elementTop = element.offsetTop;
      const leftPosition = windowTop - elementTop;

      const bgMove = element.querySelector(".bg-move");
      if (bgMove) {
        bgMove.style.left = `${leftPosition}px`;
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="About-container">
      <div className="section bg-static">
        <div className="bg-move about-plane"></div>
      </div>
      <h1 className="about-heading">About</h1>
      <span class="header_line"></span>
      <div className="about-content">
        <p>
          Hey there! I'm Krithiik, a computer science enthusiast with a passion
          for all things tech and a heart that beats to the rhythm of music. By
          day, I'm your friendly neighborhood full-stack web developer, crafting
          digital experiences that dance on the web. I'm that kind of developer
          who loves turning coffee into code and pixels into beautiful,
          user-friendly interfaces.
        </p>
        <p>
          But wait, there's more! By night, I transform into an ML wizard,
          brewing up algorithms to decipher the secrets of data. From predicting
          the stock market to teaching a computer to recognize cat memes, I'm
          always up for a challenge in the world of machine learning.
        </p>
        <p>
          Now, let's talk tunes! When I'm not coding or diving into the world of
          machine learning, you'll find me lost in the melodies of my favorite
          tunes. Whether I'm cranking up the volume on a road trip or relaxing
          with some jazz while coding, you can bet that music plays a big role
          in my creative process.
        </p>
        <p>
          So, whether you're here to check out my coding adventures, learn about
          my machine learning experiments, or just share your latest music
          discovery, explore, enjoy, and don't hesitate to reach out. Let's make
          some digital magic together!
        </p>
      </div>
    </div>
  );
}
