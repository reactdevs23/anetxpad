import React from "react";
import HeroSection from "../components/LanunchPad/HeroSection/HeroSection";

import NftDetails from "../components/LanunchPad/NftDetails/NftDetails";
import VarientsCover from "../components/LanunchPad/VarientsCover/VarientsCover";
import UpCommingNftSales from "../components/LanunchPad/UpComingNftSales/UpComingNftSales";
import Token from "../components/LanunchPad/Token/Token";
const Home = () => {
  return (
    <>
      <HeroSection />
      <NftDetails />
      <VarientsCover />
      <UpCommingNftSales />
      <Token />
    </>
  );
};

export default Home;
