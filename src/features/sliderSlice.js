import { createSlice } from "@reduxjs/toolkit";
import slider1 from "../pictures/slider/1.jpeg";
import slider2 from "../pictures/slider/2.jpeg";
import slider3 from "../pictures/slider/3.jpeg";
import slider4 from "../pictures/slider/4.jpeg";
import slider5 from "../pictures/slider/5.jpeg";
import slider6 from "../pictures/slider/6.jpeg";
import slider7 from "../pictures/slider/7.jpeg";
import slider8 from "../pictures/slider/8.jpeg";
import slider9 from "../pictures/slider/9.jpeg";

export const sliderSlice = createSlice({
    name: 'slider',
    initialState:[
        { id: 0, url: slider1 },
        { id: 1, url: slider2 },
        { id: 2, url: slider3 },
        { id: 3, url: slider4 },
        { id: 4, url: slider5 },
        { id: 5, url: slider6 },
        { id: 6, url: slider7 },
        { id: 7, url: slider8 },
        { id: 8, url: slider9 },
      ],
      reducers: {
        reducer: (state) => state,
      },
})

export const { reducer } = sliderSlice.actions;

export default sliderSlice.reducer;