import { Link } from 'react-router-dom'
import './Menu.scss'
import MenuList from '../MenuList/MenuList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import fridgeicon from '../../Assets/icons/refrigerator.svg'

function Menu(){
    return(
        <div className='menu'>
            <MenuList/>
        </div>

    )
}
export default Menu