import React from "react";
import styles from "./Search.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { show } from '../../../features/searchSlice'
import { useState, useEffect, useContext } from "react";

export default function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");



  useEffect(() => {
    dispatch(show(value));
  }, [value, dispatch]);

  return (
    <div>
      <NavLink to="/search">
        <input
          onChange={(e) => setValue(e.target.value)}
          className={styles.search}
          placeholder="Поиск по сайту"
        />
      </NavLink>
    </div>
  );
}
