import "./Skills.scss";
import { useEffect, useState, useRef } from "react";
export default function Skills() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-200px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("span").forEach((el) => {
        el.classList.add("slide-in");
      });
    }
  }, [isIntersecting]);
  return (
    <main ref={ref}>
      <div className="Skills-container">
        <h1 className="Skills-heading">Skills</h1>
        <span class="header_line"></span>
        <div className="skillsGrid">
          <span class="lan chip">C++</span>
          <span class="lan chip">Python</span>
          <span class="lan chip">Java</span>
          <span class="lan chip">JavaScript</span>

          <span class="web chip">HTML</span>
          <span class="web chip">CSS</span>
          <span class="web chip">Node.js</span>
          <span class="web chip">Express</span>
          <span class="web chip">React</span>
          <span class="web chip">Tailwind</span>
          <span class="web chip">MongoDB</span>
          <span class="web chip">SQL</span>
          <span class="web chip">Django</span>

          <span class="ds chip">Numpy</span>
          <span class="ds chip">Pandas</span>
          <span class="ds chip">Matplotlib</span>
          <span class="ds chip">Scikit-learn</span>
          <span class="ds chip">EDA</span>
          <span class="ds chip">Tensorflow</span>
          <span class="ds chip">OpenCV</span>
          <span class="ds chip">NLP</span>

          <span class="ss chip">Creativity</span>
          <span class="ss chip">Problem-solving</span>
          <span class="ss chip">Communication</span>
          <span class="ss chip">Team work</span>
          <span class="ss chip">Decision making</span>
        </div>
      </div>
    </main>
  );
}
