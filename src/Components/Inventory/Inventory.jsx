import { useState } from "react";
import AddInventory from "../AddInventory/AddInventory";
import Inventorylist from "../Inventorylist/Inventorylist";

function Inventory({ updatedInventory, setUpdatedInventory,place }) {
  const [newInventory, setNewInventory] = useState([]);

  return (
    <>
      <AddInventory setNewInventory={setNewInventory} />
      <Inventorylist
        place={place}
        newInventory={newInventory}
        updatedInventory={updatedInventory}
        setUpdatedInventory={setUpdatedInventory}
      />
    </>
  );
}
export default Inventory;
