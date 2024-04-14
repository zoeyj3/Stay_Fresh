import './Inventorylist.scss'
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import AddInventory from "../../Components/AddInventory/AddInventory"
import axios from "axios";
import { useNavigate, Link, useParams, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";


function Inventorylist({newInventory, updatedInventory, itemChoosed, setItemChoosed, setUpdatedInventory,place}) {
  
  const navigate = useNavigate();
  const [fullList, setFullList] = useState([]);
  const [isSortByExpireDate, setIsSortByExpireDate] = useState(true);
  console.log(place)

  useEffect(() => {
    const fetchInventoryList = async () => {
      const response = await axios.get("http://localhost:8080/inventory");
      //sort the data by best_before
      let sortedData 
      if (isSortByExpireDate){
        sortedData = response.data.sort((a, b) => new Date(a.best_before) - new Date(b.best_before))
      } else{
        sortedData = response.data.sort((a, b) => new Date(b.updated_time) - new Date(a.updated_time))
      }
      setFullList(sortedData);
    };
    fetchInventoryList();
  }, [newInventory, updatedInventory, isSortByExpireDate]);


  const filterList = fullList.filter(
    (food) => food.storing_place === place
  );
  console.log(filterList)

  const changeSort = (e) => {
    e.preventDefault()
    setIsSortByExpireDate(!isSortByExpireDate)
  }

  const CheckboxChange = (itemName, itemStatus) => {
    setItemChoosed((prev) => ({
      ...prev,
      [itemName]: itemStatus
    }));
  };


  function handleSubmit(event){
    event.preventDefault();
    console.log(itemChoosed)
    if(itemChoosed && Object.keys(itemChoosed).length > 0){
      const selectedNames = Object.keys(itemChoosed).filter(key => itemChoosed[key] === true).join(',');
      navigate(`/recipe/${selectedNames}`)
      console.log(selectedNames);
    }

    
  }


  return (
    <>
    {filterList && (
        <div className='inventorylist'>
      <form className='inventorylist__checkbox-form' onSubmit={handleSubmit}>
      <button type="Submit">Search Recipe</button>
      <button onClick={changeSort}>Sort</button>
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
        })
        }
      </ul>
      {!place && (<ul>
        {fullList.map((inventory) => {
          return (
            <InventoryListItem
            key={inventory.id}
            inventory={inventory}
            CheckboxChange={CheckboxChange}
            setUpdatedInventory={setUpdatedInventory}
            />
          );
        })
        }
      </ul>)}
      
      </form>
      </div>
      )}
    </>
  );
}
export default Inventorylist;
