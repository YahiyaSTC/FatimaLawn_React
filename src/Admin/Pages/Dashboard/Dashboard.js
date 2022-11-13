import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Sidebar from "../../Container/Sidebar/Sidebar";
import Header from "../../Container/Header/Header";
import "../../Assets/Css/admin.css";
import "../../Assets/Css/Dashboard/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="admin">
      <div className="dashboard admin_">
        <Container fluid>
          <Row>
            <Col md={2} className="pe-0">
              <Sidebar />
            </Col>
            <Col md={10} className=" scroll">
              <Header />
              <div className="body py-5 px-2  ">
                <Boxes />

                <div className="tablesection p-2">
                  <Container className="shadow  mt-5 bg-white">
                    <Row className="tablehead border-bottom">
                      <Col
                        md={12}
                        className="d-flex justify-content-between align-items-center py-2 px-3"
                      >
                        <h2 className="m-0">Registered Programs</h2>
                        <Link to="/registeredPrograms">View All</Link>
                      </Col>
                    </Row>
                    <Row className="tablebody mx-auto mt-3">
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th className="text-center ">#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <td className="text-center">2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">4</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">5</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">6</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">7</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">8</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">9</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">10</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">11</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">12</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <td className="text-center">13</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Row>
                  </Container>
                  <Container className="shadow  mt-5 bg-white">
                    <Row className="tablehead border-bottom">
                      <Col
                        md={12}
                        className="d-flex justify-content-between align-items-center py-2 px-3"
                      >
                        <h2 className="m-0">Admin Registered</h2>
                        <Link to="/admin">Create New Admin</Link>
                      </Col>
                    </Row>
                    <Row className="tablebody mx-auto mt-3">
                      <Table  bordered hover  responsive>
                        <thead>
                          <tr>
                            <th className="text-center">S.No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th className="text-center">Admin Type</th>
                            <th>Username</th>
                            <th>Email</th>
                            {/* <th>Password</th> */}
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td>Muhammad </td>
                            <td>Yahiya</td>
                            <td className="text-center">MAIN</td>
                            <td>Yahiya_166</td>
                            <td>muhammadyahiya166@gmail.com</td>
                            {/* <td>*********************</td> */}
                            <td>
                              <div className="d-flex w-100 justify-content-center align-items-center">
                                <Button title="Edit" disabled>
                                <i class="fa-solid fa-user-pen"></i>
                                </Button>
                                <Button title="Delete" disabled>
                                <i class="fa-solid fa-trash"></i>
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">2</td>
                            <td>Muhammad </td>
                            <td>Yahiya</td>
                            <td className="text-center">SUB</td>
                            <td>Yahiya_166</td>
                            <td>muhammadyahiya166@gmail.com</td>
                            {/* <td>*********************</td> */}
                            <td>
                              <div className="d-flex w-100 justify-content-center align-items-center">
                                <Button title="Edit" >
                                <i class="fa-solid fa-user-pen"></i>
                                </Button>
                                <Button title="Delete">
                                <i class="fa-solid fa-trash"></i>
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td>Muhammad </td>
                            <td>Yahiya</td>
                            <td className="text-center">SUB</td>
                            <td>Yahiya_166</td>
                            <td>muhammadyahiya166@gmail.com</td>
                            {/* <td>*********************</td> */}
                            <td>
                              <div className="d-flex w-100 justify-content-center align-items-center">
                                <Button title="Edit" >
                                <i class="fa-solid fa-user-pen"></i>
                                </Button>
                                <Button title="Delete">
                                <i class="fa-solid fa-trash"></i>
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">4</td>
                            <td>Muhammad </td>
                            <td>Yahiya</td>
                            <td className="text-center">SUB</td>
                            <td>Yahiya_166</td>
                            <td>muhammadyahiya166@gmail.com</td>
                            {/* <td>*********************</td> */}
                            <td>
                              <div className="d-flex w-100 justify-content-center align-items-center">
                                <Button title="Edit" >
                                <i class="fa-solid fa-user-pen"></i>
                                </Button>
                                <Button title="Delete">
                                <i class="fa-solid fa-trash"></i>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Row>
                  </Container>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

function Boxes() {
  return (
    <div className="boxes">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4}>
            <div className="box shadow">
              <p>
                Total Programs: <span> 786 </span>
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box shadow">
              <p>
                Total Partitions: <span> 2 </span>
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="box shadow">
              <Link to="/admin">
                <p>
                  Mentainance P/M: <span> 12000 </span> Rs
                </p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
