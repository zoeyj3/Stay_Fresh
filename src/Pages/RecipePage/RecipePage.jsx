import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import RecipeList from "../../Components/RecipeList/RecipeList";
import "./RecipePage.scss";



function RecipePage() {
  const { names } = useParams();
  const [recipeList, setRecipeList] = useState([]);

  const mealApiURL = "https://www.themealdb.com/api/json/v2/9973533/";

  async function callRecipeByInventoryName(ingredientName) {
    const response = await axios.get(
      `${mealApiURL}filter.php?i=${ingredientName}`
    );
    console.log(response.data.meals);
    setRecipeList(response.data.meals);
  }

  

  useEffect(() => {
    callRecipeByInventoryName(names);
  }, []);

  return (
    <section className="recipepage">
      <h1>Special Pick with {names}</h1>

        <RecipeList recipeList={recipeList}/>

    </section>
  );
}
export default RecipePage;
