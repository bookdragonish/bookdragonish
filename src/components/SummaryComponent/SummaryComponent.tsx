import skills from "../../api/skillIcons.json";
import type { Skill } from "../../types/skills";
import SkillButton from "../SkillButton/SkillButton";
import style from "./SummaryComponent.module.css";

function SummaryComponent() {
  return (
    <section className={style.summary_container}>
      <h1>Ingvild Sandven</h1>
      <article>
        <img src="/selfie.jpg" alt="selfie image" />
      </article>
      <article>
        <ul>
          <li>Phone number: 47 34 61 32</li>
          <li>Email: ingvild.sandven@gmail.com</li>
          <li>IP address: ...</li>
        </ul>
        <SkillButton skill={"Linkdin"} logo={"/src/assets/icons/linkedin.svg"} link={"https://www.linkedin.com/in/ingvild-sandven-17a158289/"} />
        <SkillButton skill={"GitHub"} logo={"/src/assets/icons/github.svg"} link={"https://github.com/bookdragonish"} />

      </article>
      <article>
        <div className={style.design_container}>
          <h2>Design</h2>
          {skills.skills.design.map((skill: Skill) => (
            <SkillButton
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}{" "}
        </div>

        <div className={style.test_container}>
          <h2>Testing</h2>
          {skills.skills.testing.map((skill: Skill) => (
            <SkillButton
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}
        </div>

        <div className={style.coding_container}>
          <h2>Frontend</h2>
          {skills.skills.frontend.map((skill: Skill) => (
            <SkillButton
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}
        </div>

        <div className={style.coding_container}>
          <h2>Backend</h2>
          {skills.skills.backend.map((skill: Skill) => (
            <SkillButton
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
export default SummaryComponent;
