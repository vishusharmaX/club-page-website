import styles from "../page.module.css";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";

const MediaComponent = ({ imageSrc, title, description }) => {
  return (
    <Container
      style={{
        backgroundColor: "rgb(0 0 0 / 64%)",
        borderRadius: "23px",
        paddingTop: "34px",
        paddingBottom: "34px",
        paddingRight: "30px",
      }}
    >
      <Row>
        <Col
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={imageSrc}
            alt="Media"
            width={300}
            height={300}
            className={styles.eventclass}
          />
        </Col>
        <Col xs={12} md={6}>
          <div
            style={{ color: "white" }}
            className="d-flex flex-column justify-content-center h-100 whitetext"
          >
            <h2 style={{ color: "white" }} className="whitetext">
              {title}
            </h2>
            <p
              style={{ color: "white", textAlign: "justify" }}
              className="whitetext"
            >
              {description}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MediaComponent;
