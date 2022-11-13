// React
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


// Website
import MainPage from './Website/Pages/MainPage'

// Admin
import Dashboard from './Admin/Pages/Dashboard/Dashboard'
import RegisteredPrograms from './Admin/Pages/RegisteredPrograms/RegisteredPrograms'
import NewRegistration from './Admin/Pages/NewRegistration/NewRegistration'
import SearchPrograms from './Admin/Pages/SearchPrograms/SearchPrograms'
import Calender from './Admin/Pages/Calender/Calender'


// Error
import Error from './Error/Error';


// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (

    <div className="view bg-light">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex">

            <Routes>
              {/* Website */}
              <Route path="/" element={<MainPage />} />


              {/* Admin */}
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/registeredPrograms" element={<RegisteredPrograms />} />
              <Route path="/newRegistration" element={<NewRegistration />} />
              <Route path="/searchPrograms" element={<SearchPrograms />} />
              <Route path="/calender" element={<Calender />} />

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
