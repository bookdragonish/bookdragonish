import type { ImageGridProps } from "../../types/image";
import style from "./ImageGrid.module.css";

function ImageGrid({ images, folderTitle }: ImageGridProps) {
  let folder;
  if (folderTitle) {
    folder = "/" + folderTitle + "/";
  } else {
    folder = "";
  }
  return (
    <section className={style.grid}>
      {images.map((image, idx) => {
        return (
          <article key={idx} className={style[`span${image.span}`]}>
            <img
              className={style.image}
              loading="lazy"
              src={folder + image.image}
              alt={image.alt}
            />
          </article>
        );
      })}
    </section>
  );
}

export default ImageGrid;
