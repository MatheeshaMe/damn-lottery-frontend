import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../images/dollarcircle.svg";
// import logo from '../../';
import icon from "../../images/cardano.svg";

import Model from "../model/Model";
export default function Navbar({ account, connectToMetamask }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modelState = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.navbar__wrapper}>
      <div className={styles.navbar__left}>
        <h2 className="logo">LOTGamb</h2>
        <img src={logo} />
      </div>
      {/* <div><p className={styles.winner}>Last Winner 💸</p></div> */}
      <div className={styles.navbar__right}>
        <img src={icon} onClick={modelState} /> {/*  */}
        <p>{account && account}</p>
      </div>
      <div className={styles.modal__wrapper_nav}>
        {/* <img src={icon} /> onClick={modelState} */}
        {isModalOpen && <Model modelState={modelState} />}
      </div>
    </div>
  );
}
