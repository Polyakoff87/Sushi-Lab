import { createSlice } from "@reduxjs/toolkit";

export const menuLinksSlice = createSlice({
    name: 'menuLinks',
    initialState: [
        { id: 0, name: "Роллы", to: "/rolls" },
        { id: 1, name: "Супы", to: "/soups" },
        { id: 2, name: "Суши", to: "/sushi" },
        { id: 3, name: "Салаты", to: "/salads" },
        { id: 4, name: "Сеты", to: "/sets" },
      ],
      reducers: {
        reducer: (state) => state,
      },
    });
    
    export const { reducer } = menuLinksSlice.actions;
    
    export default menuLinksSlice.reducer;
