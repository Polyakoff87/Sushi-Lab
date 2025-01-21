import React from "react";
import styles from "./Footer.module.css";
import VK_png from "../../pictures/vk.png";
import Telegram_png from "../../pictures/telegram.png";
import WhatsApp_png from "../../pictures/WhatsApp.png";

export default function Footer() {

  return (
    <div className={styles.footer}>
       <div className={styles.footer_item_1}>Sushi Lab</div>
        <div className={styles.footer_item_2}> © 2023 "Sushi Lab". Все права защищены.</div>
        <div className={styles.footer_item_3}><span>+ 7 3822 66 51 42</span></div>
        <div className={styles.footer_item_4}>
          <div className={styles.vk}><a href="/"><img src={VK_png} alt=""/></a></div>
          <div className={styles.tele}><a href="/"><img src={Telegram_png} alt=""/></a></div>
          <div className={styles.wa}><a href="/"><img src={WhatsApp_png} alt=""/></a></div>
        </div>
    </div>
  );
}
