import type { Skill } from "../../types/skills";
import style from "./SkillButton.module.css"


function SkillButton(skill: Skill){
    const alt = "logo of" + skill.skill
    return(
        <a href={skill.link} className={style.button}>
            <img src={skill.logo} alt={alt} />
        </a>
    )
} export default SkillButton;