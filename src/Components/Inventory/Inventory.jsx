import { useState } from "react";
import AddInventory from "../AddInventory/AddInventory";
import Inventorylist from "../Inventorylist/Inventorylist";
import "./Inventory.scss";

function Inventory({
  updatedInventory,
  setUpdatedInventory,
  place,
  itemChosen,
  setItemChosen,
}) {
  const [newInventory, setNewInventory] = useState([]);

  return (
    <>
      <AddInventory setNewInventory={setNewInventory} />
      <Inventorylist
        place={place}
        newInventory={newInventory}
        updatedInventory={updatedInventory}
        setUpdatedInventory={setUpdatedInventory}
        setItemChosen={setItemChosen}
        itemChosen={itemChosen}
      />
    </>
  );
}
export default Inventory;
