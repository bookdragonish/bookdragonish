import { useEffect, useRef, useState } from "react";
import style from "./HighlightComponent.module.css";

const highlights = [
  <>
    I have a Bachelor's in <span>Informatics from NTNU</span> and am currently
    pursuing a <span>Master's in Informatics</span>
  </>,

  <>
    In the summer of 2026, I worked as a{" "}
    <span>Full-Stack Developer intern</span> at the startup Social Minds
  </>,

  <>
    I have experience developing both <span>university projects</span> and{" "}
    <span>independent applications</span> from idea to deployment
  </>,

  <>
    I developed and evaluated <span>AI integrations</span>, including Gemini and
    NorLLM, as part of my bachelor's project
  </>,

  <>
    I thrive in <span>team environments</span>, and many of my projects are
    built in collaboration with others
  </>,

  <>
    I am especially interested in <span>software development</span>,{" "}
    <span>UI/UX</span>, and building practical applications
  </>,
];

function HighlightComponent() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Remove this line if you want the animation
          // to replay every time you scroll into view.
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${style.highlight_section} ${
        isVisible ? style.visible : ""
      }`}
    >
      <article className={style.highlight_title_container}>
        <span className={style.line}></span>
        <h2 className={style.highlight_title}>Highlights</h2>
      </article>

      <p>These keypoint summarize my page, if you have limited time!</p>

      <ul>
        {highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
}

export default HighlightComponent;