import ExperienceCard from "../ExperienceCard/ExperienceCard";
import style from "./ExperienceComponent.module.css";

function ExperienceComponent() {
  return (
    <section className={style.experience}>
      <h2 className={style.experience_title}>Experience</h2>
      <div className={style.experience_card_container}>
        <ExperienceCard
          img_link="/src/assets/graphcore/graphcore.webp"
          alt="Graphcore logo"
          title="Graphcore"
          page_link="/experience/Graphcore"
        />
        <ExperienceCard
          img_link="/src/assets/online/online_dark.webp"
          page_link="/experience/Online"
          alt="Online logo"
          title="Online"
        />
      </div>
    </section>
  );
}
export default ExperienceComponent;
