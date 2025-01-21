import React from "react";
import styles from './NameBoard.module.css'
import { NavLink } from "react-router-dom";

export default function NameBoard() {
  return (
    <div className={styles.nameBoard}>
      <NavLink to="/" className={{...styles}}>Sushi Lab</NavLink>
    </div>
  );
}
