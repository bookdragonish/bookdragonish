import type { Project } from "../../types/project.ts";
import projectData from "../../api/projectData.json";
import style from "./ConstructionComponent.module.css";
import Excavator from "../ui/Excavator";
import ConstructionCard from "./ConstructionCard/ConstructionCard";

function ConstructionCompontent() {
  const data = projectData;

  return (
    <>
      <h2 className={style.construction_header}>Construction site</h2>
      <p className={style.construction_paragraph}>
        This is the construction site! Here you'll find my hobby projects, some projects are finished, some are
        under construction, and some are still just blueprints.
      </p>
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
      
        <Excavator className={style.padding_bottom}/>
      
    </>
  );
}
export default ConstructionCompontent;
