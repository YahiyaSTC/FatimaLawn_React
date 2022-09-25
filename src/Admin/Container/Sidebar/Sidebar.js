import React from "react";
// import { Container, Row, Col } from 'react-bootstrap'
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";


import "../../Assets/Css/Sidebar/Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="headIcon mt-3">
        <h1>
           Fatima Lawn 
        </h1>
      </div>
      <div className="list w-100">
        <ListGroup as="ul">

          <ListGroupItem as="li">
            <Link to="/admin" className="">
              Dashboard
            </Link>
          </ListGroupItem>

          <ListGroupItem as="li">
            <Link to="/registeredPrograms"> Registered Programs </Link>
          </ListGroupItem>

          <ListGroupItem as="li">
            <Link to="/newRegistration"> New Registration </Link>
          </ListGroupItem>

          <ListGroupItem as="li">
            <Link to="/searchPrograms"> Search Programs </Link>
          </ListGroupItem>

          <ListGroupItem as="li">
            <Link to="/calender"> Calender </Link>
          </ListGroupItem>

          <ListGroupItem as="li">
            <Link to="/"> Log Out </Link>
          </ListGroupItem>

        </ListGroup>
      </div>
    </section>
  );
}

export default Sidebar;
