import SkillButton from "../SkillButton/SkillButton";
import style from "./SomeContainer.module.css";

function SomeContainer() {
  return (
    <div className={style.some_icons}>
      <SkillButton
        skill={"Mail"}
        logo={"/icons/mail.svg"}
        link={"mailto:ingvild.sandven@gmail.com"}
      />
      <SkillButton
        skill={"Linkdin"}
        logo={"/icons/linkedin.svg"}
        link={"https://www.linkedin.com/in/ingvild-sandven-17a158289/"}
      />
      <SkillButton
        skill={"GitHub"}
        logo={"/icons/github.svg"}
        link={"https://github.com/ingvildsandven"}
      />
    </div>
  );
}
export default SomeContainer;
