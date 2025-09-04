import React from "react";
import styles from "./MenuElement.module.css";
import { useDispatch} from "react-redux";
import { addToBusket } from "../../features/busketSlice";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MenuElement({ kind }) {
  // const select = useSelector((state) => state.goods);

  let [res, setRes] = useState();

  useEffect(() => {
    const SERVER_URL = "http://localhost:3001/goods";

    axios.get(SERVER_URL).then((resp) => {
      let all = resp.data;
      setRes(all);
    });
  }, []);

  let rollsData = res
    ? res[0].rolls.map((el, i) => {
        return <ItemElement key={i} props={el} />;
      })
    : null;

  let soupsData = res
    ? res[1].soups.map((el, i) => {
        return <ItemElement key={i} props={el} />;
      })
    : null;

  let sushiData = res
    ? res[2].sushi.map((el, i) => {
        return <ItemElement key={i} props={el} />;
      })
    : null;

  let saladsData = res
    ? res[3].salads.map((el, i) => {
        return <ItemElement key={i} props={el} />;
      })
    : null;

  let setsData = res
    ? res[4].sets.map((el, i) => {
        return <ItemElement key={i} props={el} />;
      })
    : null;

  switch (kind) {
    case "rolls":
      return <div className={styles.wrapper}>{rollsData}</div>;
    case "soups":
      return <div className={styles.wrapper}>{soupsData}</div>;
    case "sushi":
      return <div className={styles.wrapper}>{sushiData}</div>;
    case "salads":
      return <div className={styles.wrapper}>{saladsData}</div>;
    case "sets":
      return <div className={styles.wrapper}>{setsData}</div>;
    default:
      return kind;
  }
}

function ItemElement({ props }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card} key={props.id}>
      <div>
        <img
          style={{
            borderTopRightRadius: "35px",
            borderTopLeftRadius: "35px",
          }}
          src={props.url}
          alt={props.name}
        />
      </div>
      <div className={styles.text}>
        {props.name}
        <span className={styles.price}>{props.cost} ₽</span>
      </div>
      <button
        className={styles.addToBusketBtn}
        onClick={() =>
          dispatch(
            addToBusket({
              id: props.id,
              name: props.name,
              url: props.url,
              cost: props.cost,
            })
          )
        }
      >
        Добавить в корзину
      </button>
    </div>
  );
}
