import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './StartPage.scss'


const element = <FontAwesomeIcon icon="fa-kit fa-my-icon" />

function StartPage(){
    return(
        <>
      
       <FontAwesomeIcon icon={ faEdit } rotation={90} size="lg" />
       <FontAwesomeIcon icon={ faTrashCan } spin className='trashicon'/>
       <FontAwesomeIcon icon={faStar} />
       <FontAwesomeIcon icon={faStar} />
        </>
    )
}
export default StartPage