import React, { useState, useRef } from "react";
import styles from "./Login.module.css";
import PopupLogin from "../../popups/PopupLogin";

export default function Login() {
  const [isVisible, setIsVisible] = useState({ display: "none" });
  const [authorName, setAuthorName] = useState("Login");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("Авторизуйтесь для входа в личный кабинет");

  let name = useRef();
  let pass = useRef();
  let output = useRef();

  function enterName(e) {
    setAuthorName(e.target.value);
  }

  function enterPass(e) {
    setPassword(e.target.value);
  }

  function clear() {
    setPassword("");
    setWarning("");
  }

  function add() {
    if (authorName.length < 4 || password < 6) {
      setWarning(
        "Введите Ваш логин (не меньше 4 знаков) и пароль (не меньше 6)"
      );
    } else {
      hide();
      pass.current.value = "";
      output.current.value = "";
      clear();
    }
  }

  function show() {
    let current = { ...isVisible, display: "block" };
    setIsVisible(current);
  }

  function hide() {
    let current = { ...isVisible, display: "none" };
    setIsVisible(current);
    name.current.value = "";
    pass.current.value = "";
    output.current.value = "";
    clear();
  }

  return (
    <div className={styles.login}>
      <a className={styles.login} href="#" onClick={show}>
        <button className={styles.login_btn}></button>
      </a>
      <p className={styles.output} id="output_lk">
        <a href="#" onClick={show}>
          {authorName}
        </a>
      </p>
      <div style={isVisible}>
        <PopupLogin
          hide={hide}
          enterName={enterName}
          enterPass={enterPass}
          add={add}
          warning={warning}
          name={name}
          pass={pass}
          output={output}
        />
      </div>
    </div>
  );
}
