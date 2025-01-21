import React from "react";
import styles from"./BusketLink.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {busket} from '../../../features/busketSlice'

export default function BusketLink() {
  const select = useSelector(busket);
  const sum = select.reduce((acc, el) => acc + el.cost
  , 0)

  return (
    <div className={styles.busket_wrapper}>
    <div className={styles.busketLink}>
      <NavLink to="/busket">
        <button className={styles.busketLink_btn}></button>
      </NavLink>
      <p className={styles.output}>
        <output>{sum} ₽</output>
      </p>
    </div>
    </div>
  );
}
