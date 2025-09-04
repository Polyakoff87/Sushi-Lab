import styles from "./BusketContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { busket, deleteFromBusket } from "../../../features/busketSlice";

export default function BusketContent() {
  const select = useSelector(busket).filter((el) => el.id !== 0);
  const dispatch = useDispatch();
  const sum = select.reduce((acc, el) => acc + el.cost, 0);

  let show;
  if (select.length === 0) {
    show = (
      <div className={styles.wrapper}>
        <span className={styles.span}>Ваша корзина пока пуста</span>
      </div>
    );
  } else {
    show = select.map((el) => (
      <div className={styles.wrapper} key={el.id}>
        <div className={styles.card}>
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
            onClick={() => dispatch(deleteFromBusket(el.id))}
            className={styles.deleteBtn}
          >
            Убрать из корзины
          </button>
        </div>
      </div>
    ));
  }

  return (
    <div>
      {select.length > 0 ? (
        <span className={styles.span}>
          Товаров в корзине на сумму {sum} ₽
        </span>
      ) : null}
      <div className={styles.wrapper}>{show}</div>
    </div>
  );
}
