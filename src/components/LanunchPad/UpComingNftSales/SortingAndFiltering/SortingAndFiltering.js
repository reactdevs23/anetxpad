import React, { useState } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import styles from "./SortingAndFiltering.module.css";

const SortingAndFiltering = () => {
  // for dropdown showing
  const [netWorkDropDown, setNetworkDropDown] = useState(false);
  const [filterDropDown, setFilterDropDown] = useState(false);
  const [sortingDropDown, setSortingDropDown] = useState(false);

  //   current

  const [currentNetwork, setCurrentNetwork] = useState(0);
  const [currentfilter, setCurrentFilter] = useState(0);
  const [currntSorting, setCurrentSorting] = useState(0);

  const networkList = [
    "BSC, ETH, Telos, Polygon, DOGE",
    "lorem ipsum1",
    "lorem ipsum2",
  ];
  const filterList = ["All Status", "lorem ipsum", "lorem ipsum2"];
  const sortingList = ["Acceding", "decending", "price range"];

  //   function for drodown showing
  const showNetworkDropDown = () => {
    setFilterDropDown(false);
    setSortingDropDown(false);
    setNetworkDropDown((prev) => !prev);
  };
  const showFilterDropDown = () => {
    setNetworkDropDown(false);
    setSortingDropDown(false);
    setFilterDropDown((prev) => !prev);
  };
  const showSortingDropdown = () => {
    setFilterDropDown(false);
    setNetworkDropDown(false);
    setSortingDropDown((prev) => !prev);
  };
  return (
    <div className={styles.buttonContainer}>
      <div className={[styles.button, styles.networkButtton].join(" ")}>
        <span className={styles.label}>Networks</span>
        <p className={styles.buttonText}> {networkList[currentNetwork]}</p>
        <FiArrowDownCircle
          className={styles.arrow}
          onClick={showNetworkDropDown}
        />
        {netWorkDropDown && (
          <div className={styles.dropDownItems}>
            {networkList.map((el, i) => (
              <p
                className={styles.dropDownItem}
                key={i}
                onClick={() => {
                  setCurrentNetwork(i);
                  setNetworkDropDown(false);
                }}
              >
                {el}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className={styles.button}>
        <span className={styles.label}>Filter By</span>
        <p className={styles.buttonText}>{filterList[currentfilter]}</p>
        <FiArrowDownCircle
          className={styles.arrow}
          onClick={showFilterDropDown}
        />
        {filterDropDown && (
          <div className={styles.dropDownItems}>
            {filterList.map((el, i) => (
              <p
                className={styles.dropDownItem}
                key={i}
                onClick={() => {
                  setCurrentFilter(i);
                  setFilterDropDown(false);
                }}
              >
                {el}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className={styles.button}>
        <span className={styles.label}>Sort By</span>
        <p className={styles.buttonText}>{sortingList[currntSorting]}</p>
        <FiArrowDownCircle
          className={styles.arrow}
          onClick={showSortingDropdown}
        />
        {sortingDropDown && (
          <div className={styles.dropDownItems}>
            {sortingList.map((el, i) => (
              <p
                className={styles.dropDownItem}
                key={i}
                onClick={() => {
                  setCurrentSorting(i);
                  setSortingDropDown(false);
                }}
              >
                {el}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortingAndFiltering;
