import style from "../SearchBar/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ query, setQuery, handleQuery }) {
  return (
    <>
      <form onSubmit={handleQuery}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          name="search"
          value={query}
          className={style.searchInput}
          placeholder="Search title..."
          type="text"
        />
        <button className={style.searchButton} type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
}
