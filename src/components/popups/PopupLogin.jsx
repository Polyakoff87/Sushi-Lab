import styles from "./PopupLogin.module.css";

export default function PopupReview({
  hide,
  enterName,
  enterPass,
  add,
  pass,
  warning,
  name,
  output
}) {
  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.reviewWindow}>
        <button className={styles.reviewClose} onClick={hide}>
          X
        </button>
        <button className={styles.saveBtn} onClick={add}>
          Войти
        </button>
        <output className={styles.reviewOutput} ref={output}>
          {warning}
        </output>
        <input
          className={styles.reviewName}
          onChange={(e) => enterName(e)}
          placeholder="Логин"
          ref={name}
        />
        <input
          className={styles.password}
          onChange={(e) => enterPass(e)}
          placeholder="Пароль"
          ref={pass}
        />
      </div>
    </div>
  );
}
