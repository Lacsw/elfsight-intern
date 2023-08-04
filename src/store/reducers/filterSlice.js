import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  status: '',
  species: '',
  gender: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterName: (state, action) => {
      state.name = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.status = action.payload;
    },
    setFilterSpecies: (state, action) => {
      state.species = action.payload;
    },
    setFilterGender: (state, action) => {
      state.gender = action.payload;
    },
    clearFilter: () => initialState,
  },
});

export const {
  setFilterName,
  setFilterStatus,
  setFilterSpecies,
  setFilterGender,
  clearFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
