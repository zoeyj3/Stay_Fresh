import Form from "../Form/Form"
import './AddInventory.scss'

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
