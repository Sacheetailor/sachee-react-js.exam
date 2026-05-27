import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipe/RecipeSlice';

const RecipeList = () => {

  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes.items);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const filterRecipe = recipes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="container mt-4">

      <h2 className="mb-4">
        Recipe List
      </h2>

      <input
        type="text"
        placeholder="Search Recipe"
        className="form-control mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">

        {filterRecipe.map((recipe) => (

          <div className="col-md-4 mb-4" key={recipe.id}>

            <div className="card p-3">

              <h4>{recipe.name}</h4>

              <p>
                Cuisine : {recipe.cuisine}
              </p>

              <p>
                Difficulty : {recipe.difficulty}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecipeList;