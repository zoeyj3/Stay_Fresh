import { useState } from "react";

import axios from "axios";

import "./Form.scss";

import * as CustomUtils from "../../CustomUtils.js";

function Form({ objectId, keyword, setNewInventory }) {
  const [hidden, setHidden] = useState(true);
  const [storingCondition, setStoringCondition] = useState("");

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // click to show detail input
  function handleOnclick() {
    setHidden(false);
  }


  // click storing place to change the default time
  function handlePreserveTime(event) {
    console.log(event.target.value);
    setStoringCondition(event.target.value);
  }
  function getDefaultPreserveTime(storingCondition) {
    switch (storingCondition) {
      case "pantry":
        return 360;
      case "fridge":
        return 5;
      case "freezer":
        return 120;
    }
  }

  async function handleAddInventory(event) {
    event.preventDefault();

    const newItem = {
      inventory_name: event.target.name.value,
      storing_place: event.target.storing_place.value,
      servings: event.target.servings.value,
      preserve_time: event.target.preserve_time.value,
      best_before: CustomUtils.getBestBeforeDate(
        event.target.preserve_time.value
      ),
    };
    console.log(newItem);
    try {
      const response = await axios.post(CustomUtils.API_ADDRESS + "/inventory/add", newItem);

      console.log(response.data);
      setNewInventory(newItem);
      document.getElementById("form").reset();
    } catch (error) {
    if (error.response.status === 409) {
      alert(
        "This item already exists. Do not buy it.\u{1F604}\u{1F604}\u{1F604}"
      );
    } else {
      console.error("Error adding item", error);
    }
  }
}

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const isFormValid = () => {
    if (name && storingCondition && number) {
      return true;
    }
  };

  return (
    <form className="form" id="form" onSubmit={handleAddInventory}>
      <input
        className="form__add-container"
        type="text"
        name="name"
        id="name"
        placeholder="Add a Inventory"
        onClick={handleOnclick}
        onChange={handleNameChange}
      ></input>
      {!hidden && (
        <div className="form__detail-container">
          <div className="form__radios-container">
            <div className="form__radio-container">
              <input
                className="form__radio"
                value="fridge"
                id="fridge"
                name="storing_place"
                type="radio"
                onChange={handlePreserveTime}
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
                onChange={handlePreserveTime}
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
                onChange={handlePreserveTime}
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
              onChange={handleNumberChange}
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
              defaultValue={getDefaultPreserveTime(storingCondition)}
              min="1"
            />
          </div>

          <button
            className={`form__number-button btn btn${
              isFormValid() ? "" : "-invalid"
            }`}
            type="submit"
            disabled={!isFormValid()}
          >
            add item
          </button>
        </div>
      )}
    </form>
  );
}
export default Form
