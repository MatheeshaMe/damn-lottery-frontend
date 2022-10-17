import React from "react";
import styles from "./hero.module.css";
import icon from "../../images/arrowright1.svg";
import icon2 from "../../images/arrowright.svg";
import truncateEthAddress from "truncate-eth-address";

export default function Hero({
  connectToMetamask,
  account,
  enterToLotteryGame,
  activatedStatus,
  entranceFee,
  participants,
  recentWinner,
}) {
  return (
    <div className={styles.hero__main__wrapper}>
      {/* {(activatedStatus == 0 && console.log("Open")) ||
        (activatedStatus == 1 && console.log("Closed")) ||
        (activatedStatus == 2 && console.log("Processing"))} */}
      <h2>
        BigLuck Is{" "}
        <span>
          {(activatedStatus == 0 && "Open") ||
            (activatedStatus == 1 && "Closed") ||
            (activatedStatus == 2 && "Processing")}
        </span>
      </h2>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__left}>
          <div className={styles.heroBox}>
            <p className={styles.boxname}>Last winner</p>
            <p
              className={styles.address}
              onClick={() =>
                window.open(
                  `https://mumbai.polygonscan.com/address/${
                    recentWinner ? recentWinner : "0x0"
                  }`
                )
              }
            >
              {recentWinner ? truncateEthAddress(recentWinner) : "0xxxx..000"}
            </p>
            <img src={icon} />
          </div>
        </div>
        <div className={styles.hero__middle}>
          {/* <h2>
          Lottery Is <span>Open</span>
        </h2> */}
          <div
            className={
              !account && activatedStatus == 1 && activatedStatus !== 2
                ? styles.button
                : styles.buttonDis
            }
            onClick={account ? enterToLotteryGame : connectToMetamask}
          >
            <h3>
              {account
                ? (activatedStatus == 0 && "Open") ||
                  (activatedStatus == 1 && "Closed") ||
                  (activatedStatus == 2 && "Processing")
                : "Connect"}
            </h3>{" "}
            <img src={icon2} />
          </div>
          <p className={styles.p}>
            Participants :{" "}
            <span>{participants ? participants.toString() : "loading..."}</span>
          </p>
          <p>
            Entrance Fee :{" "}
            <span>{entranceFee ? entranceFee.toString() : "loading..."}</span>
          </p>
        </div>

        <div className={styles.hero__right}>
          {/* <div className={styles.heroBox}>
            <span>0xd78...d41</span>
            <p> is just entered</p>
 
          </div>
          <div className={styles.heroBox}>
            <span>0xd78...d41</span>
            <p> is just entered</p>

          </div>
          <div className={styles.heroBox}>
            <span>0xd78...d41</span>
            <p> is just entered</p>

          </div> */}
        </div>
      </div>
    </div>
  );
}
