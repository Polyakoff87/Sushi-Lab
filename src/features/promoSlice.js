import { createSlice } from "@reduxjs/toolkit";
import promo1 from "../pictures/promo/promo_1.png";
import promo2 from "../pictures/promo/promo_2.png";
import promo3 from "../pictures/promo/promo_3.png";

export const promoSlice = createSlice({
  name: "promo",
  initialState: [
    { id: 0, name: "Скидка при самовывозе 10%", url: promo1 },
    { id: 1, name: "Скидка на все сеты 15%", url: promo2 },
    { id: 2, name: "Скидка именинникам 20%", url: promo3 },
  ],
  reducers: {
    reducer: (state) => state,
  },
});

export const { reducer } = promoSlice.actions;

export default promoSlice.reducer;
