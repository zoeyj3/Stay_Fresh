import Form from "../Form/Form"
import { Link } from "react-router-dom"
function AddInventory({setNewInventory}){
    return(
    <>
    <Form
    keyword = "addinventory"
    setNewInventory={setNewInventory}
    />
    </>
    )
}
export default AddInventory
