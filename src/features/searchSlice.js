import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: "search",
  initialState: {key: ''},
  reducers: { 
  show(state,action){
    state.key = action.payload
  },
},
});

export const { show } = searchSlice.actions;
export const search = state => state.search.key
export default searchSlice.reducer;
