import React from "react";
import "./stylesheet.css";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  return (
    <div>
      <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Skills & Certificates</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} className="justify-content-center">
            <Card>
              <Card.Body>
                <Card.Header className="text-center">
                  <h3>Frontend</h3>
                </Card.Header>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>Handlebars</li>
                  <li>Responsive Design</li>
                  <li>React</li>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="justify-content-center">
            <Card>
              <Card.Body>
                <Card.Header className="text-center">
                  <h3>Backend</h3>
                </Card.Header>
                <ul>
                  <li>APIs</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>REST</li>
                  <li>GraphQL</li>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="justify-content-center">
            <Card>
              <Card.Body>
                <Card.Header className="text-center">
                  <h3>Certificates</h3>
                </Card.Header>
                <ul>
                  <li>
                    Ventura County Probation Agency - Student Worker, October
                    2014 - January 2016.
                  </li>

                  <li>
                    Bank of America - Head Teller, September 2017 - September
                    2019.
                  </li>
                  <li>
                    Channel Islands University - B.A. in Sociology, May 18th,
                    2019.
                  </li>

                  <li>
                    Staga Composites - Social Media Manager, November 2020 -
                    Current.
                  </li>
                  <li>
                    UCLA Full Stack Developer - Certificate of Completion, June
                    6th, 2021.
                  </li>
                  <li>
                    Link to resume -  <a className="resume" href="https://docs.google.com/document/d/1qWca6RKLGyPVpABcdoRHnd3cyZRyvpUPRiam3PqESxI/edit?usp=sharing" target="_blank"> "Resume" </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
