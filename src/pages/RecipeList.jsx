import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../features/recipe/RecipeSlice';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';

const RecipeList = () => {

  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.recipes);

  const [search, setSearch] = useState('');

  useEffect(() => {

    if (status === 'idle') {
      dispatch(fetchRecipes());
    }

  }, [status]);

  if (status === 'loading') {
    return <Loader />;
  }

  const filteredRecipes = items.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <input
        type="text"
        placeholder="Search Recipe..."
        className="form-control mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">

        {filteredRecipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}

      </div>

    </div>
  );
};

export default RecipeList;