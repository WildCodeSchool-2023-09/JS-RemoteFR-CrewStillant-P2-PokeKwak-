import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./searchBar.module.css";

function SearchBar({ filteredCards, setFilteredCards }) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setFilteredCards(
      filteredCards.filter((card) =>
        card.name.toLowerCase().startsWith(searchValue.toLowerCase())
      )
    );
  };
  return (
    <div>
      <h1>Recherche :</h1>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  setFilteredCards: PropTypes.func.isRequired,
  filteredCards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default SearchBar;
