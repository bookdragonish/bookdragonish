import { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.css";

interface TimelineProps {
  startDate: string;
  endDate?: string;
}

function formatDate(date: string) {
  const [day, month, year] = date.split("-");
  return `${day}.${month}.${year.slice(-2)}`;
}

export default function Timeline({ startDate, endDate }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    let rafId: number | null = null;

    const updateProgress = () => {
      const rect = timeline.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Start drawing when the timeline enters the viewport.
       *
       * Finish when the user has scrolled roughly 30%
       * of the viewport farther.
       */
      const startPosition = viewportHeight * 0.8; // 20% up from bottom
      const endPosition = viewportHeight * 0.5; // halfway up the screen

      const animationDistance = startPosition - endPosition;

      const distanceScrolled = startPosition - rect.top;

      const newProgress = Math.min(
        1,
        Math.max(0, distanceScrolled / animationDistance),
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

  console.log(endDate, progress);
  return (
    <div ref={timelineRef} className={styles.timeline}>
      <span className={styles.date}>{formatDate(startDate)}</span>

      <div className={styles.track}>
        {/* start marker */}
        <span className={styles.marker} />

        {/* animated line */}
        <span
          className={styles.line}
          style={{
            transform: `scaleX(${progress})`,
          }}
        />

        {/* endpoint */}
        {endDate ? (
          <span
            className={`${styles.endMarker} ${
              progress >= 0.92 ? styles.visible : ""
            }`}
          />
        ) : (
          <span
            className={`${styles.arrow} ${progress >= 1 ? styles.visible : ""}`}
          />
        )}
      </div>

      {endDate && (
        <span
          className={`${styles.date} ${styles.endDate} ${
            progress >= 0.92 ? styles.visible : ""
          }`}
        >
          {formatDate(endDate)}
        </span>
      )}
    </div>
  );
}
