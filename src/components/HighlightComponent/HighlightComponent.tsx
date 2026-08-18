import style from "./HighlightComponent.module.css";

const highlights = [
  "I have a Bachelor's in Informatics from NTNU and am currently pursuing a Master's in Informatics",

  "In the summer of 2026, I worked as a Full-Stack Developer intern at the startup Social Minds",

  "I have experience developing both university projects and independent applications from idea to deployment",

  "I developed and evaluated AI integrations, including Gemini and NorLLM, as part of my bachelor's project",

  "I thrive in team environments, and many of my projects are built in collaboration with others",

  "I am especially interested in software development, UI/UX, and building practical applications",
];

function HighlightComponent() {
  return (
    <section className={style.highlight_section}>
      <h2 className={style.highlight_title}>Highlights</h2>
      <p>
        These keypoint summarize my page, if you do not have time to read it
        all!
      </p>

      <ul>
        {highlights.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </section>
  );
}
export default HighlightComponent;
