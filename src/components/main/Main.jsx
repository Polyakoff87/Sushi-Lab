import { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { goodsForSearch } from "../../features/goodsForSearchSlice";
import { addToBusket } from "../../features/busketSlice";



export default function Main() {
  const dataGoods = useSelector(goodsForSearch);
  const dispatch = useDispatch();

  
  let show = dataGoods.map((el) => {
    return (
      <div key={el.id}>
        <div className={styles.menu_card}>
          <div>
            <img
              style={{
                borderTopRightRadius: "35px",
                borderTopLeftRadius: "35px",
              }}
              src={el.url}
              alt={el.name}
            />
          </div>
          <div className={styles.text}>
            {el.name}
            <span className={styles.price}>{el.cost} ₽</span>
          </div>
          <button
            className={styles.addToBusketBtn}
            onClick={() =>
              dispatch(
                addToBusket({
                  id: el.id,
                  name: el.name,
                  url: el.url,
                  cost: el.cost,
                })
              )
            }
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.promo_text}>Наши акции</div>
      <Promo></Promo>
      <div className={styles.promo_text}>Наше меню</div>
      <div className={styles.menu_wrapper}>{show}</div>
      
    </div>
  );
}

function Promo() {
  const select = useSelector((state) => state.promo);
  return (
    <div className={styles.promo_wrapper}>
      {select.map((el) => {
        return <PromoCard key={el.id} el={el} />;
      })}
    </div>
  );
}

function PromoCard({ el }) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img
          src={el.url}
          alt={el.name}
          style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
        />
      </div>
      <div className={styles.text} key={el.id}>
        {el.name}
      </div>
    </div>
  );
}
