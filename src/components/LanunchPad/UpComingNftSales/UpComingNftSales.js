import React from "react";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

import {
  fifthNft,
  secondNft,
  thirdNft,
  fourthNft,
  firstNft,
  sixthNft,
  seventhNft,
  eighthNft,
  ninthNft,
  tether,
  trontron,
} from "../../../images/images";
import Card from "./Card/Card";

import styles from "./UpComingNftSales.module.css";
import "swiper/css";
import SortingAndFiltering from "./SortingAndFiltering/SortingAndFiltering";

const UpComingNftSales = () => {
  const nfts = [
    {
      images: [firstNft, secondNft, thirdNft],
      title: "Super rarible",
      status: "Upcoming",
      info: "Antex  Provides an  innovative  platform  for  Hepton L2 blockchain website and software. ",
      prices: [
        {
          key: "Floor Price",
          value: "20,000 USDT",
          icon: tether,
        },
        { key: "Floor Price", value: "40,000 USDT" },
        { key: "Floor Price", value: "60%" },
      ],
    },
    {
      images: [fourthNft, fifthNft, sixthNft],
      title: "Super rarible",
      status: "live",
      verified: true,
      info: "Antex  Provides an  innovative  platform  for  Hepton L2 blockchain website and software. ",
      prices: [
        {
          key: "Floor Price",
          value: "20,000 USDT",
          icon: trontron,
        },
        { key: "Floor Price", value: "40,000 USDT" },
        { key: "Floor Price", value: "60%" },
      ],
    },
    {
      images: [seventhNft, eighthNft, ninthNft],
      title: "Super rarible",
      status: "Upcoming",
      info: "Antex  Provides an  innovative  platform  for  Hepton L2 blockchain website and software. ",
      prices: [
        {
          key: "Floor Price",
          value: "20,000 USDT",
          icon: tether,
        },
        { key: "Floor Price", value: "40,000 USDT" },
        { key: "Floor Price", value: "60%" },
      ],
    },
    {
      images: [fourthNft, fifthNft, sixthNft],
      title: "Super rarible",
      status: "live",
      verified: true,
      info: "Antex  Provides an  innovative  platform  for  Hepton L2 blockchain website and software. ",
      prices: [
        {
          key: "Floor Price",
          value: "20,000 USDT",
          icon: trontron,
        },
        { key: "Floor Price", value: "40,000 USDT" },
        { key: "Floor Price", value: "60%" },
      ],
    },
    {
      images: [seventhNft, eighthNft, ninthNft],
      title: "Super rarible",
      status: "Upcoming",
      info: "Antex  Provides an  innovative  platform  for  Hepton L2 blockchain website and software. ",
      prices: [
        {
          key: "Floor Price",
          value: "20,000 USDT",
          icon: tether,
        },
        { key: "Floor Price", value: "40,000 USDT" },
        { key: "Floor Price", value: "60%" },
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
        <div className={`${styles.mySlide} `}>
          <div className={styles.titlesAndButtons}>
            <p className={styles.title}>Upcoming NFT Sales</p>
            <SortingAndFiltering />
          </div>
          <Slider {...settings}>
            {nfts.map((el, i) => (
              <div className={styles.cardContainer} key={i}>
                <Card {...el} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.buttonContainer}>
          <button className={[styles.button, styles.activeButton].join(" ")}>
            See More
          </button>
          <button className={styles.button}>Create Token</button>
        </div>
      </div>
    </div>
  );
};

export default UpComingNftSales;

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className={`${styles.sliderButton} ${styles.sliderButtonPrev} `}
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
      className={`${styles.sliderButton} ${styles.sliderButtonNext} `}
      onClick={onClick}
    >
      <HiOutlineArrowRight />
    </button>
  );
};
