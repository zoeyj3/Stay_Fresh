import './Inventorylist.scss'
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import AddInventory from "../../Components/AddInventory/AddInventory"
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Inventorylist() {
  const { place } = useParams();
 
  const [fullList, setFullList] = useState([]);
  const [itemchoosed,setitemchoosed] = useState([]);
  
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


  function handleSubmit(event){

  }


  return (
    <>
    {filterList && (
        <div className='inventorylist'>
      <form className='inventorylist__checkbox-form' onSubmit={handleSubmit}>
        <button type="Submit">Search Recipe</button>
      <ul>
        {filterList.map((inventory) => {
          return (
            <InventoryListItem
            key={inventory.id}
            inventory={inventory}
            />
          );
        })
        }
      </ul>
      
      </form>
      </div>
      )}
    </>
  );
}
export default Inventorylist;
