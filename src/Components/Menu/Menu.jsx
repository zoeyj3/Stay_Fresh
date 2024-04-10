import './Menu.scss'
import { Link } from 'react-router-dom'

function Menu(){
    return(
    <div className='menu'>

    {["fridge","freezer","pantry"].map((place) => (
        <Link
        place={place}
        to={`myfridge/${place}`}
        >{place}</Link>
    ))};//this should be in filter component 
    </div>
    )
}
export default Menu
