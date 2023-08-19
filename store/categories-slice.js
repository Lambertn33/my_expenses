import { createSlice } from "@reduxjs/toolkit";
import { categories as categoriesData } from "../data/categories";

const initialState = {
  categoriesData,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
});

export default categoriesSlice.reducer;
