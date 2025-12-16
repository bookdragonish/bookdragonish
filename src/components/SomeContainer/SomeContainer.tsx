import SkillButton from "../SkillButton/SkillButton";
import style from "./SomeContainer.module.css"

function SomeContainer(){
    return(          <div className={style.some_icons}>
            <SkillButton
              skill={"Mail"}
              logo={"/src/assets/icons/mail.svg"}
              link={"mailto:ingvild.sandven@gmail.com"}
            />
            <SkillButton
              skill={"Linkdin"}
              logo={"/src/assets/icons/linkedin.svg"}
              link={"https://www.linkedin.com/in/ingvild-sandven-17a158289/"}
            />
            <SkillButton
              skill={"GitHub"}
              logo={"/src/assets/icons/github.svg"}
              link={"https://github.com/bookdragonish"}
            />
          </div>)
}export default SomeContainer;