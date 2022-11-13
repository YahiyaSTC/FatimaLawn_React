import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../Container/Sidebar/Sidebar";
import Header from "../../Container/Header/Header";
import "../../Assets/Css/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NewRegistration() {
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
              <div className="body p-5 bg-light">
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
export default NewRegistration;
