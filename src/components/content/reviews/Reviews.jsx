import React, { useState, useRef } from "react";
import styles from "./Reviews.module.css";
import PopupReview from "../../popups/PopupReview";
import { useDispatch, useSelector } from "react-redux";
import { dataReview, addReview } from "../../../features/reviewSlice";

export default function Reviews() {
  const select = useSelector(dataReview);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState({ display: "none" });
  const [authorName, setAuthorName] = useState("");
  const [textReview, setTextReview] = useState("");
  const [warning, setWarning] = useState("");

  let nextId = select.length;

  let name = useRef();
  let review = useRef();
  let output = useRef();

  function enterName(e) {
    setAuthorName(e.target.value);
  }

  function enterReview(e) {
    setTextReview(e.target.value);
  }

  function clear() {
    setAuthorName("");
    setTextReview("");
    setWarning("");
  }

  function add() {
    if (
      authorName.length < 3 ||
      textReview.length < 20 ||
      textReview.length > 300
    ) {
      setWarning(
        "Введите Ваше имя (не меньше 3 знаков) и оставьте отзыв (не меньше 15 и не больше 300 знаков)"
      );
    } else {
      dispatch(addReview({ id: nextId, text: textReview, name: authorName }));
      hide();
      name.current.value = "";
      review.current.value = "";
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
    review.current.value = "";
    output.current.value = "";
    clear();
  }

  return (
    <div className={styles.content}>
      {select.map((el) => {
        return (
          <div key={el.id} className={styles.item}>
            <div className={styles.head}>{el.name}</div>
            <div className={styles.text}>{el.text}</div>
          </div>
        );
      })}
      <div className={styles.item}>
        <div className={styles.add_wrap}>
          <button className={styles.add_new} onClick={show}>
            Добавить отзыв
          </button>
        </div>
      </div>
      <div style={isVisible}>
        <PopupReview
          hide={hide}
          enterName={enterName}
          enterReview={enterReview}
          add={add}
          warning={warning}
          name={name}
          review={review}
          output={output}
        />
      </div>
    </div>
  );
}
