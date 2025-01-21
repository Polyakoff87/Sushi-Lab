import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import goodsReducer from "../features/goodsSlice";
import busketReducer from "../features/busketSlice";
import reviewReducer from "../features/reviewSlice";
import promoReducer from "../features/promoSlice";
import sliderReducer from "../features/sliderSlice";
import navReducer from "../features/navSlice";
import menuLinksReducer from "../features/menuLinksSlice";
import searchReducer from "../features/searchSlice";
import goodsForSearchReducer from "../features/goodsForSearchSlice";

const rootReducer = combineReducers(
  {
  // { goods: goodsReducer,
    busket: busketReducer,
    review: reviewReducer,
    promo: promoReducer,
    slider: sliderReducer,
    nav: navReducer,
    menuLinks: menuLinksReducer,
    goodsForSearch: goodsForSearchReducer,
    search: searchReducer,
  }
)

const persistConfig = {
  key: 'root', 
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;

