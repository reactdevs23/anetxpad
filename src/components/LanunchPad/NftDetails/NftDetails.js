import React from "react";
import LikeComment from "./LikeComment/LikeComment";

import NftInformationTable from "./NftInformation/NftInformationTable";
import NftInformationText from "./NftInformation/NftInformationText";
import MyAllocation from "./MyAllocation/MyAllocation";
import styles from "./NftDetails.module.css";

const NftDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.nftDetails}>
          <div className={styles.infoContainer}>
            <LikeComment />
            <NftInformationTable />
          </div>
          <div className={styles.infoContainer}>
            <MyAllocation />
            <NftInformationText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
