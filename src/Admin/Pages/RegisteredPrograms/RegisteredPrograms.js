import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Container/Sidebar/Sidebar";
import Header from "../../Container/Header/Header";
import "../../Assets/Css/admin.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <main className="admin">
      <Container fluid className="dashboard admin_">
        <Row>
          <Col md={2} className="pe-0">
            <Sidebar />
          </Col>
          <Col md={10} className="ps-0">
            <Header />
            <div className="body">Registered Programs</div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Dashboard;
