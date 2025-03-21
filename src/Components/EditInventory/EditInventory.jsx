import * as CustomUtils from "../../CustomUtils.js";

import "./EditInventory.scss";

import { useState } from "react";
import axios from "axios";
import { Modal } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function EditInventory({
  inventoryId,
  inventoryName,
  inventoryServings,
  inventoryBestBeforeDate,
  inventoryStoringPlace,
  setUpdatedInventory,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // create a updated itme
  function handleSubmit(event) {
    event.preventDefault();
    const updatedItem = {
      id: inventoryId,
      inventory_name: event.target.name.value,
      storing_place: event.target.storing_place.value,
      servings: event.target.servings.value,
      preserve_time: event.target.preserve_time.value,
      best_before: CustomUtils.getBestBeforeDate(
        event.target.preserve_time.value
      ),
    };
    console.log(updatedItem);

    const postUpdatedItem = async () => {
      try {
        await axios.put(
          `${CustomUtils.API_ADDRESS}/inventory/${inventoryId}`,
          updatedItem
        );

        handleClose();
        setUpdatedInventory(updatedItem);
        console.log("updated");
      } catch (error) {
        console.error("Failed to edit", error);
      }
    };
    postUpdatedItem();
  }

  return (
    <>
      <div className="modal__trigger" onClick={handleOpen}>
        <FontAwesomeIcon icon={faPenToSquare} className="listitem__editicon" />
      </div>
      <Modal className="modal" open={open} onClose={handleClose}>
        <div className="modal__card">
          <a
            class="modal__content-icon icon-link"
            data-dismiss="modal"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
          <div className="modal__content">
            <form className="form" id="form" onSubmit={handleSubmit}>
              <input
                className="form__add-container"
                type="text"
                name="name"
                id="name"
                placeholder="Add a Inventory"
                defaultValue={inventoryName}
                required
              ></input>
              <div className="form__detail-container">
                <div className="form__radios-container">
                  <div className="form__radio-container">
                    <input
                      className="form__radio"
                      value="fridge"
                      id="fridge"
                      name="storing_place"
                      type="radio"
                      defaultChecked={inventoryStoringPlace === "fridge"}
                    />
                    <label htmlFor="fridge">fridge</label>
                  </div>
                  <div className="form__radio-container">
                    <input
                      className="form__radio"
                      value="freezer"
                      id="freezer"
                      name="storing_place"
                      type="radio"
                      defaultChecked={inventoryStoringPlace === "freezer"}
                    />
                    <label htmlFor="freezer">freezer</label>
                  </div>
                  <div className="form__radio-container">
                    <input
                      className="form__radio"
                      value="pantry"
                      id="pantry"
                      name="storing_place"
                      type="radio"
                      defaultChecked={inventoryStoringPlace === "pantry"}
                    />
                    <label htmlFor="pantry">pantry</label>
                  </div>
                </div>
                <div className="form__number-container">
                  <label className="form__number-label" htmlFor="servings">
                    servings
                  </label>
                  <input
                    type="number"
                    name="servings"
                    id="servings"
                    min="1"
                    className="form__number-input"
                    defaultValue={inventoryServings}
                    required
                  />
                </div>
                <div className="form__number-container">
                  <label className="form__number-label" htmlFor="preserve_time">
                    preserve days
                  </label>
                  <input
                    className="form__number-input"
                    type="number"
                    name="preserve_time"
                    id="preserve_time"
                    defaultValue={CustomUtils.getPreserveDayByBestBefore(
                      inventoryBestBeforeDate
                    )}
                    required
                    min="1"
                  />
                </div>

                <button type="submit">edit item</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default EditInventory;
