export type ImageGridProps = {
  images: imagesArray[];
  folderTitle: string;
};

export interface imagesArray {
    image: string,
    span: number,
    alt: string,
}

export type Experience = {
  startDate: string;
  endDate: string;
  title: string;
  images: imagesArray[];
  description: string;
};
