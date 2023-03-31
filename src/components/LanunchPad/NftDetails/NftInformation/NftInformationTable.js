import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { radar } from "../../../../images/images";
import styles from "./NftInformation.module.css";
const NftInformationTable = () => {
  const [showMore, setShowMore] = useState(false);
  const data = [
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Token Name",
      value: "ANTEX token",
    },
    {
      key: "Token Symbol",
      value: "ANT",
    },
    {
      key: "Token Symbol",
      value: "ANT",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
    {
      key: "Sale  Type",
      value: "Fair  Launch",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.radarContainer}>
          <img src={radar} alt="#" className={styles.radar} />
        </div>
        <h4 className={styles.heading}>NFT information's</h4>
      </div>

      <div
        className={[
          styles.keyAndValueContainer,
          showMore && styles.scrollBar,
        ].join(" ")}
      >
        {data.map((el, i) => (
          <div className={styles.keyAndValue} key={i}>
            <p className={styles.key}>{el.key}</p>
            <p className={styles.value}>{el.key}</p>
          </div>
        ))}
        {!showMore && (
          <div className={styles.overlay}>
            {" "}
            <button
              className={styles.button}
              onClick={() => setShowMore((prev) => !prev)}
            >
              show all
              <p className={styles.eyeContainer}>
                <AiOutlineEye className={styles.eye} />
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftInformationTable;
