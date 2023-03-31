import React, { useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { reliable } from "../../../../images/images";
import styles from "./Card.module.css";

const Card = ({ images, title, info, prices, status, verified }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [secondImage, setSecondImage] = useState(1);
  const [thirdImage, setThirdImage] = useState(2);

  return (
    <div className={styles.card}>
      <div className={styles.imageTitleInfo}>
        <div className={styles.imageContainer}>
          <img src={images[currentImage]} alt="#" className={styles.image} />
          <div className={styles.subImages}>
            <img
              src={images[secondImage]}
              alt="#"
              className={styles.subImage}
              onClick={() => {
                setSecondImage(currentImage);
                setCurrentImage(secondImage);
              }}
            />
            <img
              src={images[thirdImage]}
              alt="#"
              className={styles.subImage}
              onClick={() => {
                setThirdImage(currentImage);
                setCurrentImage(thirdImage);
              }}
            />
          </div>
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
              status.toLowerCase() === "upcoming"
                ? styles.upComing
                : status.toLowerCase() === "live"
                ? styles.live
                : "",
            ].join(" ")}
          >
            <span className={styles.statusText}>{status}</span>
          </div>
        </div>

        <p className={styles.info}>{info}</p>
      </div>

      <div className={styles.priceContainer}>
        {prices.map((el, i) => (
          <div className={styles.priceWrapper} key={i}>
            <p className={styles.price}>{el.key}</p>
            <div className={styles.iconAndValue}>
              {el.icon && <img src={el.icon} alt="#" className={styles.icon} />}
              <p className={styles.price}>{el.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
