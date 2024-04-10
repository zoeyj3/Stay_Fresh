import { Link } from 'react-router-dom'
import './MenuList.scss'
function MenuList(){
    return(
        <div className='list'>
         {["fridge","freezer","pantry"].map((place) => (
        <Link
        place={place}
        to={`myfridge/${place}`}
        >{place}</Link>
    ))}
        </div>

    )
}
export default MenuList