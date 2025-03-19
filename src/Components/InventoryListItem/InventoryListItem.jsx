import "./InventoryListItem.scss";
import EditInventory from "../EditInventory/EditInventory";

import axios from "axios";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as CustomUtils from "../../CustomUtils.js";

function InventoryListItem({ inventory, CheckboxChange, setUpdatedInventory }) {
  let expired = false;
  let expireWarning = false;
  let remainTime;
  // console.log(inventory);

  // filtering the item expired and going to expire
  if (inventory.days_to_expire < 0) {
    expired = true;
    remainTime = 0;
  } else if (inventory.days_to_expire < 4) {
    expireWarning = true;
    remainTime = inventory.days_to_expire;
  } else {
    remainTime = inventory.days_to_expire;
  }

  const handleCheckbox = (event) => {
    CheckboxChange(inventory.inventory_name, event.target.checked);
  };

  const handleDelete = async (inventoryId) => {
    try {
      await axios.delete(`${CustomUtils.API_ADDRESS}/inventory/${inventoryId}`);
      console.log(`${inventory.inventory_name} has been deleted`);
      setUpdatedInventory(inventoryId);
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

  // if (inventory.days_to_expire < 0)
  return (
    <>
      {inventory && (
        <div className="listitem">
          <input
            type="checkbox"
            className="listitem__checkbox"
            id={inventory.inventory_name}
            value={inventory.inventory_name}
            name={inventory.id}
            onChange={handleCheckbox}
          />
          <div className="listitem__contentwrapper">
            <p className="listitem__name">{inventory.inventory_name} </p>
            <div className="listitem__details">
              <div className="listitem__details-wrapper">
                <FontAwesomeIcon className="listitem__icon" icon={faUtensils} />
                <p className="listitem__detailstext">
                  {inventory.servings} left{" "}
                </p>
              </div>
              <div className="listitem__details-wrapper">
                {expireWarning && (
                  <>
                    <FontAwesomeIcon
                      className="listitem__icon-red"
                      icon={faCalendarXmark}
                    />{" "}
                    <p className="listitem__detailstext-red">
                      {remainTime} day left
                    </p>
                  </>
                )}
                {expired && (
                  <>
                    <FontAwesomeIcon
                      className="listitem__icon-red"
                      icon={faCalendarXmark}
                    />
                    <p className="listitem__detailstext-red"> expired </p>
                  </>
                )}
                {!expireWarning && !expired && (
                  <>
                    <FontAwesomeIcon
                      className="listitem__icon"
                      icon={faCalendarXmark}
                    />
                    <p className="listitem__detailstext">
                      {inventory.best_before.slice(0, 10)}
                    </p>
                  </>
                )}
              </div>
              <div className="listitem__details-wrapper-hidden">
                <FontAwesomeIcon className="listitem__icon" icon={faDoorOpen} />
                <p className="listitem__detailstext">
                  {inventory.storing_place}
                </p>
              </div>
            </div>
          </div>
          <div className="listitem__button-wrapper">
            <EditInventory
              inventoryId={inventory.id}
              inventoryName={inventory.inventory_name}
              inventoryServings={inventory.servings}
              inventoryBestBeforeDate={inventory.best_before}
              inventoryStoringPlace={inventory.storing_place}
              setUpdatedInventory={setUpdatedInventory}
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              className="listitem__trashicon"
              onClick={() => handleDelete(inventory.id)}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default InventoryListItem;
