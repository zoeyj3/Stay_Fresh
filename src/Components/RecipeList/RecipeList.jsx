import RecipeCard from "../RecipeCard/RecipeCard";
import './RecipeList.scss'
function RecipeList({recipeList}) {
    return (

      <>

    {recipeList && (<ul className="recipelist">
    {recipeList.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          id={recipe.idMeal}
          name={recipe.strMeal}
          picture={recipe.strMealThumb}
        />
      ))}
    </ul>)}
    </>



    );
  }
  export default RecipeList;
  