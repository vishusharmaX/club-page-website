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
    fontFamily: "'Inter','sans-serif'",
    backgroundColor: "#2C2039",
    color: "#b7b7b7b7",
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
    marginBottom: "-1rem",
  };

  const socialStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    flexGrow: "1",
  };

  const madeWithLoveStyle = {
    fontFamily: "'Inter','sans-serif'",
    color: "#b7b7b7b7",
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
                  marginBottom: "1.75rem",
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
                  color: "#b7b7b7b7",
                  fontSize: "22px",
                  marginBottom: "24px",
                }}
              >
                Contact Us
                <hr></hr>
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <p>
                  <FaPhone
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      color: "#b7b7b7b7",
                    }}
                  />{" "}
                  +91 93408 49221
                </p>
                <p>
                  <FaEnvelope
                    style={{
                      marginRight: "8px",
                      fontSize: "18px",
                      color: "#b7b7b7b7",
                    }}
                  />{" "}
                  vitbhopalcyberwarriors@gmail.com
                </p>
              </div>
            </div>
            <Col>
              <div>
                <hr></hr>
              </div>
            </Col>
            <div style={socialStyle}>
              <h3
                style={{
                  color: "#b7b7b7b7",
                  fontSize: "22px",
                  marginBottom: "16px",
                }}
              >
                Social Media
                <hr></hr>
              </h3>
              <div
                style={{
                  marginBottom: "16px",
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "53.9px",
                }}
              >
                <a href="#">
                  <FaTwitter
                    style={{
                      marginRight: "36px",
                      fontSize: "36px",
                      color: "#b7b7b7b7",
                    }}
                    className={styles.fsocial}
                  />
                </a>
                <a href="https://www.instagram.com/vitb_cwc?igsh=MWF3czg0b2M4Y3V0Zw==">
                  <FaInstagram
                    style={{
                      marginRight: "32px",
                      fontSize: "36px",
                      color: "#b7b7b7b7",
                    }}
                    className={styles.fsocial}
                  />
                </a>
                <a href="https://www.linkedin.com/company/cyberwarriors-vitb/">
                  <FaLinkedin
                    style={{
                      marginRight: "0px",
                      fontSize: "32px",
                      color: "#b7b7b7b7",
                    }}
                    className={styles.fsocial}
                  />
                </a>
              </div>
              <div style={madeWithLoveStyle}>
                Made with{" "}
                <span
                  style={{
                    color: "red",
                    fontSize: "30px",
                    margin: "2px",
                    height: "20px",
                    transform: "translate(-26%,25%)",
                    display: "inline-block",
                    textAlign: "center",
                    animationName: "heartPump",
                    animationDuration: "1s",
                    animationIterationCount: "infinite",
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
