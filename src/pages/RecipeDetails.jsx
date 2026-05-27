import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRecipe } from '../features/recipe/RecipeSlice';
import { useAuth } from '../context/AuthContext';


const RecipeDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const recipe = useSelector((state) =>
    state.recipes.items.find((item) => item.id == id)
  );

  if (!recipe) {
    return (
      <div className="container mt-5 text-center">
        <h2>Recipe Not Found</h2>

        <Link to="/" className="btn btn-primary mt-3">
          Back
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    dispatch(deleteRecipe(recipe.id));
    navigate('/');
  };

  return (
    <div className="container mt-5">

      <div className="card p-4 shadow">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="img-fluid rounded mb-4"
          style={{ height: '350px', objectFit: 'cover' }}
        />

        <h1>{recipe.name}</h1>

        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>

        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>

        <hr />

        <h3>Ingredients</h3>

        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="mt-4">Instructions</h3>

        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <div className="mt-4 d-flex gap-3">

          <Link
            to={`/edit-recipe/${recipe.id}`}
            className="btn btn-warning"
          >
            Edit
          </Link>

          <button
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default RecipeDetails;