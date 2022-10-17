import React from "react";
import styles from "./hero.module.css";
import icon from "../../images/arrowright1.svg";
import icon2 from "../../images/arrowright.svg";
export default function Hero({connectToMetamask}) {
  return (
    <div className={styles.hero__main__wrapper}>
      <h2>
        Lottery Is <span>Open</span>
      </h2>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__left}>
          <div className={styles.heroBox}>
            <p className={styles.boxname}>Last winner</p>
            <p className={styles.address}>0xd78...d41</p>
            <img src={icon} />
          </div>
        </div>
        <div className={styles.hero__middle}>
          {/* <h2>
          Lottery Is <span>Open</span>
        </h2> */}
          <div className={styles.button} onClick={connectToMetamask}>
            <h3>Play</h3> <img src={icon2} />
          </div>
          <p className={styles.p}>
            Participants : <span>300</span>
          </p>
          <p>
            Entrance Fee : <span>$50</span>
          </p>
        </div>

        <div className={styles.hero__right}>
          <div className={styles.heroBox}>
            <span>0xd78...d41</span>
            <p> is just entered</p>
            {/* <img src={icon} /> */}
          </div>
          <div className={styles.heroBox}>
            <span>0xd78...d41</span>
            <p> is just entered</p>
            {/* <img src={icon} /> */}
          </div>
          <div className={styles.heroBox}>
            <span>0xd78...d41</span>
            <p> is just entered</p>
            {/* <img src={icon} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
