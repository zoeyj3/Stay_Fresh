import "./InventoryListItem.scss";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function InventoryListItem({ inventory,CheckboxChange }) {
    const handleCheckbox = (event) => {
        CheckboxChange(inventory.id, event.target.checked);
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
        <p>
          {inventory.name}, {inventory.servings} servings left, before{" "}
          {inventory.best_before}
        </p>
      </div>
      <FontAwesomeIcon icon={faTrashCan} className="listitem__trashicon" />
    </div>
  );
}
export default InventoryListItem;
