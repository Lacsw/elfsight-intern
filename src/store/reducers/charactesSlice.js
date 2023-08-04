import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/Api';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page, filters) => {
    const response = await api.getCharacters(page, filters);
    return response;
  }
);

const initialState = {
  characters: [],
};

export const charactesSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
  },
});

export const { setSearch, setFilterName } = charactesSlice.actions;

export default charactesSlice.reducer;
