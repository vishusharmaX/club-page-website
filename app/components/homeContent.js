import React from "react";
import { Container, Row, Col } from "reactstrap";

const CyberSecurityClub = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          fontFamily: "sans-serif",
          color: "#b7b7b7b7",
          padding: "2rem",
          marginBottom: "96px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginTop: "5rem",
            marginBottom: "3rem",
            fontWeight: "700",
          }}
        >
          Who are we ?
        </h1>
        <div style={{ marginBottom: "1.05rem" }}>
          <p
            style={{
              fontSize: "1.7rem",
              lineHeight: "1.2",
              maxWidth: "75ch",
              letterSpacing: "0.1px",
              fontWeight: "400",
            }}
          >
            A cyber warrior is a well-trained, skilled professional in the
            information technology or information security industry who manages
            computer network operations. Their work on infrastructure and skills
            in problem-solving protect network vulnerabilities.
          </p>
        </div>

        <div
          style={{
            fontSize: "1.7rem",
            marginTop: "2rem",
            lineHeight: "1.2",
            letterSpacing: "0.1px",
            maxWidth: "75ch",
            fontWeight: "400",
          }}
        >
          Join VIT Bhopal's Cyber Warrior Club to explore cutting-edge
          technology and gain valuable cybersecurity knowledge and experience
          through training, workshops, and collaboration with fellow
          enthusiasts. All levels of expertise are welcome.
        </div>
      </div>
    </>
  );
};

export default CyberSecurityClub;
