import Inventorylist from "../../Components/Inventorylist/Inventorylist";
import AddInventory from "../../Components/AddInventory/AddInventory";
import SearchResult from "../../Components/SearchResult/SearchResult";
import Search from "../../Components/Search/Search";
import "./HomePage.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Inventory from "../../Components/Inventory/Inventory";

function HomePage() {
  const { place } = useParams();
  const [searchingItem, setSearchingItem] = useState(null);
  const [searchedItemData, setSearchedItemData] = useState("");

  const handleSearch = async () => {
    console.log(searchingItem)
    try {
      const response = await axios.get(
        `http://localhost:8080/inventory-name/${searchingItem}`
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
    if(!searchingItem) {
        return
    }
    handleSearch()
  },[searchingItem])

  return (
    <div className="page">
      <h1>{place}</h1>
      <Search  setSearchingItem={setSearchingItem}/>
      {searchingItem && searchedItemData && <SearchResult searchedItemData={searchedItemData}/>}
      <Inventory />

      {/* {(place === "freezer" || place === "fridge" || place === "pantry") && <Inventorylist place={place} />} */}
    </div>
  );
}
export default HomePage;
