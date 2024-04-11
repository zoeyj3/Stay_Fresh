import axios from "axios";
import { useState, useEffect } from "react";

function Recipe(){
    const mealApiPrefix = "https://www.themealdb.com/api/json/v2/9973533/"

    async function callRecipeByInventoryName(namelist) {
        //mock a namelist
        namelist = ["salt", "chicken"]
        
        let url = mealApiPrefix + "filter.php?i=" + namelist.join(',')
        const response = await axios.get(url);
        console.log(response.data);
    }

    async function callRecipeDetailById(idMeal) {
        //mock a namelist
        idMeal = 52813
        
        let url = mealApiPrefix + "lookup.php?i=" + idMeal
        const response = await axios.get(url);
        console.log(response.data);
    }

    useEffect(() => {
        callRecipeByInventoryName();
        callRecipeDetailById();
    }, []);
    

    return(
        <></>
    )
}
export default Recipe