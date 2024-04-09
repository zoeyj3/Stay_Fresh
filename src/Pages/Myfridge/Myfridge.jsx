import Inventorylist from "../../Components/Inventorylist/Inventorylist"
import AddInventory from "../../Components/AddInventory/AddInventory"
import "./Myfridge.scss";
function Myfridge(place){
    return(
        <div className="page">
        <AddInventory/>
        <Inventorylist place={place}/>
        </div>
    )
}
export default Myfridge