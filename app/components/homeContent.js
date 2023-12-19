import React from "react";

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
          fontFamily: "Cascadia Code, monospace",
          color: "white",
          padding: "2rem",
          marginBottom: "36px",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginTop: "2rem" }}>Who are we ?</h1>
        <div style={{ marginBottom: "36px" }}>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.2",
              maxWidth: "75ch",
              letterSpacing: "0.5",
              marginTop: "1.5rem",
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
            fontSize: "1.2rem",
            marginTop: "5rem",
            maxWidth: "75ch",
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
