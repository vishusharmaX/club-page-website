import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    fontFamily: "Cascadia Code, monospace",
    display: "flex",
    padding: "20px 0",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#2C2039",
    color: "white",
    padding: "20px",
    minHeight: "210px",
    position: "relative",
    flexDirection: "row",
    gap: "10px",
    flexWrap: "wrap",
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
      <div style={contactStyle}>
        <h3 style={{ color: "white", fontSize: "25px", marginBottom: "36px" }}>
          Contact Us
        </h3>
        <div>
          <p>
            <FaPhone
              style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
            />{" "}
            +91 93408 49221
          </p>
          <p>
            <FaEnvelope
              style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
            />{" "}
            vitbhopalcyberwarriors@gmail.com
          </p>
        </div>
      </div>
      <div style={socialStyle}>
        <h3 style={{ color: "white", fontSize: "25px", marginBottom: "36px" }}>
          Social Media
        </h3>
        <div
          style={{
            marginBottom: "0",
            display: "flex",
            flexDirection: "row",
            columnGap: "6px",
          }}
        >
          <a href="https://twitter.com/CsyClub_IIITK?t=YyDngl3GXB750SadaoFM_g&s=08">
            <FaTwitter
              style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
            />
          </a>
          <a href="https://instagram.com/csyclub_iiitkottayam?igshid=YmMyMTA2M2Y=">
            <FaInstagram
              style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
            />
          </a>
          <a href="https://www.linkedin.com/company/csyclub-iiitkottayam/">
            <FaLinkedin
              style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
            />
          </a>
          <a href="https://discord.gg/qPq6mHZE">
            <FaDiscord
              style={{ marginRight: "5px", fontSize: "24px", color: "white" }}
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
    </footer>
  );
};

export default Footer;
