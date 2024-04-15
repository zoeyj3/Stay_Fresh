import "./RecipeCard.scss";
import { useNavigate } from "react-router-dom";

function RecipeCard({ key, id, name, picture }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/recipe-detail/${id}`);
  }
  return (
    <li className="recipecard" onClick={handleClick}>
      <div className="recipecard__pic-container">
        <img className="recipecard__pic" src={picture} />
      </div>
      <h2 className="recipecard__name">{name}</h2>
    </li>
  );
}
export default RecipeCard;
