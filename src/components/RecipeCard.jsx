import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Card className="p-3">
      
      <Card.Img
        variant="top"
        src={recipe.image}
        height="200"
      />

      <Card.Body>
        <h4>{recipe.name}</h4>

        <p>Cuisine : {recipe.cuisine}</p>

        <p>Time : {recipe.prepTimeMinutes} mins</p>

        <p>Difficulty : {recipe.difficulty}</p>

        <Link to={`/recipe/${recipe.id}`}>
          View Recipe
        </Link>
      </Card.Body>

    </Card>
  );
};

export default RecipeCard;