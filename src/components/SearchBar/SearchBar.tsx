import toast, { Toaster } from "react-hot-toast";
import { ChangeEvent, useState } from "react";
import css from "./SearchBar.module.css"

interface SearchBarProps {
  onSubmit: (image: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps ) {
  const [values, setValues] = useState<string>('');

  const handleSubmit = (formData: FormData) => {
    const image = formData.get("image") as string;
    if (image === "") {
      toast.error("This field must be filled in!!!");
      return;
    }
    onSubmit(image);
    setValues('');
    
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value);
  }

  return (
    <header className={css.header}>
      <form className={css.form} action={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="image"
          value={values}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster position="top-right" />
      </form>
    </header>
  );
}
