import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: localStorage.getItem('user') || null,
};

const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {

    loginUser: (state, action) => {

      state.currentUser = action.payload;

      localStorage.setItem(
        'user',
        action.payload
      );

    },

    logoutUser: (state) => {

      state.currentUser = null;

      localStorage.removeItem('user');

    },

  },

});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;