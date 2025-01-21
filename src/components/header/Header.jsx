import React from "react";
import Search from "./search/Search";
import NameBoard from "./nameBoard/NameBoard";
import Login from "./login/Login";
import BusketLink from "./busket/BusketLink";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Search />
      <NameBoard />
      <Login />
      <BusketLink />
    </div>
  );
}
