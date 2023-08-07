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
  selectedCharacter: '',
};

export const charactesSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.characters = action.payload;
    },
    setSelectedCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
  },
});

export const { setSearch, setFilterName, setSelectedCharacter } =
  charactesSlice.actions;

export default charactesSlice.reducer;
