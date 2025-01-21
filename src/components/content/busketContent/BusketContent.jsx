import styles from "./BusketContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { busket, deleteFromBusket } from "../../../features/busketSlice";

export default function BusketContent() {
  const select = useSelector(busket);
  const dispatch = useDispatch();
  const sum = select.reduce((acc, el) => acc + el.cost, 0);

  let show;
  if (select.length === 1) {
    show = <div className={styles.wrapper}><span className={styles.span}>Ваша корзина пока пуста</span></div>;
  } else {
    show = select
      .filter((el) => el.id !== 0)
      .map((el) => {
        return (
          <div className={styles.wrapper}>
          <div key={el.id}>
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
          </div>
        );
      });
  }

  return (
    <div>
      {select.length > 1 ? (
        <output className={styles.output}>
          Товаров в корзине на сумму {sum} ₽
        </output>
      ) : null}
      <div className={styles.wrapper}>{show}</div>
    </div>
  );
}
