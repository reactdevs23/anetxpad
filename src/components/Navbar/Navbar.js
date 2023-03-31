import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

import { NavLink } from "react-router-dom";
import { logo, sun, wallet } from "../../images/images";

import styles from "./styles.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { navItem: "Home", to: "/" },
    { navItem: "Staking", to: "/staking" },
    { navItem: "Create IDO", to: "/createIdo" },
    { navItem: "Create Token", to: "/createToken" },
    { navItem: "Docs", to: "/docs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${styles.navbar} ${isScrolled && styles.navBg}`}>
      <div className="container">
        <div className={styles.navs}>
          <img src={logo} alt="#" className={styles.logo} />
          <div
            className={`${styles.navItemsAndButtons} ${
              sidebar && styles.sidebar
            }`}
          >
            <div className={`${styles.navItems} `}>
              {navItems.map((el, i) => (
                <NavLink
                  onClick={() => setSidebar((prev) => !prev)}
                  to={el.to}
                  key={i}
                  className={({ isActive }) =>
                    isActive ? styles.navItemActive : styles.navItem
                  }
                >
                  {el.navItem}
                </NavLink>
              ))}
              {sidebar && (
                <MdOutlineClose
                  className={styles.close}
                  onClick={() => setSidebar((prev) => !prev)}
                />
              )}
            </div>
            <div className={styles.buttonContainer}>
              {/* <Link to="/" className={styles.iconContainer}>
                <img src={profile} alt="#" className={styles.icon} />
              </Link>{" "} */}
              <Link to="/" className={styles.iconContainer}>
                <img src={sun} alt="#" className={styles.icon} />
              </Link>{" "}
              <button className={styles.button}>
                <p className={styles.walletContainer}>
                  <img src={wallet} alt="#" className={styles.wallet} />
                </p>
                Connect Wallet
              </button>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
      <RxHamburgerMenu
        className={styles.hamburger}
        onClick={() => setSidebar((prev) => !prev)}
      />
    </section>
  );
};

export default Navbar;
