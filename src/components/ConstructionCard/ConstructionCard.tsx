import style from "./ConstructionCard.module.css";
import type { Project } from "../../types/project";
import { Link } from "react-router";

function ConstructionCard({
  title,
  github,
  image,
  shortDescription,
}: Pick<Project, "title" | "github" | "image" | "shortDescription">) {

    const url = title.replaceAll(" ", "_");

    return (
    <Link to={url} className={style.card}>
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      {image?.[0] && <img src={image[0]} alt={title} />}
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </Link>
  );
}

export default ConstructionCard;
