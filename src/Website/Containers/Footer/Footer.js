import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Assets/Css/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top bg-dark py-3">
        <Container>
          <Row>
            <Col md={4}>
              <h2>Fatima Lawn</h2>
              <div className="info d-flex gap-2 mt-3">
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="text">
                  <h5>Address</h5>
                  <p>
                    Yarro Ghot Road, Sector 3 Surjani Town, New Karachi, Sindh,
                    Pakistan
                  </p>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28926.933805878594!2d67.05811365119798!3d25.004644192960527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341e65c628dd3%3A0x1d9b89060578239c!2sFatima%20Lawn!5e0!3m2!1sen!2s!4v1664013739584!5m2!1sen!2s"
                width="100%"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer_bottom py-2">
        <Container>
          <Row>
            <Col md={12} className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <p>
                © 2022 <Link to="/admin">Fatima Lawn</Link>. All Rights Reserved.
              </p>
              <p>
              Design by <a href="https://yahiya166.github.io/My-Portfolio/" target="_blank">Muhammad Yahiya</a>
              {/* Design and Develop by <a href="">Muhammad Yahiya</a> */}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
