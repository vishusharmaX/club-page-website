import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";

import styles from "../page.module.css";

const Footer = () => {
  const footerStyle = {
    fontFamily: "Cascadia Code, monospace",
    backgroundColor: "#2C2039",
    color: "white",
    minHeight: "210px",
    padding: "40px 0",
    position: "relative",
  };

  const contactStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    flexGrow: "1",
  };

  const socialStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    flexGrow: "1",
  };

  const madeWithLoveStyle = {
    fontFamily: "Cascadia Code, monospace",
    color: "white",
    textAlign: "center",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col className={styles.navlogoC1f}>
            <div className={styles.navLogof}>
              <motion.img
                src="/CWC-logo.png"
                alt="Logo"
                width="100px"
                height="100px"
                className={`d-inline-block align-text-top ${styles.glogof}`}
              />
              <div
                style={{
                  fontSize: "1.2rem",
                  marginTop: "0rem",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Cyber Warrior Club
              </div>
            </div>
          </Col>
          <Col className={styles.navlogoC2f}>
            <div style={contactStyle}>
              <h3
                style={{
                  color: "white",
                  fontSize: "22px",
                  marginBottom: "28px",
                }}
              >
                Contact Us
              </h3>
              <div>
                <p>
                  <FaPhone
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      color: "white",
                    }}
                  />{" "}
                  +91 93408 49221
                </p>
                <p>
                  <FaEnvelope
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      color: "white",
                    }}
                  />{" "}
                  vitbhopalcyberwarriors@gmail.com
                </p>
              </div>
              <hr />
            </div>
            <div style={socialStyle}>
              <h3
                style={{
                  color: "white",
                  fontSize: "22px",
                  marginBottom: "28px",
                }}
              >
                Social Media
              </h3>
              <div
                style={{
                  marginBottom: "2px",
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "32px",
                }}
              >
                <a href="#">
                  <FaTwitter
                    style={{
                      marginRight: "36px",
                      fontSize: "36px",
                      color: "white",
                    }}
                  />
                </a>
                <a href="https://www.instagram.com/vitb_cwc?igsh=MWF3czg0b2M4Y3V0Zw==">
                  <FaInstagram
                    style={{
                      marginRight: "32px",
                      fontSize: "36px",
                      color: "white",
                    }}
                  />
                </a>
                <a href="https://www.linkedin.com/company/cyberwarriors-vitb/">
                  <FaLinkedin
                    style={{
                      marginRight: "0px",
                      fontSize: "32px",
                      color: "white",
                    }}
                  />
                </a>
              </div>
              <div style={madeWithLoveStyle}>
                Made with{" "}
                <span
                  style={{
                    color: "red",
                    fontSize: "30px",
                    width: "20px",
                    height: "20px",
                    transform: "translate(0%,27%)",
                    display: "inline-block",
                    textAlign: "center",
                  }}
                >
                  &hearts;
                </span>{" "}
                by CyberWarrior Club
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className={`${styles.credit}`}>
            <div
              style={{
                fontSize: "1rem",
                marginTop: "1rem",
                marginBottom: "0rem",
                textAlign: "center",
                color: "#b7b7b7b7",
                opacity: ".065",
              }}
            >
              And a special Thanks to{" "}
              <a
                href="https://github.com/CSYClubIIITK/club-page"
                className={`${styles.credit}`}
              >
                "CsyClub_IIITK"
              </a>
              {""}.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
