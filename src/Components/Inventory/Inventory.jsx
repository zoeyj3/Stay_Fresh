import { useState } from "react"
import AddInventory from "../AddInventory/AddInventory"
import Inventorylist from "../Inventorylist/Inventorylist"

function Inventory({updatedInventory, setUpdatedInventory}){
    const [newInventory,setNewInventory] =useState([])

    return(
    <>  
        <AddInventory setNewInventory={setNewInventory} />
        <Inventorylist newInventory={newInventory} updatedInventory={updatedInventory} setUpdatedInventory={setUpdatedInventory}/>
    </>
    )
}
export default Inventory
