import { useEffect, useState } from "react";
import style from "./Gears.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type LottieData = Record<string, any>;

function hexToLottieRgb(hex: string) {
  const cleaned = hex.replace("#", "");

  const r = parseInt(cleaned.substring(0, 2), 16) / 255;
  const g = parseInt(cleaned.substring(2, 4), 16) / 255;
  const b = parseInt(cleaned.substring(4, 6), 16) / 255;

  return [r, g, b, 1];
}

function replaceFillColors(obj: any, color: number[]) {
  if (!obj || typeof obj !== "object") return;

  if (
    obj.ty === "fl" &&
    obj.c?.k &&
    Array.isArray(obj.c.k)
  ) {
    obj.c.k = color;
  }

  for (const value of Object.values(obj)) {
    replaceFillColors(value, color);
  }
}

export default function Gears() {
  const [animationData, setAnimationData] = useState<LottieData | null>(null);

  useEffect(() => {
    async function loadAnimation() {
      const response = await fetch("/animations/moving-cogs.json");
      const data = await response.json();

      const mainColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--main-color")
        .trim();

      const lottieColor = hexToLottieRgb(mainColor);

      replaceFillColors(data, lottieColor);

      setAnimationData(data);
    }

    loadAnimation();
  }, []);

  if (!animationData) return null;

  return (
    <div className={style.container}>
    <DotLottieReact
      data={animationData}
      loop
      autoplay
    /></div>
  );
}