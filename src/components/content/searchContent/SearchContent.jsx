import styles from "./SearchContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { goodsForSearch } from "../../../features/goodsForSearchSlice";
import { search } from "../../../features/searchSlice";
import { addToBusket } from "../../../features/busketSlice";

export default function BusketContent() {
  const dataGoods = useSelector(goodsForSearch);
  const valueSearch = useSelector(search);
  const dispatch = useDispatch();

  let showGoods = dataGoods.filter((el) =>
    el.name.toLowerCase().includes(valueSearch.toLowerCase().trim())
  );

console.log(showGoods)

  let show = showGoods.map((el) => {
    return (
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
    <div>
      <div className={styles.wrapper}>{show}</div>
    </div>
  );
}
