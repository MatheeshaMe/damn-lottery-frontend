import React from "react";
import styles from "./navbar.module.css";
import logo from "../../images/dollarcircle.svg";
// import logo from '../../';
import icon from "../../images/cardano.svg";
export default function Navbar() {
  return (
    <div className={styles.navbar__wrapper}>
      <div className={styles.navbar__left}>
        <h2 className="logo">LOTGamb</h2>
        <img src={logo} />
      </div>
      <div className={styles.navbar__right}>
        <img src={icon} />
        <p>0xd78...d41</p>
      </div>
    </div>
  );
}
