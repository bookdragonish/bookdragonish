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
          src="/selfie.jpg"
          alt="selfie image"
          className={style.selfie_img}
        />
        <SomeContainer />
      </article>
      <article className={style.skill_container}>
        {/*TODO: Remove this box*/}
        <div className={style.icons_container}>
         
          <div className={style.design_container}> 
            <h3>Design</h3>
            {skills.skills.design.map((skill: Skill) => (
              <SkillButton
                skill={skill.skill}
                logo={skill.logo}
                link={skill.link}
              />
            ))}
          </div>

          <div className={style.test_container}>
            <h3>Testing</h3>
            {skills.skills.testing.map((skill: Skill) => (
              <SkillButton
                skill={skill.skill}
                logo={skill.logo}
                link={skill.link}
              />
            ))}
          </div>

          <div className={style.coding_container}>
            <h3>Frontend</h3>
            {skills.skills.frontend.map((skill: Skill) => (
              <SkillButton
                skill={skill.skill}
                logo={skill.logo}
                link={skill.link}
              />
            ))}
          </div>

          <div className={style.backend_container}>
            <h3>Backend</h3>
            {skills.skills.backend.map((skill: Skill) => (
              <SkillButton
                skill={skill.skill}
                logo={skill.logo}
                link={skill.link}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
export default SummaryComponent;
