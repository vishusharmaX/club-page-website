"use client";
import styles from "../page.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Popup from "./Popup";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [navbarHeight, setNavbarHeight] = useState("85px");

  useEffect(() => {
    const handleResize = () => {
      setNavbarHeight(window.innerWidth > 768 ? "82.5px" : null);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.cdnfonts.com/css/cascadia-code"
        rel="stylesheet"
      />

      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          fontFamily: "'Inter','sans-serif'",
          height: navbarHeight,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div class={`container ${styles.abscenter}`}>
          <div className="nav-divs">
            <div className={styles.navLogo}>
              <motion.img
                src="/CWC-logo.png"
                alt="Logo"
                width="80"
                height="80"
                className={`d-inline-block align-text-top ${styles.glogo}`}
              />
              <p style={{ marginBottom: "0" }}>CyberWarrior Club</p>
            </div>

            <div className="buttonchnge">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div
            className={`collapse navbar-collapse ${styles.navCollapse} ${styles.navigation}`}
            id="navbarSupportedContent"
          >
            <ul className={`mb-2 navbar-nav me-2 mb-lg-0`}>
              <li className="nav-item">
                <a
                  className="mx-4 nav-link active fs-4"
                  href="/"
                  style={{
                    fontFamily: "'Inter','sans-serif'",
                    color: "whitesmoke",
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="mx-4 nav-link active fs-4"
                  href="/people"
                  style={{
                    fontFamily: "'Inter','sans-serif'",
                    color: "whitesmoke",
                  }}
                >
                  People
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`mx-4 nav-link active fs-4 ${styles.navitem}`}
                  href="/events"
                  style={{
                    fontFamily: "'Inter','sans-serif'",
                    color: "whitesmoke",
                  }}
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="mx-4 nav-link active fs-4"
                  href="/contact"
                  style={{
                    fontFamily: "'Inter','sans-serif'",
                    color: "whitesmoke",
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showPopup && <Popup message={popupMessage} onClose={handleClosePopup} />}
      {alertMessage && <div className="alert alert-info">{alertMessage}</div>}
    </div>
  );
};

export default Navbar;
