import "./InventoryListItem.scss";
import EditInventory from "../EditInventory/EditInventory";
import { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function InventoryListItem({ inventory, CheckboxChange,setUpdatedInventory }) {
  if (!inventory) {
    return <div>hello</div>;
  }
  const handleCheckbox = (event) => {
    CheckboxChange(inventory.name, event.target.checked);
  };
  return (
    <>
    {inventory && (<div className="listitem">
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
            <FontAwesomeIcon
              className="listitem__icon"
              icon={faCalendarXmark}
            />
            <p className="listitem__detailstext">{inventory.best_before}</p>
          </div>
        </div>
      </div>
      <div className="listitem__button-wrapper">
        <EditInventory
          inventoryId={inventory.id}
          inventoryName={inventory.name}
          inventoryServings={inventory.servings}
          inventoryBestBeforeDate={inventory.best_before}
          inventoryStoringPlace={inventory.storing_place}
          setUpdatedInventory={setUpdatedInventory}
        />
        <FontAwesomeIcon icon={faTrashCan} className="listitem__trashicon" />
      </div>
    </div>)}
    </>
  );
}
export default InventoryListItem;
