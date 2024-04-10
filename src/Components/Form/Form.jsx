
import { useState } from "react";

import axios from "axios";

import "./Form.scss";

function Form({ objectId, keyword, render,setNewInventory }) {
  const [hidden, sethidden] = useState(true);


  function handleAddInventory(event) {
    event.preventDefault();
    function getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    function getBestBeforeDate(preservingTime) {
      const now = new Date();
      const daysToAdd = parseInt(preservingTime, 10);
      if (!isNaN(daysToAdd)) {
        now.setDate(now.getDate() + daysToAdd);
      }
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    const newItem = {
      name: event.target.name.value,
      storing_place: event.target.storing_place.value,
      servings: event.target.servings.value,
      create_time: getCurrentDate(event),
      preserve_time: event.target.preserve_time.value,
      best_before: getBestBeforeDate(event.target.preserve_time.value),
    };
    console.log(newItem);



    try {
      const response = axios.post("http://localhost:8080/add", newItem);
      const Answer = response.data;
      console.log(Answer);
      setNewInventory(newItem)
      document.getElementById("form").reset();
      
    } catch (error) {
      console.error("Error adding item", error);
    }
    
  }
  function handleOnclick(event) {
    sethidden(false);
  }

  return (
    <form className="form" id="form" onSubmit={handleAddInventory}>
      <input
        className="form__add-container"
        type="text"
        name="name"
        id="name"
        placeholder="Add a Inventory"
        onClick={handleOnclick}
      ></input>
      {!hidden && (<div className="form__detail-container">
        <div className="form__radios-container">
          <div className="form__radio-container">
            <input
              value="fridge"
              id="fridge"
              name="storing_place"
              type="radio"
            />
            <label htmlFor="fridge">fridge</label>
          </div>
          <div className="form__radio-container">
            <input
              value="freezer"
              id="freezer"
              name="storing_place"
              type="radio"
            />
            <label htmlFor="freezer">freezer</label>
          </div>
          <div className="form__radio-container">
            <input
              value="pantry"
              id="pantry"
              name="storing_place"
              type="radio"
            />
            <label htmlFor="storing_place">pantry</label>
          </div>
        </div>
        <div className="form__number-container">
          <label htmlFor="servings">servings</label>
          <input type="number" name="servings" id="servings" min="1"/>
        </div>
        <div className="form__number-container"></div>
        <label htmlFor="preserve_time">preserve days</label>
        <input
          type="number"
          name="preserve_time"
          id="preserve_time"
          min="1"
        />

        <button type="submit">add item</button>
      </div>)}
    </form>
  );
}
export default Form;
