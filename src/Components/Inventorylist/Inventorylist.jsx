import InventoryListItem from "../InventoryListItem/InventoryListItem";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Inventorylist() {
  const { place } = useParams();
 
  const [fullList, setFullList] = useState([]);

  console.log(place)
  useEffect(() => {
    const fetchInventoryList = async () => {
      const response = await axios.get("http://localhost:8080/inventory");
      console.log(response.data);
      setFullList(response.data);
    };
    fetchInventoryList();
  }, []);


  const filterList = fullList.filter(
    (food) => food.storing_place === place
  );
  console.log(filterList)




  return (
    <>
    {filterList && (
        <div>
      <h1>{place}</h1>
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
