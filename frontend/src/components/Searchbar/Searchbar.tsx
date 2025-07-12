import { type ChangeEvent } from "react";
import c from "./searchbar.module.css";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Look for homestay..."
      value={searchTerm}
      onChange={handleChange}
      className={c.input}
    />
  );
};
