import Form from "../Form/Form"
import { Link } from "react-router-dom"
function AddInventory({setInventoryList}){
    return(
    <>
    <Form
    keyword = "addinventory"
    setInventoryList={setInventoryList}
    />
    </>
    )
}
export default AddInventory
