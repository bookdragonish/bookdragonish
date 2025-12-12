import type { Project } from "../../types/project";
import ConstructionCard from "../ConstructionCard/ConstructionCard";
import projectData from "../../api/projectData.json";
import style from "./ConstructionComponent.module.css";

function ConstructionCompontent() {
  const data = projectData;
  console.log(projectData);

  return (
    <>
      <h2>Construction site</h2>
      <section className={style.card_container}>
        {data.projects.map((project: Project) => (
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
