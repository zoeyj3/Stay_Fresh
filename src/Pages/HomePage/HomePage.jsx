
import SearchResult from "../../Components/SearchResult/SearchResult";
import Search from "../../Components/Search/Search";
import MenuButton from "../../Components/MenuButton/MenuButton";
import "./HomePage.scss";
import axios from "axios";


import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Inventory from "../../Components/Inventory/Inventory";
import * as CustomUtils from "../../CustomUtils.js";

function HomePage() {
  const { place } = useParams();

  const [searchingItem, setSearchingItem] = useState(null);
  const [searchedItemData, setSearchedItemData] = useState("");
  const [updatedInventory, setUpdatedInventory] = useState({});
  const [itemChoosed,setItemChoosed] = useState({});

  // console.log( place )
  const handleSearch = async () => {
    console.log(searchingItem);
    try {
      const response = await axios.get(
        `${CustomUtils.API_ADDRESS}/inventory-name/${searchingItem}`
      );

      console.log(response.data);
      setSearchedItemData(response.data);
    } catch (error) {
      console.error("nothing found", error);
      setSearchedItemData([]);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered", searchingItem);
    if (!searchingItem) {
      return;
    }
    handleSearch();
  }, [searchingItem, updatedInventory]);

  return (
    <div className="homepage">
      <div className="homepage__titlebox">
        <MenuButton className="homepage__menuicon" />
        {place ? (
          <h1 className="homepage__title">{place}</h1>
        ) : (
          <h1 className="homepage__title">HOME</h1>
        )}
        <Search
          className="search"
          setSearchingItem={setSearchingItem}
          setSearchedItemData={setSearchedItemData}
        />
      </div>

      {searchingItem && searchedItemData && (
        <SearchResult
          searchedItemData={searchedItemData}
          setUpdatedInventory={setUpdatedInventory}
          setItemChoosed={setItemChoosed}
        />
      )}
      {(!searchingItem) && (<Inventory
        updatedInventory={updatedInventory}
        setUpdatedInventory={setUpdatedInventory}
        setItemChoosed={setItemChoosed}
        itemChoosed={itemChoosed}
        place={place}
      />)}

      {/* {(place === "freezer" || place === "fridge" || place === "pantry") && <Inventorylist place={place} />} */}
    </div>
  );
}
export default HomePage;
