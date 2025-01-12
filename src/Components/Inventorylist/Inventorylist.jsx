import "./Inventorylist.scss";
import InventoryListItem from "../InventoryListItem/InventoryListItem";

import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import * as CustomUtils from "../../CustomUtils.js";

function Inventorylist({
  newInventory,
  updatedInventory,
  itemChoosed,
  setItemChoosed,
  setUpdatedInventory,
  place,
}) {
  const navigate = useNavigate();
  const [fullList, setFullList] = useState([]);
  const [isSortByExpireDate, setIsSortByExpireDate] = useState(true);

  useEffect(() => {
    const fetchInventoryList = async () => {
      const response = await axios.get(CustomUtils.API_ADDRESS + "/inventory");
      //sort the data by best_before
      let sortedData;
      // sorting between bestbefore and update_time
      if (isSortByExpireDate) {
        sortedData = response.data.sort(
          (a, b) => new Date(a.best_before) - new Date(b.best_before)
        );
      } else {
        sortedData = response.data.sort(
          (a, b) => new Date(b.updated_time) - new Date(a.updated_time)
        );
      }
      setFullList(sortedData);
    };
    fetchInventoryList();
  }, [newInventory, updatedInventory, isSortByExpireDate]);

  const filterList = fullList.filter((food) => food.storing_place === place);


  const changeSort = (e) => {
    e.preventDefault();
    setIsSortByExpireDate(!isSortByExpireDate);
  };

  // set itemchoose list contains all the check/ uncheck key value pair
  const CheckboxChange = (itemName, itemStatus) => {
    setItemChoosed((prev) => ({
      ...prev,
      [itemName]: itemStatus,
    }));
  };

  function handleSubmit(event) {
    if (itemChoosed && Object.keys(itemChoosed).length > 0) {
      const selectedNames = Object.keys(itemChoosed)
        .filter((key) => itemChoosed[key] === true)
        .join(",");
      navigate(`/recipe/${selectedNames}`);
      console.log(selectedNames);
    } else{
      alert("Please select ingredients \u{1F604}\u{1F604}\u{1F604}")
    }
  }

  return (
    <>
      {filterList && (
        <div className="inventorylist">
          <div className="inventorylist__button-wrapper">
            <button  className="inventorylist__button" onClick={handleSubmit}>Search Recipe</button>
            <button className="inventorylist__buttonicon" onClick={changeSort}>
              <FontAwesomeIcon  className="inventorylist__icon" icon={faSort} />
              {!isSortByExpireDate && (<p>updating time</p>)}
              {isSortByExpireDate && (<p>expiring date</p>)}
            </button>
          </div>
          <ul>
            {filterList.map((inventory) => {
              return (
                <InventoryListItem
                  key={inventory.id}
                  inventory={inventory}
                  CheckboxChange={CheckboxChange}
                  setUpdatedInventory={setUpdatedInventory}
                />
              );
            })}
          </ul>
          {!place && (
            <ul>
              {fullList.map((inventory) => {
                return (
                  <InventoryListItem
                    key={inventory.id}
                    inventory={inventory}
                    CheckboxChange={CheckboxChange}
                    setUpdatedInventory={setUpdatedInventory}
                  />
                );
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
export default Inventorylist;
