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
    <article className={style.card_container}>
      <Link to={url} className={style.card}>
        <img src={image[0]} alt={title} className={style.bkg_img}/>
        <div className={style.fade_container}>
          <h2>{title}</h2>
          <p>{shortDescription}</p>
        </div>
        <img
          className={
            !endDate ? style.construction_banner : style.no_construction_banner
          }
          src="construction_tape.png"
        />
      </Link>
    </article>
  );
}

export default ConstructionCard;
