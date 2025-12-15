import ConstructionCompontent from "../../components/ConstructionComponent/ConstructionComponent";
import ExperienceComponent from "../../components/ExperienceComponent/ExperienceComponent";
import SummaryComponent from "../../components/SummaryComponent/SummaryComponent";
import style from "./HomePage.module.css";

function HomePage() {
  return (
    <main>
      <SummaryComponent />
      <div className={style.overlay}>
        <ConstructionCompontent />
        <ExperienceComponent />
      </div>
    </main>
  );
}

export default HomePage;
