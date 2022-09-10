import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import Bar from "./Bar";
import TeamLogo from '../Assets/WebImages/teamLogo.jpg' 
import "../Assets/Css/web.css";
import "bootstrap/dist/css/bootstrap.min.css";

function OurTeam() {
  return (
    <section className="team py-5">
      <Container>
        <Row>
          <Col md={12}>
          <div className="bar_ head text-center">
              <h2>Our Team</h2>
              <Bar />
            </div>
          </Col>
        </Row>
        <Row className="body mt-5 ">
          <Col md={4}>
            <Card className='mt-3'>
              <Card.Img className="w-50 m-auto pt-4" variant="top" src={TeamLogo}  />
              <Card.Body>
                <Card.Title className="fs-2 text-uppercase">Muhammad Sabir</Card.Title>
                <Card.Title className="fs-5 text-capitalize">CEO</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mt-3'>
              <Card.Img className="w-50 m-auto pt-4" variant="top" src={TeamLogo}  />
              <Card.Body>
                <Card.Title className="fs-2 text-uppercase">Muhammad Asif</Card.Title>
                <Card.Title className="fs-5 text-capitalize">Manager</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mt-3'>
              <Card.Img className="w-50 m-auto pt-4" variant="top" src={TeamLogo}  />
              <Card.Body>
                <Card.Title className="fs-2 text-uppercase">Annas</Card.Title>
                <Card.Title className="fs-5 text-capitalize">Head waiter</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mt-3'>
              <Card.Img className="w-50 m-auto pt-4" variant="top" src={TeamLogo}  />
              <Card.Body>
                <Card.Title className="fs-2 text-uppercase">Anonymous</Card.Title>
                <Card.Title className="fs-5 text-capitalize">Electrition</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mt-3'>
              <Card.Img className="w-50 m-auto pt-4" variant="top" src={TeamLogo}  />
              <Card.Body>
                <Card.Title className="fs-2 text-uppercase">Anonymous</Card.Title>
                <Card.Title className="fs-5 text-capitalize">Swipper/ guard/ care Taker</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mt-3'>
              <Card.Img className="w-50 m-auto pt-4" variant="top" src={TeamLogo}  />
              <Card.Body>
                <Card.Title className="fs-2 text-uppercase">Anonymous</Card.Title>
                <Card.Title className="fs-5 text-capitalize">Head decorator/ band director</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}

export default OurTeam;
