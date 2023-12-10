import React from "react";
import Head from "next/head";
import Script from "next/script";
import {
    useState
} from "react";
import ContactMap from "../app/components/ContactMap";
const Contact = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleRadioChange = (event) => {
        setIsChecked(!isChecked);
    };

    return ( <
        div class = "custom-background"
        style = {
            {
                fontFamily: 'Cascadia Code, monospace'
            }
        } >
        <
        Head >
        <
        meta charset = "utf-8" / >
        <
        meta name = "viewport"
        content = "width=device-width, initial-scale=1.0" / >
        <
        title > CWC Club | Events < /title> <
        /Head> <
        link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel = "stylesheet" / >
        <
        link href = "https://fonts.cdnfonts.com/css/cascadia-code"
        rel = "stylesheet" / >
        <
        style dangerouslySetInnerHTML = {
            {
                __html: `
        body {
            font-family: 'Cascadia Code', 'Courier New', 'monospace';
            background: '6D36C4';
            background: linear - gradient(to right bottom, #5c249b, # 5f27a3, #632aaa, # 662eb2, #6931ba, # 6531b1, #6131a8, #5d319f, #512d84, #45296a, #392551, #2c2039);
        }`
            }
        }
        /> <
        ContactMap / >
        <
        Script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity = "sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin = "anonymous" /
        >
        <
        /div>
    );
};

export default Contact;