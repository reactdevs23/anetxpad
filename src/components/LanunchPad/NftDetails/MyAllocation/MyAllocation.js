import React from "react";
import styles from "./MyAllocation.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

const MyAllocation = () => {
  return (
    <div className={styles.myAllocation}>
      <div>
        <h4 className={styles.title}> My Allocation :</h4>
        <ProgressBar progress={50} />
        <div className={styles.spaceBetween}>
          <p className={styles.text}>50 Left</p>{" "}
          <p className={styles.text}>100 Out Of</p>
        </div>
      </div>
      <div>
        <h4 className={styles.title}> My Allocation :</h4>
        <ProgressBar progress={50} />
        <div className={styles.spaceBetween}>
          <p className={styles.text}>50 Left</p>{" "}
          <p className={styles.text}>100 Out Of</p>
        </div>
      </div>
    </div>
  );
};

export default MyAllocation;
