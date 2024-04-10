import Inventorylist from "../../Components/Inventorylist/Inventorylist";
import AddInventory from "../../Components/AddInventory/AddInventory";
import SearchInventory from "../../Components/SearchInventory/SearchInventory";
import Search from "../../Components/Search/Search";
import "./HomePage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {
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
      <Search  setSearchingItem={setSearchingItem}/>
      <AddInventory/>
      {searchingItem && searchedItemData && <SearchInventory searchedItemData={searchedItemData}/>}
      <Inventorylist />
      {/* {(place === "freezer" || place === "fridge" || place === "pantry") && <Inventorylist place={place} />} */}
    </div>
  );
}
export default HomePage;
