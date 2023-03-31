import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import Counter from "./Counter/Counter";
import { bnb, creator, collection } from "../../../../images/images";

import styles from "./styles.module.css";

const TicketDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [priceInBnb, setPriceInBnb] = useState(20);
  const [priceInUsd, setPriceInUsd] = useState(6845.21);
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.creatorAndCollection}>
        <div className={styles.creators}>
          <img src={creator} alt="#" className={styles.creatorImage} />
          <div>
            <p className={styles.position}>Creator</p>
            <p className={styles.name}>
              Super rarible
              <MdVerified className={styles.verified} />
            </p>
          </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.collection}>
          <img src={collection} alt="#" className={styles.collectionImage} />
          <div>
            <p className={styles.position}>Creator</p>
            <p className={styles.name}>Super rarible</p>
          </div>
        </div>
      </div>
      <h2 className={styles.title}>AntexPad NFTs Details Faces - #96134 </h2>
      <div className={styles.countDownContainer}>
        {" "}
        <div className={styles.header}>
          <p className={styles.text}>Sales ending in : </p>
          <div className={styles.infoButtons}>
            <p className={styles.publicRound}>
              <span className={styles.circle}></span>

              <span className={styles.publicRoundText}> Public Round</span>
            </p>
            <button className={styles.liveButton}>Live</button>
          </div>
        </div>
        <Counter time="Mar 15 2023 05:30:01" />
      </div>

      <div className={styles.buyContainer}>
        <div className={styles.buyWrapper}>
          <div className={styles.priceWrapper}>
            <div className={styles.bnbContainer}>
              <img src={bnb} alt="#" />{" "}
            </div>
            <div className={styles.price}>
              <p className={styles.bnb}>{priceInBnb * quantity} BNB/NFT</p>
              <p className={styles.usd}>
                (${(priceInUsd * quantity).toFixed(2)})
              </p>
            </div>
          </div>

          <div className={styles.quantityWrapper}>
            <div className={styles.iconContainer} onClick={decrease}>
              <BiMinus className={styles.icon} />
            </div>
            <div className={styles.quantity}>
              <input
                min="1"
                type="number"
                inputMode="numeric"
                className={styles.input}
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
              />
            </div>

            <div className={styles.iconContainer} onClick={increase}>
              <BiPlus className={styles.icon} />
            </div>
          </div>
        </div>
        <button className={styles.button}>reserve a spot</button>
        <button className={[styles.button, styles.activeButton].join(" ")}>
          Buy Ticket
        </button>
      </div>
    </div>
  );
};
export default TicketDetails;
