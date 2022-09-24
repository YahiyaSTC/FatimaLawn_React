import React from "react";
import { Container, Col, Row, Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import Bar from "./Bar";
import "../Assets/Css/web.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  return (
    <section className="contact py-5">
      <Container>
        <Row>
          <Col md={12}>
          <div className="bar_ head text-center">
              <h2>Contact US</h2>
              <Bar />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Form className="mt-5">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Your Subject" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" type="text"  placeholder="Your Message"/>
              </Form.Group>

              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col lg={6}>
           <div className="info mt-5 d-flex gap-4">
           <div className="icon">
            <i className="fa-solid fa-phone"></i>
           </div>
           <div className="text">
            <h5>Contact Number:</h5>
            <ListGroup as='ul'>
              <ListGroupItem as='li'><i class="fa-solid fa-minus"></i> <a href='tel:03463045416'> 03463045416 </a></ListGroupItem>
              <ListGroupItem as='li'><i class="fa-solid fa-minus"></i> <a href='tel:03132115244'> 03132115244 </a> </ListGroupItem>
            </ListGroup>
           </div>
           </div>

           <div className="info mt-5 d-flex gap-4">
           <div className="icon">
            <i className="fa-solid fa-envelope"></i>
           </div>
           <div className="text">
            <h5>Contact Email:</h5>
            <ListGroup as='ul'>
              <ListGroupItem as='li'><i class="fa-solid fa-minus"></i> <a href='mailto:fatimalawn@gmail.com'> fatimalawn@gmail.com </a></ListGroupItem>
              {/* <ListGroupItem as='li'><a href='tel:03132115244'> 03132115244 </a> </ListGroupItem> */}
            </ListGroup>
           </div>
           </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
