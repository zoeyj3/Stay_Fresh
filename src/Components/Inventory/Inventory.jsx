import { useState } from "react"
import AddInventory from "../AddInventory/AddInventory"
import Inventorylist from "../Inventorylist/Inventorylist"

function Inventory(render){
    const [inventoryList,setInventoryList] =useState([])

    return(
    <>  
        <AddInventory render={render} setInventoryList={setInventoryList} />
        <Inventorylist render={render} inventoryList={inventoryList}/>
    </>
    )
}
export default Inventory
