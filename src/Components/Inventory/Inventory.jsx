import AddInventory from "../AddInventory/AddInventory"
import Inventorylist from "../Inventorylist/Inventorylist"
function Inventory(render){
    return(
    <>  
        <AddInventory render={render}/>
        <Inventorylist render={render}/>
    </>
    )
}
export default Inventory
