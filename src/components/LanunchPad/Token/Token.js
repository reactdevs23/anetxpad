import React from "react";
import { antexpadToken } from "../../../images/images";
import styles from "./Token.module.css";

const Token = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.tokenContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              Earn up to $25 APY staking ANTEXPAD token
            </h2>
            <p className={styles.text}>
              ant is the utility token for providing innovative platform for
              fundraising on hepton layer 2 blockchain.{" "}
            </p>
            <div className={styles.buttonContainer}>
              <button
                className={[styles.button, styles.activeButton].join(" ")}
              >
                know More
              </button>
              <button className={styles.button}>start staking</button>
            </div>
          </div>
          <img src={antexpadToken} alt="#" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Token;
