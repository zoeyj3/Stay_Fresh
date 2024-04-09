import { useState } from "react";
import axios from "axios";

import './Form.scss';

function Form({ objectId, keyword }) {


    // if (!objectId) 

    

    function handleAddInventory(event){
        event.preventDefault();

        function getCurrentDate() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0-indexed
            const day = String(now.getDate()).padStart(2, '0');
        
            return `${year}-${month}-${day}`;
        }

            const newItem = {
                name:event.target.name.value,
                storing_place:event.target.storing_place.value,
                servings:event.target.servings.value,
                create_time:getCurrentDate(event),
                preserve_time:event.target.preserve_time.value,
            };
            console.log(newItem)
        
    }

  return (
   <form className="form" id="form" onSubmit={handleAddInventory}>
    <label htmlFor="name">name</label>
    <input type="text" name="name" id="name" placeholder="Item Name"></input>
    <p>storing in</p>
    <label htmlFor="storing_place">fridge</label>
    <input value="fridge" id="fridge" name="storing_place" type="radio"/>
    <label htmlFor="storing_place">freezer</label>
    <input value="freezer" id="freezer" name="storing_place" type="radio"/>
    <label htmlFor="storing_place">pantry</label>
    <input value="pantry" id="pantry" name="storing_place" type="radio"/>
    <label htmlFor="servings">servings</label>
    <input type="number" name="servings" id="servings" min="1"></input>
    <label htmlFor="preserve_time">preserve days</label>
    <input type="number" name="preserve_time" id="preserve_time" min="1" ></input>

    <button type="submit">add item</button>
    

   </form>
  );
}
export default Form;
