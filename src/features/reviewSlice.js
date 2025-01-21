import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4} from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    name: "Сергей",
    text: "Спасибо вам огромное за быструю доставку, а главное- за высочайшее качество роллов! Вкуснее роллов я не ел, честно и искренне признаю! Это потрясающе вкусно, красиво оформлено и размеры порций очень порадовали! Теперь буду заказывать роллы только у вас! Да, и цена вкусная! Вы большие молодцы, спасибо вам!",
  },
  {
    id: uuidv4(),
    name: "Анатолий",
    text: "Добрый день, всегда заказываем у вас роллы, все очень быстро, вкусно, всегда свежие продукты. Очень вежливые работники.",
  },
  {
    id: uuidv4(),
    name: "Екатерина",
    text: "Заказываем не первый раз и всегда приятно удивляемся вашей вкусноте. Меня покорил Цезарь - это теперь моя любовь. Подобную мы ели только в Москве в одной из известных сетей. Спасибо Вам за акции - это один из привлекающих моментов. Процветания вам. Теперь пока не перепробуем весь ассортимент, не остановимся. Да и потом тоже.",
  },
  {
    id: uuidv4(),
    name: "Виктория",
    text: "Несколько раз заказывала акционные сеты и всегда они были ооочень вкусными, спасибо большое!",
  },
  {
    id: uuidv4(),
    name: "Андрей",
    text: "Здесь вкусно! Вкуснейшая еда. Все очень чисто и опрятно, улыбчивый персонал. Порции поражают размерами и артистичностью оформления! Жил бы в Вашем городе - был бы постоянным клиентом. Приеду - обязательно зайду к вам еще. Спасибо, Амигос!",
  },
  {
    id: uuidv4(),
    name: "Егор",
    text: "Сегодня делали заказ, остались очень довольны, всё очень вкусно, доставка во время. Рекомендую, уже три года являемся вашими поклонниками!!!",
  },
  {
    id: uuidv4(),
    name: "Максим",
    text: "Заказ пришел очень быстро, все свеженькое и очень вкусное, спасибо! Будем заказывать еще.",
  },
  {
    id: uuidv4(),
    name: "Наталья",
    text: "Сделала вчера заказ в офис в честь дня рождения. Коллеги были в восторге от качества роллов! Огромное спасибо за быструю доставку и такие вкусные блюда! Теперь буду заказывать домой.",
  },
  {
    id: uuidv4(),
    name: "Николай",
    text: "Добрый день! Заказываем уже несколько лет. Всё вкусно, хорошие порции, роллы всегда свежие! Так держать, будем заказывать и дальше! Не подводите!",
  },
  {
    id: uuidv4(),
    name: "Марина",
    text: "Здравствуйте! Заказывала суши вечером, спасибо поварам, очень вкусно, хоть и у вас конец рабочего дня. Авокадо мягкий, рис вкусный! Спасибо за вашу работу, выполненную с любовью.",
  },
];

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addReview } = reviewSlice.actions;
export const dataReview = (state) => state.review;
export default reviewSlice.reducer;
