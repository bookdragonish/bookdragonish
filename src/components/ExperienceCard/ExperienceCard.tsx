import { Link } from "react-router";
import style from "./ExperienceCard.module.css";

type CardProps = {
  img_link: string;
  page_link: string;
  alt: string;
  title: string;
};

function ExperienceCard({ img_link, page_link, alt, title }: CardProps) {
  return (
    <article className={style.experience_card}>
      <Link to={page_link}>
        <img src={img_link} alt={alt} className={style.experience_img} />
        <div className={style.overlay}>
          <h3 className={style.title}>{title}</h3>
        </div>
      </Link>
    </article>
  );
}
export default ExperienceCard;
