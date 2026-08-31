import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Excavator.module.css";

interface ExcavatorProps {
  /** Any valid CSS color for the silhouette */
  color?: string;
  /** Pixel height of the excavator stage/track area */
  height?: number;
  /** Optional extra class for the outer stage element */
  className?: string;
}

/**
 * Excavator
 *
 * A single-color animated excavator that drives from left to right
 * as the page is scrolled. Position is tied to overall document scroll
 * progress (0 at top of page, 1 at bottom).
 */
export default function Excavator({
  color = "var(--element-color)",
  height = 70,
  className = "",
}: ExcavatorProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const moveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const rig = rigRef.current;
    const stage = stageRef.current;
    if (!rig || !stage) return;

    let rigWidth = rig.getBoundingClientRect().width;

    const applyPosition = () => {
      const scrollTop = window.scrollY;

      const stageRect = stage.getBoundingClientRect();
      const stageTop = stageRect.top + window.scrollY;

      // Animation starts when the stage enters the viewport
      const startScroll = stageTop - window.innerHeight;

      // Animation ends when the stage reaches the top of the viewport
      const endScroll = stageTop;

      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - startScroll) / (endScroll - startScroll)),
      );

      const stageWidth = stage.getBoundingClientRect().width;
      const maxTranslate = Math.max(0, stageWidth - rigWidth);

      const x = progress * maxTranslate;

      rig.style.transform = `translateX(${x}px)`;
    };

    const measure = () => {
      rigWidth = rig.getBoundingClientRect().width;
      applyPosition();
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        applyPosition();
        rafRef.current = null;
      });

      setIsMoving(true);
      if (moveTimeoutRef.current !== null) clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 200);
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(stage);

    applyPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      resizeObserver.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (moveTimeoutRef.current !== null) clearTimeout(moveTimeoutRef.current);
    };
  }, []);

  const stageStyle = { "--color": color, height } as CSSProperties;

  return (
    <div
      ref={stageRef}
      className={`${styles.stage} ${className}`}
      style={stageStyle}
    >
      <div className={styles.ground} />

      <div
        ref={rigRef}
        className={`${styles.rig} ${isMoving ? styles.moving : ""}`}
      >
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 111.27 107.59"
          role="img"
          aria-label="Excavator"
        >
          {/* TRACK */}
          <path
            className={styles.main}
            d="M33.74,92a8,8,0,1,0,0,16H89a8,8,0,1,0,0-16H33.74ZM89,111.65H33.74a11.59,11.59,0,1,1,0-23.17H89a11.59,11.59,0,1,1,0,23.17h0Z"
            transform="translate(-4.37 -4.71)"
          />

          {/* LEFT WHEEL */}
          <g className={styles.wheel}>
            <path
              className={styles.main}
              d="M35.52,97.39a2.67,2.67,0,1,0,2.67,2.67,2.68,2.68,0,0,0-2.67-2.67m0,8.91a6.24,6.24,0,1,1,6.24-6.24,6.24,6.24,0,0,1-6.24,6.24"
              transform="translate(-4.37 -4.71)"
            />
          </g>

          {/* RIGHT WHEEL */}
          <g className={styles.wheel}>
            <path
              className={styles.main}
              d="M87.21,97.39a2.67,2.67,0,1,0,2.67,2.67,2.68,2.68,0,0,0-2.67-2.67m0,8.91a6.24,6.24,0,1,1,6.24-6.24,6.24,6.24,0,0,1-6.24,6.24"
              transform="translate(-4.37 -4.71)"
            />
          </g>

          {/* INNER TRACK */}
          <path
            className={styles.main}
            d="M41.15,102.73H81.58a6.2,6.2,0,0,1,0-5.35H41.15a6.2,6.2,0,0,1,0,5.35h0Zm-4.74,1.69h0Zm49.91,1.87H36.41a1.78,1.78,0,0,1-1.78-1.78,1.88,1.88,0,0,1,1.43-1.84,2.67,2.67,0,0,0,0-5.24,1.78,1.78,0,0,1-1.43-1.75,1.86,1.86,0,0,1,1.78-1.87H86.32a1.78,1.78,0,0,1,1.78,1.78,1.88,1.88,0,0,1-1.43,1.84,2.67,2.67,0,0,0,0,5.24,1.78,1.78,0,0,1,1.43,1.75,1.86,1.86,0,0,1-1.78,1.87h0Z"
            transform="translate(-4.37 -4.71)"
          />

          {/* BODY */}
          <g className={styles.excavatorBody}>
            <path
              className={styles.main}
              d="M54.24,88.48H68.5V86.69H54.24v1.78Zm16,3.56H52.46a1.78,1.78,0,0,1-1.78-1.78V84.91a1.78,1.78,0,0,1,1.78-1.78H70.28a1.78,1.78,0,0,1,1.78,1.78v5.35A1.78,1.78,0,0,1,70.28,92h0Z"
              transform="translate(-4.37 -4.71)"
            />

            <path
              className={styles.main}
              d="M25.72,83.13H75.63V63.87a9.26,9.26,0,0,0-9.25-9.25H52.46a1.79,1.79,0,0,0-1.79,1.79V70.65a1.78,1.78,0,0,1-1.78,1.78H29.43a3.71,3.71,0,0,0-3.71,3.71v7Zm51.69,3.57H23.94a1.78,1.78,0,0,1-1.78-1.78V76.14a7.28,7.28,0,0,1,7.27-7.27H47.11V56.4A5.36,5.36,0,0,1,52.46,51H66.37A12.82,12.82,0,0,1,79.19,63.87v21a1.78,1.78,0,0,1-1.78,1.78h0Z"
              transform="translate(-4.37 -4.71)"
            />

            <path
              className={styles.main}
              d="M25.72,76h7.07a3.63,3.63,0,0,0,3.62-3.56h-7A3.71,3.71,0,0,0,25.72,76m7.07,3.56H23.94a1.78,1.78,0,0,1-1.78-1.78V76.14a7.28,7.28,0,0,1,7.27-7.27H38.2A1.78,1.78,0,0,1,40,70.65v1.73a7.19,7.19,0,0,1-7.18,7.18"
              transform="translate(-4.37 -4.71)"
            />

            <path
              className={styles.main}
              d="M59.58,54.61v11a5.48,5.48,0,0,0,3.6,5.14l12.44,4.53V63.87a9.35,9.35,0,0,0-4.11-7.71,9.57,9.57,0,0,0-5.43-1.55h-6.5Zm17.82,25a1.76,1.76,0,0,1-.61-0.11L62,74.06A9.06,9.06,0,0,1,56,65.57V52.83A1.78,1.78,0,0,1,57.8,51h8.28a13.1,13.1,0,0,1,7.44,2.17,12.91,12.91,0,0,1,5.67,10.65V77.78a1.78,1.78,0,0,1-1.78,1.78h0Z"
              transform="translate(-4.37 -4.71)"
            />

            {/* ARM */}
            <g className={styles.boom}>
              <path
                className={styles.main}
                d="M60.5,47.56A1.78,1.78,0,0,1,60.27,44l15.1-2L74.53,28.93A1.78,1.78,0,0,1,76.08,27l11.59-1.48-0.78-9.88a1.78,1.78,0,0,1,3.55-.28L91.36,27a1.78,1.78,0,0,1-1.55,1.91L78.19,30.37l0.84,13a1.78,1.78,0,0,1-1.54,1.88L60.74,47.54l-0.24,0"
                transform="translate(-4.37 -4.71)"
              />

              <path
                className={styles.main}
                d="M97.48,8.27A3.56,3.56,0,1,0,101,11.84a3.57,3.57,0,0,0-3.56-3.56m0,10.69a7.13,7.13,0,1,1,7.13-7.13A7.14,7.14,0,0,1,97.48,19"
                transform="translate(-4.37 -4.71)"
              />

              <path
                className={styles.main}
                d="M58,51h8.34a12.48,12.48,0,0,1,2.85.33l24.9-33.29a7.23,7.23,0,0,1-2.82-2.74Zm11.88,4.17a1.82,1.82,0,0,1-.57-0.09,9.25,9.25,0,0,0-3-.51H53.93a1.78,1.78,0,0,1-1.3-3l38.2-41a1.78,1.78,0,0,1,3.09,1.22,3.53,3.53,0,0,0,3.28,3.53,1.78,1.78,0,0,1,1.28,2.84L71.34,54.5a1.78,1.78,0,0,1-1.43.71h0Z"
                transform="translate(-4.37 -4.71)"
              />

              {/* HOOK */}
              <g>
                <path
                  className={styles.main}
                  d="M100.58,54.61H93.45a1.78,1.78,0,1,1,0-3.56h7.13a1.78,1.78,0,1,1,0,3.56"
                  transform="translate(-4.37 -4.71)"
                />

                <path
                  className={styles.main}
                  d="M97,70.65a7.14,7.14,0,0,1-7.13-7.13,1.78,1.78,0,0,1,3.56,0A3.56,3.56,0,1,0,97,60a1.78,1.78,0,0,1-1.78-1.78l0-41a1.78,1.78,0,0,1,1.78-1.78h0a1.78,1.78,0,0,1,1.78,1.78l0,39.48a7.13,7.13,0,0,1-1.78,14"
                  transform="translate(-4.37 -4.71)"
                />
              </g>
            </g>
          </g>

          {/* GROUND */}
          <path
            className={styles.main}
            d="M113.67,112.29H6.33a1.73,1.73,0,1,1,0-3.42H113.67A1.73,1.73,0,1,1,113.67,112.29Z"
            transform="translate(-4.37 -4.71)"
          />

          <path
            className={`${styles.main} ${styles.excavatorRoad}`}
            d="M107.25,112.25h-7.17a1.71,1.71,0,1,1,0-3.42h7.17A1.71,1.71,0,1,1,107.25,112.25Z"
            transform="translate(-4.37 -4.71)"
          />
        </svg>
      </div>
    </div>
  );
}
