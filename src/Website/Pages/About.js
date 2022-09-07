import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../Assets/Css/web.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <section className='about py-5'>
            <Container>
                <Row >
                    <Col md={12}>
                        <div className="head text-center">
                        <h2>About</h2>
                        <div className='bar'></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About