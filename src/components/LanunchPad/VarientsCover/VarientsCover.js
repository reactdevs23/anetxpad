import React from "react";
import Slider from "react-slick";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

import { nft } from "../../../images/images";
import Card from "./Card/Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import styles from "./VarientsCover.module.css";

const VarientsCover = () => {
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
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.wrapper}>
      <div className="container">
        {" "}
        <div className={`${styles.mySlide} `}>
          {" "}
          <p className={styles.title}>Variants cover</p>
          <Slider {...settings}>
            {nfts.map((el, i) => (
              <div className={styles.cardContainer} key={i}>
                <Card {...el} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VarientsCover;

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles.button} ${styles.swiperButtonPrev} `}
      onClick={onClick}
    >
      <HiOutlineArrowLeft />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles.button} ${styles.swiperButtonNext} `}
      onClick={onClick}
    >
      <HiOutlineArrowRight />
    </button>
  );
};
