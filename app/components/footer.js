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
          <Col>
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
                  textAlign: "center",
                }}
              >
                Cyber Warrior Club
              </div>
            </div>
          </Col>
          <Col>
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
                  columnGap: "8px",
                }}
              >
                <a href="https://twitter.com/CsyClub_IIITK?t=YyDngl3GXB750SadaoFM_g&s=08">
                  <FaTwitter
                    style={{
                      marginRight: "8px",
                      fontSize: "36px",
                      color: "white",
                    }}
                  />
                </a>
                <a href="https://instagram.com/csyclub_iiitkottayam?igshid=YmMyMTA2M2Y=">
                  <FaInstagram
                    style={{
                      marginRight: "8px",
                      fontSize: "36px",
                      color: "white",
                    }}
                  />
                </a>
                <a href="https://www.linkedin.com/company/csyclub-iiitkottayam/">
                  <FaLinkedin
                    style={{
                      marginRight: "8px",
                      fontSize: "36px",
                      color: "white",
                    }}
                  />
                </a>
                <a href="https://discord.gg/qPq6mHZE">
                  <FaDiscord
                    style={{
                      marginRight: "8px",
                      fontSize: "36px",
                      color: "white",
                    }}
                  />
                </a>
              </div>
              <div style={madeWithLoveStyle}>
                Made with{" "}
                <span style={{ color: "red", fontSize: "27px", width: "20px" }}>
                  &hearts;
                </span>{" "}
                by CyberWarrior Club
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
