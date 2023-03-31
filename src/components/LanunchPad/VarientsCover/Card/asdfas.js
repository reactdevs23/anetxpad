import React, { useState } from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

import { nft } from "../../../images/images";
import Card from "./Card/Card";

import styles from "./VarientsCover.module.css";
import "swiper/css";

const VarientsCover = () => {
  const [swiperRef, setSwiperRef] = useState();
  const bulletStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    marginRight: "5px",
  };
  const nfts = [
    {
      image: nft,
      title: "Super rarible",
      status: "rare",

      info: [
        { key: "left ", value: "500" },
        { key: "Odd ", value: " 1 in 1.7" },
      ],
    },
    {
      image: nft,
      title: "Super rarible",
      status: "Common",
      verified: true,

      info: [
        { key: "left ", value: "500" },
        { key: "Odd ", value: " 1 in 1.7" },
      ],
    },
    {
      image: nft,
      title: "Super rarible",
      status: "Uncommon",

      info: [
        { key: "left ", value: "500" },
        { key: "Odd ", value: " 1 in 1.7" },
      ],
    },
    {
      image: nft,
      title: "Super rarible",
      status: "Uncommon",

      info: [
        { key: "left ", value: "500" },
        { key: "Odd ", value: " 1 in 1.7" },
      ],
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={`${styles.mySlide} `}>
          {" "}
          <p className={styles.title}>Variants cover</p>
          <button
            className={[styles.swiperButtonPrev, styles.button].join(" ")}
            onClick={() => swiperRef?.slideNext()}
          >
            <HiOutlineArrowLeft />
          </button>
          <Swiper
            loop={true}
            onSwiper={setSwiperRef}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class=${className} style=${bulletStyle}></span>`,
            }}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },

              992: {
                slidesPerView: 2,
              },
              1281: {
                slidesPerView: 3,
              },
            }}
          >
            {nfts.map((el, i) => (
              <SwiperSlide key={i}>
                <Card {...el} />
              </SwiperSlide>
            ))}
          </Swiper>{" "}
          <button
            className={[styles.swiperButtonNext, styles.button].join(" ")}
            onClick={() => swiperRef?.slidePrev()}
          >
            <HiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VarientsCover;
