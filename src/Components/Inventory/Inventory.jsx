import { useState } from "react"
import AddInventory from "../AddInventory/AddInventory"
import Inventorylist from "../Inventorylist/Inventorylist"

function Inventory(render){
    const [newInventory,setNewInventory] =useState([])

    return(
    <>  
        <AddInventory render={render} setNewInventory={setNewInventory} />
        <Inventorylist render={render} newInventory={newInventory}/>
    </>
    )
}
export default Inventory
