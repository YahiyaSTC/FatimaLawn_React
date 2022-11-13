import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Container/Sidebar/Sidebar";
import Header from "../../Container/Header/Header";
import "../../Assets/Css/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Calender() {
  return (
    <main className="admin">
      <div className="dashboard admin_">
        <Container fluid>
          <Row>
            <Col md={2} className="pe-0">
              <Sidebar />
            </Col>
            <Col md={10} className="ps-0 scroll">
              <Header />  
              <div className="body p-5 bg-light">Calender</div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default Calender;
