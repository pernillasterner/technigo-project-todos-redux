import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";

const initialState = {
  categories: categories,
  cat: "all",
  option: "all",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterTasks: (state, action) => {
      state.option = action.payload;
    },
    filterCat: (state, action) => {
      state.cat = action.payload;
    },
  },
});

export const { filterTasks, filterCat } = filterSlice.actions;

export default filterSlice.reducer;
