import React from "react";
import styles from "./model.module.css";
import truncateEthAddress from "truncate-eth-address";

import gif from "../../images/giphy.gif";
import arrow from "../../images/arrowright1.svg";
export default function Model({ modelState, recentWinner }) {
  return (
    <div className={styles.modal__wrapper}>
      {/*onClick={modelState}  */}
      <h1>Last Round Winner</h1>
      <img src={gif} onClick={modelState} />
      <div>
        <p
          onClick={() =>
            window.open(
              `https://mumbai.polygonscan.com/address/${
                recentWinner
                  ? recentWinner
                  : "0x0000000000000000000000000000000000000000 "
              }`
            )
          }
        >
          {recentWinner ? truncateEthAddress(recentWinner) : "0x001"}
        </p>
        <img src={arrow} />
      </div>
      <p>To close click on the CUP</p>
    </div>
  );
}
