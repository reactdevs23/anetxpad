import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { radar } from "../../../../images/images";
import styles from "./NftInformation.module.css";

const NftInformationText = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.radarContainer}>
          <img src={radar} alt="#" className={styles.radar} />
        </div>
        <h4 className={styles.heading}>NFT information's</h4>
      </div>

      <div
        className={[styles.textContainer, showMore && styles.scrollBar].join(
          " "
        )}
      >
        <p className={styles.text}>
          <span className={styles.highlight}>AntexPadNFTs</span>
          is the first legal Metaverse and decentralized legal solutions
          platform that offer A to Z of web 3.0 needed legal services to every
          user who wishes a safe journey in Blockchain and Metaverse. vision is
          to increase access to justice in web 3.0 by building the first
          Metaverse with legal use cases for web 3.0 usersto increase access to
          justice in web 3.0 by building the first Metaverse with legal use
          cases for web 3.0 users , as people have lost hope and confidence in
          justice
        </p>
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

export default NftInformationText;
