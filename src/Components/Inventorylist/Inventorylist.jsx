import './Inventorylist.scss'
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import AddInventory from "../../Components/AddInventory/AddInventory"
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Inventorylist({newInventory}) {
  const { place } = useParams();
 
  const [fullList, setFullList] = useState([]);
  const [itemChoosed,setItemChoosed] = useState({});
  
  useEffect(() => {
    const fetchInventoryList = async () => {
      const response = await axios.get("http://localhost:8080/inventory");
      //sort the data by best_before
      const sortedData = response.data.sort((a, b) => new Date(a.best_before) - new Date(b.best_before))
      setFullList(sortedData);
    };
    fetchInventoryList();
  }, [newInventory]);


  const filterList = fullList.filter(
    (food) => food.storing_place === place
  );
  console.log(filterList)


  const CheckboxChange = (itemName, itemStatus) => {
    setItemChoosed((prev) => ({
      ...prev,
      [itemName]: itemStatus
    }));
  };


  function handleSubmit(event){
    event.preventDefault();
    const selectedNames = Object.keys(itemChoosed).filter(key => itemChoosed[key]);
    console.log(selectedNames);
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
            CheckboxChange={CheckboxChange}
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
