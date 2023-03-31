import React, { useEffect, useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { reliable } from "../../../../images/images";
import styles from "./Card.module.css";

const Card = ({ image, title, info, status, verified }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageTitleInfo}>
        <div className={styles.imageContainer}>
          <img src={image} alt="#" className={styles.image} />
        </div>
        <div className={styles.titleAndStatus}>
          <div className={styles.reliableAndTitle}>
            <img src={reliable} alt="#" className={styles.reliable} />
            <div className={styles.titleContainer}>
              <p className={styles.title}> {title} </p>
              {verified && <VscVerifiedFilled className={styles.verified} />}
            </div>
          </div>
          <div
            className={[
              styles.status,
              status.toLowerCase() === "rare"
                ? styles.rare
                : status.toLowerCase() === "common"
                ? styles.common
                : status.toLowerCase() === "uncommon"
                ? styles.uncommon
                : "",
            ].join(" ")}
          >
            <span className={styles.statusText}>{status}</span>
          </div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        {info.map((el, i) => (
          <div className={styles.infoWrapper} key={i}>
            <p className={styles.info}>{el.key}</p>

            <p className={styles.info}>{el.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
