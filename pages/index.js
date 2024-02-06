"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../app/components/navbar";
import CyberSecurityClub from "../app/components/homeContent";
import Footer from "../app/components/footer";
import Head from "next/head";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const Home_Page = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoStyles = {
    marginBottom: "1rem",
    width: "300px",
    maxWidth: "100%",
    transform: "rotate(45deg)",
    transition: "transform 0.3s ease-in-out",
    animation: "rotate 5s linear infinite",
    textShadow: "0 0 10px black",
    marginTop: windowWidth <= 768 ? "20rem" : "1rem",
  };
  useEffect(() => {
    const bootstrapScript = document.createElement("script");
    bootstrapScript.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.integrity =
      "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz";
    bootstrapScript.crossOrigin = "anonymous";
    document.body.appendChild(bootstrapScript);

    return () => {
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CWC Club | Home</title>
        <link rel="icon" type="image/x-icon" href="CSC_Logo.ico"></link>
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: 'Cascadia Code', 'Courier New', 'monospace';
                 
                background: '6D36C4';
                background: linear - gradient(to right bottom, #5c249b, # 5 f27a3, #632aaa, # 662 eb2, #6931ba, # 6531 b1, #6131a8, # 5 d319f, #512d84, # 45296 a, #392551, # 2 c2039);
            }
            /* Add other global CSS styles here */
            .navbar {
              transition: transform 0.3s ease-in-out; /* Add transition property */
            }
            .show-navbar {
              transform: translateY(0); /* Move navbar to visible position */
            }
          `,
        }}
      />
      <Navbar />
      {windowWidth > 768 ? (
        <div
          style={{
            display: "flex",
            fontFamily: "Cascadia Code, monospace",
            color: "white",
            textAlign: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              flex: 4.5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginLeft: "1%",
            }}
          >
            <div style={logoStyles}>
              <img
                src="/CWC-logo.png"
                alt="Logo"
                style={{
                  width: "120%",
                  height: "120%",
                  objectFit: "contain",
                  color: "black",
                }}
              />
            </div>
          </div>
          <div
            style={{
              flex: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "70px",
              marginRight: "7%",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              <Typewriter
                options={{
                  strings: ["Cyber Warriors Club!"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-wrapper",
                }}
              />
            </div>
            <div
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.5",
                maxWidth: "800px",
                marginBottom: "2rem",
                marginRight: "0.5rem",
              }}
            >
              Join the Cyber Warrior Club of VIT Bhopal as we explore new
              cutting edge technology.
            </div>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: "-38vh", marginBottom: "20vh" }}>
          <div
            style={{
              fontFamily: "Cascadia Code, monospace",
              color: "white",
              textAlign: "center",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={logoStyles}>
              <img
                src="/CWC-logo.png"
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  marginTop: "10rem",
                  marginBottom: "10rem",
                }}
              />
            </div>

            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              Cyber Warriors Club
            </div>
          </div>
        </div>
      )}
      <CyberSecurityClub />
      <Footer />
    </>
  );
};

export default Home_Page;
