import "./RecipeCard.scss";
import { useNavigate, Link, useParams } from "react-router-dom";



function RecipeCard({ key, id, name, picture }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/recipe-detail/${id}`);
  }
  return (
    
    <li className="recipecard" onClick={handleClick}>
      <img className="recipecard__pic" src={picture} />
      <h2>{name}</h2>
    </li>
  );
}
export default RecipeCard;
