// React
import React from "react";
// import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


// Website
import MainPage from './Website/Pages/MainPage'


// Error
import Error from './Error/Error';


// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  // const [user, setLoginUser] = useState({})
  return (

    <div className="view ">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex">

            {/* <CompanyProfile1 /> */}

            {/* <Navigation /> */}



            <Routes>
              {/* Website */}
              <Route path="/" element={<MainPage />} />

              {/* Error */}
              <Route path="*" element={<Error />} />

            </Routes>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
