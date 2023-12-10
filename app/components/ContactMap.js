import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Contact = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CWC Club | Contact</title>
        <link rel="icon" type="image/x-icon" href="CSC_Logo.ico" />
      </Head>

      <style jsx global>{`
        body {
          font-family: 'Cascadia Code', 'Courier New', 'monospace';
          background-image: url("background.png");
          background-size: cover;
          background-repeat: no-repeat;
        }

        .contact-container, .contact-details, .contact-details p, .contact-details h1 {
          color: white;
        }
      `}</style>

      <Navbar position="fixed" />

      <div className="contact-container">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <p>Email: vitbhopalcyberwarriors@gmail.com</p>
          <p>Phone: +91-0482-2202189</p>
          <p style={{maxWidth: "350px", margin: "0 auto"}}>Address: Vellore Institute of  Technology Bhopal,

         Bhopal-Indore Highway Kothrikalan, Sehore , India - 466114</p>
        </div>
        <div className="map">
          <iframe
            src="https://maps.google.com/maps?q=Vitbhopal&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-wrap: wrap;
          margin: 130px;
          flex-direction: column;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-details { 
          padding: 20px;
          text-align: center;
        }

        .map {
          flex: 1;
          height: 450px;
          margin-top: 20px;
          transform: translate(-15px, -15px);
        }

        @media (min-width: 768px) {
          .contact-container {
            padding-top: 130px; 
            flex-direction: row;
          }

          .contact-details {
            flex: 1 0 50%; 
            padding-right: 20px;
          }

          .map {
            flex: 1 0 50%; 
            margin-top: 0;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Contact;
