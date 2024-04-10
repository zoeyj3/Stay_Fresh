import Form from "../Form/Form"
import { Link } from "react-router-dom"
function AddInventory(render){
    return(
    <>
    <Form
    keyword = "addinventory"
    render= {render}
    />
    </>
    )
}
export default AddInventory
