import type { Skill } from "../../types/skills";
import style from "./SkillButton.module.css";

function SkillButton(skill: Skill) {
  const alt = "logo of " + skill.skill;
  return (
    <span className={style.logo}>
      <a
        href={skill.link}
        className={style.button}
        target="_blank"
        rel="noopener noreffer"
      >
        <img src={skill.logo} alt={alt} />
        <p>{skill.skill}</p>
      </a>
    </span>
  );
}
export default SkillButton;
