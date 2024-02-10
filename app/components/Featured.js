import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import styles from "../page.module.css";

const Featured = () => {
  return (
    <featured>
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "white",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "'Inter','sans-serif'",
              marginBottom: "2.7rem",
            }}
          >
            Featured
          </h2>
        </Row>
        <Row
          style={{
            fontFamily: "'Inter','sans-serif'",
            textAlign: "center",
            color: "white",
          }}
        >
          <Col>
            <Image
              src="/images/VIT.png"
              width={200}
              height={200}
              alt="Logo's"
              className={styles.featuredi}
            />
          </Col>
          <Col>
            <Image
              src="/images/VIT.png"
              width={200}
              height={200}
              alt="Logo's"
              className={styles.featuredi}
            />
          </Col>
          <Col>
            <Image
              src="/images/VIT.png"
              width={200}
              height={200}
              alt="Logo's"
              className={styles.featuredi}
            />
          </Col>
          <Col>
            <Image
              src="/images/VIT.png"
              width={200}
              height={200}
              alt="Logo's"
              className={styles.featuredi}
            />{" "}
          </Col>
        </Row>
      </Container>
    </featured>
  );
};

export default Featured;
