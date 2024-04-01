import React, { useState } from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { Col, Container, Row, Form, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import contactUsImg from "./contactUsImg.png";
import WebButton from "../UI/Button/WebButton";
// import ReCAPTCHA from "react-google-recaptcha";

const ContactUsPage = () => {
  interface Field {
    name: string;
    email: string;
    phoneNumber: string;
    reason: string;
    productType: string;
    message: string;
  }

  interface Errors {
    [key: string]: string | null;
  }

  const [form, setForm] = React.useState<Field>({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    productType: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Errors>({});

  const setField = (field: keyof Field, value: Field[keyof Field]) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { name, email, phoneNumber, reason, productType, message } = form;
    const newErrors: Errors = {};

    if (!name) {
      newErrors.name = "Please enter your full name";
    }
    if (!email || !email.includes("@")) {
      newErrors.email = "Please enter your correct email address";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Please enter your phone number";
    }
    if (!reason) {
      newErrors.reason = "Please select an enquiry type";
    }
    if (!productType) {
      newErrors.productType = "Please select a product type";
    }
    if (!message) {
      newErrors.message = "Please leave your message";
    }

    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("form submit");
      console.log(form);
    }
  };

  const navigate = useNavigate();
  const handleHomeClick: () => void = () => {
    navigate("/");
  };

  // function onChange(value: any) {
  //   console.log("Captcha value:", value);
  // }

  return (
    <>
      <Header />
      <Container className="p-0">
        <Row>
          <Col>
            <Row className="bg-white">
              <Col className="py-4 list-unstyled d-flex justify-content-start">
                <li className="path-text" onClick={handleHomeClick}>
                  Home
                </li>
                <li className="li-before text-dark-green">Contact Us</li>
              </Col>
            </Row>
            <Row className="bg-white mt-5">
              <Col>
                <h2 className="text-dark-green">Get in touch with KFCK</h2>
                <p className="my-4 text-dark-green">
                  Thank you for getting in touch with KFCK.
                </p>

                <Form className="mt-5 fw-bold">
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control
                      type="username"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setField("name", e.target.value)}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => setField("email", e.target.value)}
                      isInvalid={!!errors.email}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="phoneNumber"
                      placeholder="0412345678 or 039901234"
                      value={form.phoneNumber}
                      onChange={(e) => setField("phoneNumber", e.target.value)}
                      isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="reason">
                    <Form.Label>Contact reason</Form.Label>
                    <Form.Select
                      value={form.reason}
                      isInvalid={!!errors.reason}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setField("reason", e.target.value);
                      }}
                    >
                      <option>Select Enquiry Type</option>
                      <option value="Product Support">Product Support</option>
                      <option value="Warranty Information">
                        Warranty Information
                      </option>
                      <option value="General Enquiry">General Enquiry</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.reason}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="productType">
                    <Form.Label>Product Type</Form.Label>
                    <Form.Select
                      value={form.productType}
                      isInvalid={!!errors.productType}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setField("productType", e.target.value);
                      }}
                    >
                      <option>Select Product Type</option>
                      <option value="Surface density meter">
                        Surface density meter
                      </option>
                      <option value="Mining instrumentation">
                        Mining instrumentation
                      </option>
                      <option value="Power Supply System">
                        Power Supply System
                      </option>
                      <option value="Intelligent Products">
                        Intelligent Products
                      </option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.productType}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                      value={form.message}
                      onChange={(e) => setField("message", e.target.value)}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* <Form.Group className="mb-3" controlId="verification">
                    <Form.Label>Verification</Form.Label>
                    <ReCAPTCHA
                      sitekey="Your client site key"
                      onChange={onChange}
                    />
                  </Form.Group> */}

                  {/* <Button
                    variant="outline-dark-green"
                    type="submit"
                    onClick={handleSubmit}
                    className="my-4"
                  >
                    Submit
                  </Button> */}
                  <WebButton btnStyle="dark" onClick={handleSubmit}>
                    Submit
                  </WebButton>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col>
            <Image src={contactUsImg} alt="contactUsImg" fluid />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsPage;
