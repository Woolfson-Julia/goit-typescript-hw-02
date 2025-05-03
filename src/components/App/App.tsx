import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchImages } from "../../services/imagesService";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { Image } from './App.types';
import css from "./App.module.css";



export default function App() {

  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openModal = (item:Image) => {
      setSelectedImage(item);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };


  const handleSearch = (topic:string) => {
          setSearchTerm(topic);
          setPage(1);
          setImages([]);
    
  };
  useEffect(() => {
    if (searchTerm === '') {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(searchTerm, page);
        setImages((prevImages: Image[]) => {
          return [...prevImages, ...data];
        });
      } catch {
        setError(true);
        toast.error("Please reload there was an error!!!!");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [page, searchTerm]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery onClick={openModal} items={images} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn
          onClick={() => {
            setPage(page + 1);
          }}
        />
      )}
      {selectedImage && <ImageModal item={selectedImage} onClose={closeModal} />}
    </div>
  );
}
