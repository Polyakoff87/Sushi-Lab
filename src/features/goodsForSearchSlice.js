import { createSlice } from "@reduxjs/toolkit";
import roll1 from "../pictures/rolls/Запеченый с креветкой.jpg";
import roll2 from "../pictures/rolls/Запеченый с лососем.jpg";
import roll3 from "../pictures/rolls/Калифорния.jpg";
import roll4 from "../pictures/rolls/Креветка с чили.jpg";
import roll5 from "../pictures/rolls/С лососем.jpg";
import roll6 from "../pictures/rolls/С лососем и манго.jpg";
import roll7 from "../pictures/rolls/С снежным крабом.jpg";
import roll8 from "../pictures/rolls/Темпура с креветкой.jpg";
import roll9 from "../pictures/rolls/Фила с угрем.jpg";
import soup1 from "../pictures/soups/Борщ.jpg";
import soup2 from "../pictures/soups/Грибной крем суп.jpg";
import soup3 from "../pictures/soups/Кимчи.jpg";
import soup4 from "../pictures/soups/Куриный с лапшой.jpg";
import soup5 from "../pictures/soups/Мисо.jpg";
import soup6 from "../pictures/soups/Рамен с говядиной.jpg";
import soup7 from "../pictures/soups/Солянка с мясом.jpg";
import soup8 from "../pictures/soups/Том ям.jpg";
import soup9 from "../pictures/soups/Финская уха с слососем.jpg";
import sushi1 from "../pictures/sushi/Кунсей спайс.jpg";
import sushi2 from "../pictures/sushi/Магуро спайс.jpg";
import sushi3 from "../pictures/sushi/Сяке.jpg";
import sushi4 from "../pictures/sushi/Сяке спайс.jpg";
import sushi5 from "../pictures/sushi/Унаги.jpg";
import sushi6 from "../pictures/sushi/Унаги спайс.jpg";
import sushi7 from "../pictures/sushi/Хотатэ спайс.jpg";
import sushi8 from "../pictures/sushi/Эби.jpg";
import sushi9 from "../pictures/sushi/Эби хот.jpg";
import salads1 from "../pictures/salads/Греческий.jpg";
import salads2 from "../pictures/salads/С креветкаит и манго.jpg";
import salads3 from "../pictures/salads/С чукой.jpg";
import salads4 from "../pictures/salads/Со стрипсами и беконом.jpg";
import salads5 from "../pictures/salads/Теплый с говядиной.jpg";
import salads6 from "../pictures/salads/Теплый с курицей.jpg";
import salads7 from "../pictures/salads/Цезарь с креветками.jpg";
import salads8 from "../pictures/salads/Цезарь с курицей.jpg";
import sets1 from "../pictures/sets/Кадзоку.jpg";
import sets2 from "../pictures/sets/Калифорния.jpg";
import sets3 from "../pictures/sets/Нику.jpg";
import sets4 from "../pictures/sets/Сайтама.jpg";
import sets5 from "../pictures/sets/Санкай.jpg";
import sets6 from "../pictures/sets/Сакура.jpg";
import sets7 from "../pictures/sets/Темпура.jpg";
import sets8 from "../pictures/sets/Филадельфия.jpg";
import sets9 from "../pictures/sets/Фунэ.jpg";
import { v4 as uuidv4 } from "uuid";

export const goodsForSearchSlice = createSlice({
  name: "goodsForSearch",
  initialState: [
    {
      id: uuidv4(),
      name: "Ролл запеченный с креветкой",
      url: roll1,
      cost: 360,
    },
    { id: uuidv4(), name: "Ролл запеченный с лососем", url: roll2, cost: 410 },
    { id: uuidv4(), name: "Калифорния", url: roll3, cost: 390 },
    { id: uuidv4(), name: "Ролл с креветкой и чили", url: roll4, cost: 350 },
    { id: uuidv4(), name: "Ролл с лососем", url: roll5, cost: 400 },
    { id: uuidv4(), name: "Ролл с лососем и манго", url: roll6, cost: 380 },
    { id: uuidv4(), name: "Ролл с снежным крабом", url: roll7, cost: 330 },
    { id: uuidv4(), name: "Ролл в темпуре с креветкой", url: roll8, cost: 345 },
    { id: uuidv4(), name: "Филадельфия с угрем", url: roll9, cost: 380 },
    { id: uuidv4(), name: "Борщ", url: soup1, cost: 360 },
    { id: uuidv4(), name: "Грибной крем суп", url: soup2, cost: 410 },
    { id: uuidv4(), name: "Кимчи", url: soup3, cost: 390 },
    { id: uuidv4(), name: "Куриный суп с лапшой", url: soup4, cost: 350 },
    { id: uuidv4(), name: "Мисо", url: soup5, cost: 400 },
    { id: uuidv4(), name: "Рамен с говядиной", url: soup6, cost: 380 },
    { id: uuidv4(), name: "Солянка с мясом", url: soup7, cost: 330 },
    { id: uuidv4(), name: "Том ям", url: soup8, cost: 345 },
    { id: uuidv4(), name: "Финская уха с лососем", url: soup9, cost: 380 },
    { id: uuidv4(), name: "Кунсей спайс", url: sushi1, cost: 360 },
    { id: uuidv4(), name: "Магуро спайс", url: sushi2, cost: 410 },
    { id: uuidv4(), name: "Сяке", url: sushi3, cost: 390 },
    { id: uuidv4(), name: "Сяке спайс", url: sushi4, cost: 350 },
    { id: uuidv4(), name: "Унаги", url: sushi5, cost: 400 },
    { id: uuidv4(), name: "Унаги спайс", url: sushi6, cost: 380 },
    { id: uuidv4(), name: "Хотатэ спайс", url: sushi7, cost: 330 },
    { id: uuidv4(), name: "Эби", url: sushi8, cost: 345 },
    { id: uuidv4(), name: "Эби хот", url: sushi9, cost: 380 },
    {
      id: uuidv4(),
      name: "Цезарь с креветками с курицей",
      url: salads8,
      cost: 345,
    },
    { id: uuidv4(), name: "Греческий", url: salads1, cost: 360 },
    {
      id: uuidv4(),
      name: "Салат со стрипсами и беконом",
      url: salads4,
      cost: 350,
    },
    {
      id: uuidv4(),
      name: "Салат с креветками и манго",
      url: salads2,
      cost: 410,
    },
    { id: uuidv4(), name: "Салат с чукой", url: salads3, cost: 390 },
    { id: uuidv4(), name: "Теплый салат с говядиной", url: salads5, cost: 400 },
    { id: uuidv4(), name: "Теплый салат с курицей", url: salads6, cost: 380 },
    { id: uuidv4(), name: "Цезарь с креветками", url: salads7, cost: 330 },
    { id: uuidv4(), name: "Кадзоку", url: sets1, cost: 360 },
    { id: uuidv4(), name: "Калифорния", url: sets2, cost: 410 },
    { id: uuidv4(), name: "Нику", url: sets3, cost: 390 },
    { id: uuidv4(), name: "Сайтама", url: sets4, cost: 350 },
    { id: uuidv4(), name: "Санкай", url: sets5, cost: 400 },
    { id: uuidv4(), name: "Сакура", url: sets6, cost: 380 },
    { id: uuidv4(), name: "Темпура", url: sets7, cost: 330 },
    { id: uuidv4(), name: "Филадельфия", url: sets8, cost: 345 },
    { id: uuidv4(), name: "Фунэ", url: sets9, cost: 380 },
  ],
  reducer: (state) => state,
});

export const { reducer } = goodsForSearchSlice.actions;
export default goodsForSearchSlice.reducer;
export const goodsForSearch = (state) => state.goodsForSearch;
