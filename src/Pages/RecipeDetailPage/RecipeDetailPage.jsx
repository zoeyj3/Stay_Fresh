import "./RecipeDetailPage.scss";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MenuButton from "../../Components/MenuButton/MenuButton";

function RecipeDetailPage() {
  const [mealData, setMealData] = useState({});
  const { mealId } = useParams();
  console.log({ mealId });
  const mealApiURL = "https://www.themealdb.com/api/json/v2/9973533/";

  async function callRecipeDetailById(idMeal) {
    const response = await axios.get(`${mealApiURL}lookup.php?i=${idMeal}`);
    console.log(response.data.meals[0]);
    setMealData(response.data.meals[0]);
  }

  useEffect(() => {
    callRecipeDetailById(mealId);
  }, []);

  return (
    <div className="recipedetailpage">
      {mealData && (
        <>
          <div className="recipedetailpage__titlebox">
            <MenuButton />
            <h1>{mealData.strMeal}</h1>
          </div>

          <img className="recipedetailpage__heroimage" src={mealData.strMealThumb} />
          <p>{mealData.strInstructions}</p>
        </>
      )}
    </div>
  );
}
export default RecipeDetailPage;
