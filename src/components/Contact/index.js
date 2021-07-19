import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./stylesheet.css";

function ContactForm() {
  //Hook that'll manage the form data--feature of this Hook is the ability to initialize the values of the state
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  //handleChange should fire whenever a keystroke is types in the name input
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  //form to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  console.log(formState);
  return (
    <div>
      <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Contact Me</h1>
          </div>
        </Container>
        <Container className="text-center">
          <form id="contact-form" onSubmit={handleSubmit}>
            {/* name input */}
            <Row>
              <Col>
                <div>
                  <label className="name" htmlFor="name">
                    Name:{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    onBlur={handleChange}
                  />
                </div>

                {/* email input  */}
                <div>
                  <label className="email" htmlFor="email">
                    Email:{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                  />
                </div>
              </Col>
              {/* message text area */}
              <div>
                <label className="message" htmlFor="message">
                  Message:{" "}
                </label>
                <textarea
                  name="message"
                  rows="5"
                  defaultValue={message}
                  onBlur={handleChange}
                />
                {/* the below is the same as if(errorMessage) */}
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
              </div>
            </Row>
            <a className="contact" href="mailto:alexreveles@yahoo.com">
            <button type="submit">Submit</button>
            </a>
          </form>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default ContactForm;
