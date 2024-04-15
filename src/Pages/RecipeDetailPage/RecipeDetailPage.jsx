import "./RecipeDetailPage.scss";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MenuButton from "../../Components/MenuButton/MenuButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function RecipeDetailPage() {
  const navigate = useNavigate();
  const [mealData, setMealData] = useState({});
  const { mealId } = useParams();
  console.log({ mealId });
  const mealApiURL = "https://www.themealdb.com/api/json/v2/9973533/";

  async function callRecipeDetailById(idMeal) {
    const response = await axios.get(`${mealApiURL}lookup.php?i=${idMeal}`);
    console.log(response.data.meals[0]);
    setMealData(response.data.meals[0]);
  }
  const renderIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (mealData[ingredientKey] && mealData[measureKey]) {
        ingredients.push(
          <li key={i} className="recipedetailpage__ingredients">
            {mealData[ingredientKey]} : {mealData[measureKey]}
          </li>
        );
      }
    }
    return ingredients;
  };

  useEffect(() => {
    callRecipeDetailById(mealId);
  }, []);

  return (
    <div>
      {mealData && (
        <>
          <FontAwesomeIcon
            onClick={() => navigate(-1)}
            className="recipedetailpage__icon"
            icon={faArrowLeft}
          />
          <img
            className="recipedetailpage__heroimage"
            src={mealData.strMealThumb}
          />
          <div className="recipedetailpage__titlebox">
            <p className="recipedetailpage__title">{mealData.strMeal}</p>
            <div className="recipedetailpage__infowrapper">
              <p className="recipedetailpage__info">{mealData.strArea}</p>
              <p className="recipedetailpage__info">{mealData.strCategory}</p>
            </div>
          </div>
          <div className="recipedetailpage">
            <div className="recipedetailpage__detail-container">
              <div className="recipedetailpage__ingredient-container">
                <p className="recipedetailpage__title">Ingredients</p>

                <ul className="recipedetailpage__ingredient-list">
                  {renderIngredients()}
                </ul>
              </div>
              <div className="recipedetailpage__instuction-container">
              <p className="recipedetailpage__title">Instruction</p>

                <p className="recipedetailpage__instruction"> {mealData.strInstructions}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default RecipeDetailPage;
