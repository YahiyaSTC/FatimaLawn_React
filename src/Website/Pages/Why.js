import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../Assets/Css/web.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Why() {
  return (
    <section className="why py-5 bg-dark">
      <Container>
        <Row>
          <Col md={12}>
            <div className="bar_ text-center">
              <h2 className="text-white">Why FATIMA LAWN.pk</h2>
              <p className="text-white pt-5">
                Unlike traditional rishta theory and matchmaking, we rely on a
                cooperative, interactive bond between our representatives and
                our clients. Initially, the user is requested some details and
                then assisted by an intelligent facilitator (referred to....
              </p>
              <Button type="button" className="btn btn-light px-4 mt-4">Read More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Why;
