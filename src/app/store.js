import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../features/recipe/RecipeSlice';
import useReducer  from '../features/user/UserSlice';

export const store = configureStore({
    reducer: {
        recipes: recipeReducer,
        user: userReducer
    }
});



