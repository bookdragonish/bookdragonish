import ExperienceCard from "./ExperienceCard/ExperienceCard";
import style from "./ExperienceComponent.module.css";
import InternshipCard from "./InternshipCard/InternshipCard";

function ExperienceComponent() {
  return (
    <section className={style.experience}>
      <h2 className={style.experience_title}>Experience</h2>
      <p>
        Here you can find summaries on some of my relevant job and voluntary
        experiences.
      </p>
      <div className={style.experience_card_container}>
        <ExperienceCard
          img_link="https://i.postimg.cc/W473Bst9/graphcore.webp"
          alt="Graphcore logo"
          title="Graphcore"
          page_link="/experience/Graphcore"
        />
        <ExperienceCard
          img_link="https://i.postimg.cc/Pxxsf2Lm/online-dark.png"
          page_link="/experience/Online"
          alt="Online logo"
          title="Online"
        />
      </div>
      <h2 className={style.experience_title}>Internship</h2>
      <InternshipCard
        img_link="https://i.postimg.cc/ZRj8P4QY/somi.png"
        page_link="/project/Social_Minds"
        alt="Social Minds logo"
        title="Social Minds"
      />
    </section>
  );
}
export default ExperienceComponent;
