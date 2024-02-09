import React from "react";
import Head from "next/head";
import styles from "../app/page.module.css";
import Script from "next/script";
import TextComponent from "../app/components/TextComponent";
import ImageComponent from "../app/components/ImageComponent";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";

const People = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CWC Club | People</title>
        <link rel="icon" type="image/x-icon" href="CSC_Logo.ico"></link>
      </Head>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />

      <link
        href="https://fonts.cdnfonts.com/css/cascadia-code"
        rel="stylesheet"
      ></link>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body {
          font-family: sans-serif;
          background: #5c249b;
          background: radial-gradient(circle, #5c249b 0%, #5c249b 10%, #5c249b 15%, #5c249b 21%, #5c249b 26%, #5c249b 32%, #5f27a3 39%, #5f27a3 45%, #632aaa 54%, #632aaa 58%, #6131a8 65%, #6931ba 71%, #6931ba 76%, #512d84 81%, #392551 87%, #2c2039 93%, #2c2039 100%); 
        }
      `,
        }}
      />
      <Navbar position="fixed" />
      <div className={styles.bg} style={{ fontFamily: "sans-serif" }}>
        <div
          className={styles.heading}
          style={{ marginTop: "-2rem", color: "#5c249b" }}
        >
          <div
            className={`${styles.radioGroup} d-flex flex-wrap justify-content-center `}
          ></div>
        </div>
        <br />
        <br />
        <br />
        <TextComponent title="Club Leadership" />
        <br />
        <ImageComponent
          imageSrc1="/images/vicepresident.jpg"
          name1="Hemal Shingloo"
          namex1="Vice President"
        />
        <br />

        <TextComponent title="Department Lead's" />
        <br />
        <div className="leads">
          {
            <ImageComponent
              imageSrc1="/images/designteamlead.jpg"
              name1="Utkarsh Singh"
              namex1="Design Lead"
              imageSrc2="/images/ehteamlead.jpg"
              name2="Pradyumn Singh Padiyar"
              namex2="Ethical Hacking Lead"
              imageSrc3="/images/financelead.jpg"
              name3="Vedang Maheshwari"
              namex3="Finance and sponsorship Lead"
            />
          }

          <br />
        </div>
        {/* <TextComponent title="Core Team(2021)" /> */}
        <br />
        <div className="leads">
          <ImageComponent
            imageSrc1="/images/medialead.jpg"
            name1="Bhavya Rastogi"
            namex1="Media and Marketing Lead"
            imageSrc2="/images/contentlead.jpg"
            name2="NAME"
            namex2="Content Lead"
            imageSrc3="/images/operationlead.jpg"
            name3="Ayan Panda, Operation Lead"
            namex3="Operation's Lead"
          />
          <br />
        </div>
        <ImageComponent
          imageSrc1="/images/webteam.jpg"
          name1="Aryan"
          namex1="Technical Lead"
          imageSrc2="/images/prlead.jpeg.jpg"
          name2="Ayushi,  PR lead"
          namex2="Design Lead"
          // imageSrc3="/images/richa.jpg"
          // name3="Richa"
        />
        <br />

        {/* <TextComponent title="Core Team(2022)" /> */}
        <br />
        {/* <ImageComponent
          imageSrc1="/images/gunj.jpg"
          name1="Gunj"
          imageSrc2="/images/sarthak1.jpg"
          name2="Sarthak"
          imageSrc3="/images/abel2.jpg"
          name3="Abel"
        /> */}
        <br />
        {/* <ImageComponent
          imageSrc1="images/vedanta3.jpg"
          name1="Vedanta"
          imageSrc2="/images/shravasthi.jpg"
          name2="Shravasti"
          imageSrc3="images/kaustubh1.jpg"
          name3="Kaustubh"
        /> */}
        <br />
        {/* <ImageComponent
          imageSrc1="/images/purandhar.jpg"
          name1="Purandhar"
          imageSrc2="/images/goutham.jpeg"
          name2="Goutham"
          imageSrc3="/images/gaurav1.jpg"
          name3="Gaurav"
        /> */}
        <br />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        />
      </div>
      <Footer />
    </div>
  );
};

export default People;
