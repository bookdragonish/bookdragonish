import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import style from "./InternshipCard.module.css";

type CardProps = {
  img_link: string;
  page_link: string;
  alt: string;
  title: string;
};

function InternshipCard({
  img_link,
  page_link,
  alt,
}: CardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let rafId: number | null = null;

    const updateProgress = () => {
      const rect = card.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Starts once the card is 20% into the screen.
       * Finishes around halfway up the screen.
       */
      const startPosition = viewportHeight * 0.8;
      const endPosition = viewportHeight * 0.5;

      const animationDistance = startPosition - endPosition;
      const distanceScrolled = startPosition - rect.top;

      const newProgress = Math.min(
        1,
        Math.max(0, distanceScrolled / animationDistance)
      );

      setProgress(newProgress);
    };

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        updateProgress();
        rafId = null;
      });
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  /*
   * 0 = text hidden behind image
   * 1 = text in final position
   */
  const textOffset = (1 - progress) * 80;

  return (
    <Link to={page_link} className={style.internship_link}>
      <article
        ref={cardRef}
        className={style.internship_article}
      >
        <div
          className={style.info_container}
          style={{
            transform: `translateX(${textOffset}%)`,
          }}
        >
          <h3>Check out my Internship the Summer 2026</h3>

          <p>
            Team collaborators on making an Ethical Social Media
            plattform
          </p>
        </div>

        <div className={style.image_container}>
          <img
            src={img_link}
            alt={alt}
            loading="lazy"
          />
        </div>
      </article>
    </Link>
  );
}

export default InternshipCard;