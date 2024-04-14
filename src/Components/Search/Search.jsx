import "./Search.scss";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Search({ setSearchingItem, setSearchedItemData}) {
  const [hidden, setHidden] = useState(true);
  function handlehidden() {
    setHidden(false);
  }
  function handleclear() {
    setHidden(true);
    setSearchedItemData([])
    setSearchingItem("")
  }

  // function handleSearch(event) {
  //     event.preventDefault();
  //     console.log(event.target.elements[0].value)
  function handleInputSearch(event) {
    event.preventDefault();
    if (event.target.value) {
      setSearchingItem(event.target.value);
      console.log(event.target.value);
    }
  }
  // }
  return (
    <div className="search">
      <form className="search__form">
        <button className="search__searchbutton" onClick={handlehidden} type="button">
          <FontAwesomeIcon className="search__searchicon" icon={faMagnifyingGlass} />
        </button>
        {!hidden && (
          <div className="search__wrapper">
            <input
              type="text"
              name="search"
              placeholder="Search.."
              className="search__inputbox"
              autoFocus
              onChange={handleInputSearch}
            ></input>
            <button onClick={handleclear} className="search__closebutton">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
export default Search;
