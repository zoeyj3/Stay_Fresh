import "./InventoryListItem.scss";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function InventoryListItem({ inventory,CheckboxChange }) {
    const handleCheckbox = (event) => {
        CheckboxChange(inventory.name, event.target.checked);
      };
  return (
    <div className="listitem">
      <input
        type="checkbox"
        className="listitem__checkbox"
        id={inventory.name}
        value={inventory.name}
        name={inventory.id}
        onChange={handleCheckbox}
      />
      <div className="listitem__contentwrapper">
        <p className="listitem__name">{inventory.name} </p>
        <div className="listitem__details">
          <div className="listitem__details-wrapper">
          <FontAwesomeIcon className="listitem__icon" icon={faUtensils} />
          <p className="listitem__detailstext">{inventory.servings} left </p>
          </div>
          <div className="listitem__details-wrapper">
          <FontAwesomeIcon className="listitem__icon" icon={faCalendarXmark} />
          <p className="listitem__detailstext">{inventory.best_before}</p>
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon={faTrashCan} className="listitem__trashicon" />
    </div>
  );
}
export default InventoryListItem;
