import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: [
    // { id: 0, name: "Акции", to: "/promo" },
    { id: 1, name: "Доставка", to: "/delivery" },
    { id: 2, name: "Мы на карте", to: "/map" },
    { id: 3, name: "О нас", to: "/about" },
    { id: 4, name: "Отзывы", to: "/reviews" },
  ],
  reducers: {
    reducer: (state) => state,
  },
});

export const { reducer } = navSlice.actions;

export default navSlice.reducer;
