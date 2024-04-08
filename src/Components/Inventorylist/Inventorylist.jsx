import InventoryListItem from "../InventoryListItem/InventoryListItem";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Inventorylist() {
  const navigate = useNavigate();
  const [fullList, setFullList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const fetchFoodList = async () => {
      const response = await axios.get("http://localhost:8080/inventory");
      console.log(response.data);
      setFullList(response.data);
    };
    fetchFoodList();
  }, []);


  const filterList = fullList.filter(
    (food) => food.storing_place === "Freezer"
  );
  console.log(filterList)




  return (
    <>
    {filterList && (
        <div>
      <h1> I am Inventorylist</h1>
      <ul>
        {filterList.map((inventory) => {
          return (
            <InventoryListItem
              key={inventory.id}
              id={inventory.id}
              name={inventory.name}
              storing={inventory.storing_place}
              create_time={inventory.create_time}
              servings={inventory.servings}
              best_before={inventory.best_before}
            />
          );
        })
        }
      </ul>
      </div>
      )}
    </>
  );
}
export default Inventorylist;
