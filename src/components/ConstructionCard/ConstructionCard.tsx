import style from "./ConstructionCard.module.css";
import type { Project } from "../../types/project";
import { Link } from "react-router";

function ConstructionCard({
  title,
  image,
  shortDescription,
  endDate,
}: Pick<Project, "title" | "image" | "endDate" | "shortDescription">) {

  const url = title.replaceAll(" ", "_");

  return (
    <Link to={url} className={style.card}>
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <img src={image[0]} alt={title} />
      <img className={!endDate ? style.construction_banner: style.no_construction_banner} src="construction_tape.png" />
    </Link>
  );
}

export default ConstructionCard;


