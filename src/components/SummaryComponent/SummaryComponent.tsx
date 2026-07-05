import skills from "../../api/skillIcons.json";
import type { Skill } from "../../types/skills";
import SkillButton from "../SkillButton/SkillButton";
import SomeContainer from "../SomeContainer/SomeContainer";
import style from "./SummaryComponent.module.css";

function SummaryComponent() {
  return (
    <section className={style.summary_container}>
      <article className={style.personal_info_container}>
        <img
          src="/selfie.webp"
          alt="selfie image"
          loading="lazy"
          fetchPriority="high"
          className={style.selfie_img}
        />
        <SomeContainer />
      </article>
      <article className={style.skill_container}>
        <div className={style.large_container}>
          <h2>Languages</h2>
          {skills.skills.languages.map((skill: Skill) => (
            <SkillButton
              key={skill.skill}
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}
        </div>

        <div className={style.small_container}>
          <h2>Frontend</h2>
          {skills.skills.frontend.map((skill: Skill) => (
            <SkillButton
              key={skill.skill}
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}
        </div>

        <div className={style.small_container}>
          <h2>Testing</h2>
          {skills.skills.testing.map((skill: Skill) => (
            <SkillButton
              key={skill.skill}
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}
        </div>

        <div className={style.small_container}>
          <h2>Backend</h2>
          {skills.skills.backend.map((skill: Skill) => (
            <SkillButton
              key={skill.skill}
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}
        </div>

        <div className={style.small_container}>
          <h2>Tools</h2>
          {skills.skills.tools.map((skill: Skill) => (
            <SkillButton
              key={skill.skill}
              skill={skill.skill}
              logo={skill.logo}
              link={skill.link}
            />
          ))}
        </div>

        <div className={style.large_container}>
          <h2>Databases</h2>
          {skills.skills.databases.map((skill: Skill) => (
            <SkillButton
              key={skill.skill}
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
