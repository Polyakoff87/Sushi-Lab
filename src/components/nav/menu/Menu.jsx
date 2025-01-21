import {React} from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Menu({children}) {
  const select = useSelector((state) => state.menuLinks)
  return (
    <li className={styles.menu_list}>
      <a href="#">{children}</a>
      <ul className={styles.menu_drop}>
        {select.map(el => {
          return <LinkMenuElement key={el.id} el={el} />;
        })}
      </ul>
    </li>
  );
}

function LinkMenuElement({ el }) {
  return (
    <li key={el.id}>
      <NavLink to={el.to}>{el.name}</NavLink>
    </li>
  );
}
