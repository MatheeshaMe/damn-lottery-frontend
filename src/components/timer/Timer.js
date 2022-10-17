import React, { useEffect, useRef, useState } from "react";
import styles from "./timer.module.css";
export default function Timer({ activatedStatus }) {
  const [daysTimer, setDays] = useState("00");
  const [hoursTimer, setHours] = useState("00");
  const [minutesTimer, setMinutes] = useState("00");
  const [secondsTimer, setSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("May 30, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className={styles.timer__wrapper}>
      <p>
        {activatedStatus == 0 && "Closing "}
        {activatedStatus == 1 && "Opening "}
        {activatedStatus == 2 && "Processing "}

        {activatedStatus !== 2 ? "at" : ""}
      </p>
      <div className={styles.timer}>
        <div>
          <h1>{2}</h1>
          <p>Hr</p>
        </div>
        <hr />
        <div>
          <h1>{minutesTimer}</h1>
          <p>Min</p>
        </div>
        <hr />
        <div>
          <h1>{secondsTimer}</h1>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
}
