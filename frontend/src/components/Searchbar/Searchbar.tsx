import { type ChangeEvent } from "react";
import c from "./searchbar.module.css";
import SearchIcon from "../../assets/svgs/search.svg";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={c.searchBarContainer}>
      <input
        type="text"
        placeholder="Look for homestay..."
        value={searchTerm}
        onChange={handleChange}
        className={c.input}
      />
      <img src={SearchIcon} alt="searc icon" />
    </div>
  );
};
