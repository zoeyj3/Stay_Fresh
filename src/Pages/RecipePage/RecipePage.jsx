import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import RecipeList from "../../Components/RecipeList/RecipeList";
import MenuButton from "../../Components/MenuButton/MenuButton";
import "./RecipePage.scss";
import emptyfridge from "../../Assets/images/emptyfridge.png";

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
      <div className="recipepage__titlebox">
        <MenuButton/>
        <h1>Special Pick with {names}</h1>
      </div>
      <RecipeList recipeList={recipeList} />
      {!recipeList && (
        <div className="recipepage__norecipe">
          <img className="recipepage__fridgepic" src={emptyfridge} />
          <h2> Chef is inventing recipes with {names}!</h2>
        </div>
      )}
    </section>
  );
}
export default RecipePage;
