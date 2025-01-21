import styles from "./PopupReview.module.css";

export default function PopupReview({
  hide,
  enterName,
  enterReview,
  add,
  warning,
  name,
  review,
  output,
}) {
  return (
    <div className={styles.reviewWrapper}>
      <div className={styles.reviewWindow}>
        <button className={styles.reviewClose} onClick={hide}>
          X
        </button>
        <textarea
          className={styles.reviewText}
          placeholder="Здесь можно оставить свой отзыв (не более 300 знаков)"
          maxLength={300}
          onChange={(e) => enterReview(e)}
          ref={review}
        ></textarea>
        <button className={styles.saveBtn} onClick={add}>
          Сохранить отзыв
        </button>
        <output className={styles.reviewOutput} ref={output}>
          {warning}
        </output>
        <input
          className={styles.reviewName}
          onChange={(e) => enterName(e)}
          placeholder="Ваше имя"
          ref={name}
        />
      </div>
    </div>
  );
}
