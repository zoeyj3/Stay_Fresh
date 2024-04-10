import InventoryListItem from "../InventoryListItem/InventoryListItem";
import AddInventory from "../../Components/AddInventory/AddInventory"
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
      // console.log(response.data);
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
            inventory={inventory}
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
