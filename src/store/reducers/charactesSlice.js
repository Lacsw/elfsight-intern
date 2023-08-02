import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/Api';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page) => {
    const response = await api.getCharacters(page);
    return response;
  }
);

const initialState = {
  characters: [],
};

export const charactesSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { fetchCharacters } = charactesSlice.actions;

export default charactesSlice.reducer;
