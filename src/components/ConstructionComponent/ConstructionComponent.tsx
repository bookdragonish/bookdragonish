import type { Project } from "../../types/project";
import ConstructionCard from "../ConstructionCard/ConstructionCard";
import projectData from "../../api/projectData.json";
import style from "./ConstructionComponent.module.css";

function ConstructionCompontent() {
  const data = projectData;

  return (
    <>
      <h2 className={style.construction_header}>Construction site</h2>
      <p>These are all my hobby projects. Some are still in process of being developed!</p>
      
      <section className={style.card_container}>
        {Object.values(data.projects).map((project: Project) => (
          <ConstructionCard
            key={project.title}
            title={project.title}
            image={project.image}
            shortDescription={project.shortDescription}
            endDate={project.endDate}
          />
        ))}
      </section>
    </>
  );
}
export default ConstructionCompontent;
