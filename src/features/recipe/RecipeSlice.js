import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:3000/recipes';


// GET DATA
export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {

    const response = await axios.get(API);
    return response.data;

  }
);


// ADD DATA
export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async (recipe) => {

    const response = await axios.post(API, recipe);
    return response.data;

  }
);


// UPDATE DATA
export const updateRecipe = createAsyncThunk(
  'recipes/updateRecipe',
  async (recipe) => {

    const response = await axios.put(
      `${API}/${recipe.id}`,
      recipe
    );

    return response.data;

  }
);


// DELETE DATA
export const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async (id) => {

    await axios.delete(`${API}/${id}`);
    return id;

  }
);


const recipeSlice = createSlice({
  name: 'recipes',

  initialState: {
    items: [],
    status: 'idle',
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      // FETCH
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })

      // ADD
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // UPDATE
      .addCase(updateRecipe.fulfilled, (state, action) => {

        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        state.items[index] = action.payload;

      })

      // DELETE
      .addCase(deleteRecipe.fulfilled, (state, action) => {

        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );

      });

  },

});

export default recipeSlice.reducer;