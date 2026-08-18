import { Link } from "react-router";
import style from "./InternshipCard.module.css";

type CardProps = {
  img_link: string;
  page_link: string;
  alt: string;
  title: string;
};

function InternshipCard({ img_link, page_link, alt }: CardProps) {
  return (
    <Link to={page_link} className={style.internship_link}>
      <article className={style.internship_article}>
        
        <div className={style.info_container}>
          <h3>Check out my Internship the Summer 2026</h3>
          <p>Team collaborators on making an Ethical Social Media plattform</p>
        </div>

        <div className={style.image_container}>
          <img src={img_link} alt={alt} loading="lazy" />
        </div>
      </article>
    </Link>
  );
}
export default InternshipCard;
