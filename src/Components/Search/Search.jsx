import "./Search.scss";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Search({setSearchingItem}) {
  
  const [hidden,setHidden] = useState(true);
  function handlehidden (){
    setHidden(false);
  }
  function handleclear(){
    setHidden(true);
  }

  // function handleSearch(event) {
  //     event.preventDefault();
  //     console.log(event.target.elements[0].value)
  function handleInputSearch(event){
    event.preventDefault();
    if(event.target.value){
      setSearchingItem(event.target.value);
      console.log(event.target.value)
    }
  };
  // }
  return (
    
    <div className="search">
      <form >
        <button onClick={handlehidden} type="button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        {!hidden && (
          <>
        <input type="text" name="search" placeholder="Search.." onChange={handleInputSearch}></input>
      <button onClick={handleclear}> <FontAwesomeIcon icon={faXmark} /> </button>
      </>)}
      </form>
    </div>
  );
}
export default Search;
