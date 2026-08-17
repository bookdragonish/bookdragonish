import { useEffect, useMemo } from "react";
import experience from "../../api/experienceData.json";
import { Link, useParams } from "react-router";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import style from "./ExperiencePage.module.css";
import ToTopButton from "../../components/ToTopButton/ToTopButton";
import type { Experience } from "../../types/image";
import { ChevronLeft } from "lucide-react";
import Gears from "../../components/ui/Gears";

function ExperiencePage() {
  const { title } = useParams();

  const data = useMemo<Experience | null>(() => {
    if (!experience || !title) return null;

    if (title === "Graphcore") return experience[0];
    if (title === "Online") return experience[1];

    return null;
  }, [title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <main className={style.nav}>
        <nav className={style.nav}>
          <Link to="/" className={style.link}>
            <ChevronLeft /> <p>Back</p>
          </Link>
        </nav>
        <p>This project does not exist</p>
      </main>
    );
  }

  return (
    <main className={style.main}>
      <nav className={style.nav}>
        <Link to="/" className={style.link}>
          <ChevronLeft /> <p>Back</p>
        </Link>
      </nav>

      <ToTopButton />

      <section className={style.info_container}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </section>
      <div className={style.gear_container}>
        <Gears />
      </div>
      <ImageGrid images={data.images} folderTitle={""} />
    </main>
  );
}
export default ExperiencePage;
