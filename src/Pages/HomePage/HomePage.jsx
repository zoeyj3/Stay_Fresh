import Inventorylist from "../../Components/Inventorylist/Inventorylist";
import AddInventory from "../../Components/AddInventory/AddInventory";
import SearchInventory from "../../Components/SearchInventory/SearchInventory";
import Header from "../../Components/Header/Header";
import "./HomePage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {
  const [searchingItem, setSearchingItem] = useState(null);
  const [searchedItemData, setSearchedItemData] = useState("");
    console.log(searchingItem)

  const handleSearch = async () => {

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
    if(!searchingItem) {
        return
    }
    handleSearch()
  },[searchingItem])

  return (
    <div className="page">
      <Header handleSearch={handleSearch} setSearchingItem={setSearchingItem}/>
      {searchingItem && <SearchInventory searchedItemData={searchedItemData}/>}
      <Inventorylist />
      {/* {(place === "freezer" || place === "fridge" || place === "pantry") && <Inventorylist place={place} />} */}
    </div>
  );
}
export default HomePage;
