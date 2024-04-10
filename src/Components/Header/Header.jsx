import "./Header.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({setSearchingItem}) {
  
  // function handleSearch(event) {
  //     event.preventDefault();
  //     console.log(event.target.elements[0].value)
  function handleInputSearch(event){
    event.preventDefault();
    setSearchingItem(event.target.search.value);
    console.log(event.target.search.value)
  };
  // }
  return (
    
    <div className="header">
      <h1> I am header</h1>
      <form onSubmit={handleInputSearch}>
        <input type="text" name="search" placeholder="Search.."></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default Header;
