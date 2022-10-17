import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../images/logo.png";
// import logo from '../../';
import icon from "../../images/cardano.svg";
import truncateEthAddress from "truncate-eth-address";

import Model from "../model/Model";
import { networkUrl } from "../../config";
import { Icon } from "react-icons-kit";

import { disc } from "react-icons-kit/feather/disc";
export default function Navbar({ account, connectToMetamask, recentWinner }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modelState = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.navbar__wrapper}>
      <div className={styles.navbar__left}>
        <h2 className="logo">B_L</h2>
        <img src={logo} />
      </div>
      {/* <div><p className={styles.winner}>Last Winner 💸</p></div> */}
      <div className={styles.navbar__right}>
        {account && (
          <div>
            <Icon
              icon={disc}
              onClick={modelState}
              className={styles.displayNone}
            />
          </div>
          // <img className={styles.displayNone} src={icon} />
        )}
        {/*  */}

        <p onClick={() => window.open(networkUrl + account ? account : "0x")}>
          {account && truncateEthAddress(account)}
        </p>
      </div>
      <div className={styles.modal__wrapper_nav}>
        {/* <img src={icon} /> onClick={modelState} */}
        {isModalOpen && (
          <Model modelState={modelState} recentWinner={recentWinner} />
        )}
      </div>
    </div>
  );
}
