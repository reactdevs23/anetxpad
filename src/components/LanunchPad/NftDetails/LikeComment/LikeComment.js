import React from "react";

import {
  bookMark,
  chorome,
  comment,
  facebook,
  like,
  slack,
  youtube,
} from "../../../../images/images";

import styles from "./LikeComment.module.css";

const LikeComment = () => {
  const socialItems = [
    {
      icon: slack,
      to: "#",
    },
    {
      icon: youtube,
      to: "#",
    },
    {
      icon: chorome,
      to: "#",
    },
    {
      icon: facebook,
      to: "#",
    },
  ];
  const formattedNumber = (number) => {
    return (
      (number / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 }) +
      "K"
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.likeCommentContainer}>
        <div className={styles.likeCommentShareBox}>
          <img src={like} alt="#" className={styles.img} />
          <span className={styles.number}>{formattedNumber(86000)}</span>
        </div>
        <div className={styles.likeCommentShareBox}>
          <img src={comment} alt="#" className={styles.img} />
          <span className={styles.number}> {formattedNumber(98100)}</span>
        </div>
        <div className={styles.likeCommentShareBox}>
          <img src={bookMark} alt="#" className={styles.icon} />
          <span className={styles.number}> {formattedNumber(11600)}</span>
        </div>
      </div>
      <div className={styles.socialContainer}>
        {socialItems.map((el, i) => (
          <a
            href={el.to}
            target="_blank"
            rel="noreferrer"
            key={i}
            className={styles.socialItem}
          >
            <img src={el.icon} alt="#" className={styles.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LikeComment;
