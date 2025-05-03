import Modal from "react-modal";
import { Image } from "../App/App.types";
import css from "./ImageModal.module.css";

export interface ImageModalProps {
  item: Image;
  onClose: () => void;
}

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
    
  },
};
export default function ImageModal({ item, onClose }:ImageModalProps ) {

  const isOpen = Boolean(item);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : ""}`}
      contentLabel="Image Modal"
      style={customStyles}
    >
      {item && (
        <>
          <img
            src={item.urls.regular}
            alt={item.description}
            className={css.img}
          />
          <p className={css.text}>Likes: {item.likes}</p>
          <p className={css.text}>Author: {item.user.name}</p>
        </>
      )}
      ;
    </Modal>
  );
}
