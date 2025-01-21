import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: 0, name: "Ваша корзина пока пуста", url: null, cost: null },
];

export const busketSlice = createSlice({
  name: "busket",
  initialState,
  reducers: {
    addToBusket(state, action) {
      if (state.find((el) => el.id === action.payload.id)) {
        state.push({ ...action.payload, id: action.payload.id + uuidv4() });
      } else {
        state.push(action.payload);
      }
    },
    deleteFromBusket(state, action) {
      const newState = state.filter((el) => el.id !== action.payload);
      return newState;
    },
  },
});

export const { addToBusket, deleteFromBusket } = busketSlice.actions;
export const busket = (state) => state.busket;
export default busketSlice.reducer;
