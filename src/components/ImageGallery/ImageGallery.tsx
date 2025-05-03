import ImageCard from "../ImageCard/ImageCard";
import { ImageClickHandler, Image } from "../App/App.types";
import css from "./ImageGallery.module.css";

export interface ImageListProps {
  items: Image[];
  onClick: ImageClickHandler;
}


export default function ImageGallery({ items, onClick }: ImageListProps) {
  return (
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} onClick={onClick} />
          </li>
        ))}
      </ul>
  );
}
