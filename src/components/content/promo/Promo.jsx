import React from "react";
import styles from "./Promo.module.css";
import { useSelector } from "react-redux";

export default function Promo() {
  const select = useSelector((state) => state.promo);
  return (
    <div className={styles.wrapper}    >
      {select.map(el => {
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
