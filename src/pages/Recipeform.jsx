import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, updateRecipe } from '../features/recipe/RecipeSlice';
import { Form, Button, Alert, Card } from 'react-bootstrap';

const RecipeForm = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isEdit = id ? true : false;

  const oldRecipe = useSelector((state) =>
    state.recipes.items.find((item) => item.id == id)
  );

  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {

    if (isEdit && oldRecipe) {
      setName(oldRecipe.name);
      setCuisine(oldRecipe.cuisine);
      setIngredients(oldRecipe.ingredients.join(', '));
      setInstructions(oldRecipe.instructions.join(', '));
    }

  }, [oldRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipeData = {
      id: isEdit ? oldRecipe.id : Date.now(),
      name,
      cuisine,
      ingredients: ingredients.split(','),
      instructions: instructions.split(','),
      image:
        'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500',
      servings: 4,
    };

    if (isEdit) {
      dispatch(updateRecipe(recipeData));
    } else {
      dispatch(addRecipe(recipeData));
    }

    navigate('/');
  };

  return (
    <div className="container mt-5">

      <form
        onSubmit={handleSubmit}
        className="w-75 mx-auto p-4 shadow rounded"
      >

        <h2 className="text-center mb-4">
          {isEdit ? 'Edit Recipe' : 'Add Recipe'}
        </h2>

        <input
          type="text"
          placeholder="Recipe Name"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cuisine"
          className="form-control mb-3"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />

        <textarea
          placeholder="Ingredients separated by comma"
          className="form-control mb-3"
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <textarea
          placeholder="Instructions separated by comma"
          className="form-control mb-3"
          rows="4"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />

        <button className="btn btn-primary w-100">
          {isEdit ? 'Update Recipe' : 'Add Recipe'}
        </button>

      </form>

    </div>
  );
};

export default RecipeForm;