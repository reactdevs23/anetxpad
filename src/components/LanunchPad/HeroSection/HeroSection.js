import React from "react";
import { nft } from "../../../images/images";
import TicketDetails from "./TicketDetails/TicketDetails";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.detailsContainer}>
      <div className="container">
        {" "}
        <div className={styles.details}>
          <img src={nft} alt="#" className={styles.image} />
          <TicketDetails />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
