import { useEffect, useRef, useState } from "react";
import ConstructionCompontent from "../../components/ConstructionComponent/ConstructionComponent";
import ExperienceComponent from "../../components/ExperienceComponent/ExperienceComponent";
import SummaryComponent from "../../components/SummaryComponent/SummaryComponent";
import style from "./HomePage.module.css";
import type { CSSProperties } from "react";
import HighlightComponent from "../../components/HighlightComponent/HighlightComponent";

type StyleWithVars = CSSProperties & {
  ["--summary-h"]?: string;
};

function HomePage() {
  const summaryRef = useRef<HTMLDivElement | null>(null);
  const [summaryHeight, setSummaryHeight] = useState(0);
  const mainStyle: StyleWithVars = {
    "--summary-h": `${summaryHeight}px`,
  };

  useEffect(() => {
    const currentRef = summaryRef.current;
    if (!currentRef) return;

    const updateHeight = () => {
      setSummaryHeight(currentRef.offsetHeight);
    };

    updateHeight();

    // Dont trigger every pixel change - but when the height is changed
    const resize = new ResizeObserver(updateHeight);
    resize.observe(currentRef);

    return () => resize.disconnect();
  }, []);

  return (
    <main className={style.homepage_main} style={mainStyle}>
      <div className={style.summary_container} ref={summaryRef}>
        <h1>Ingvild Kirkaune Sandven</h1>
        <SummaryComponent />
      </div>

      <div className={style.overlay}>
        <ConstructionCompontent />
        <ExperienceComponent />
        <HighlightComponent />
      </div>
    </main>
  );
}

export default HomePage;
