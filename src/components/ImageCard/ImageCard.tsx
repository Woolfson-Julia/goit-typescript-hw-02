import { Image, ImageClickHandler } from "../App/App.types";
import css from "./ImageCard.module.css";

export interface ImageCardProps {
  item: Image;
  onClick: ImageClickHandler;
}


export default function ImageCard({ item, onClick }: ImageCardProps) {
  return (
    <div onClick={() => onClick(item)}>
      <img
        className={css.img}
        src={item.urls.small}
        alt={item.description}
        width={300}
        height={200}
      />
    </div>
  );
}
