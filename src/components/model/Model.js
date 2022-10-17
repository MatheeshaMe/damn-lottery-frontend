import React from "react";
import styles from "./model.module.css";

import gif from "../../images/giphy.gif";
import arrow from "../../images/arrowright1.svg";
export default function Model({ modelState }) {
  return (
    <div className={styles.modal__wrapper} onClick={modelState}>
      {/*onClick={modelState}  */}
      <h1>Winner</h1>
      <img src={gif} />
      <div>
        <p>0x001...0xx</p>
        <img src={arrow} />
      </div>
    </div>
  );
}
