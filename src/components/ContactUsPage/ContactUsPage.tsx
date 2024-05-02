import React, { useEffect } from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import contactUsImg from "../../assets/contactUsImg.png";
// import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const ContactUsPage = () => {
  interface Field {
    name: string;
    email: string;
    contactNumber: string;
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
    contactNumber: "",
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
    const { name, email, contactNumber, reason, productType, message } = form;
    const newErrors: Errors = {};

    if (!name) {
      newErrors.name = "Please enter your full name";
    }
    if (!email || !email.includes("@")) {
      newErrors.email = "Please enter your correct email address";
    }
    if (!contactNumber) {
      newErrors.contactNumber = "Please enter your phone number";
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

  useEffect(() => emailjs.init("pLwnzx0WGOSa1kGXv"), []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const serviceId = "service_gutq8it";
    const templateId = "template_o4sou4h";
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      try {
        await emailjs.send(serviceId, templateId, {
          name: form.name,
          email: form.email,
          contactNumber: form.contactNumber,
          reason: form.reason,
          productType: form.productType,
          message: form.message,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const navigate = useNavigate();
  const handleHomeClick: () => void = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={6}>
            <Row className="bg-white">
              <Col className="p-4 list-unstyled d-flex justify-content-start">
                <li className="path-text" onClick={handleHomeClick}>
                  Home
                </li>
                <li className="li-before text-dark-green">Contact Us</li>
              </Col>
            </Row>
            <Row className="bg-white mt-3 px-3">
              <Col>
                <h2 className="text-dark-green">Get in touch with KFCK</h2>
                <p className="my-4 text-dark-green">
                  Thank you for getting in touch with KFCK.
                </p>

                <Form
                  className="mt-5 fw-bold"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control
                      name="name"
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
                      name="email"
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

                  <Form.Group className="mb-3" controlId="contactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      name="contactNumber"
                      placeholder="0412345678 or 039901234"
                      value={form.contactNumber}
                      onChange={(e) =>
                        setField("contactNumber", e.target.value)
                      }
                      isInvalid={!!errors.contactNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.contactNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="reason">
                    <Form.Label>Contact reason</Form.Label>
                    <Form.Select
                      name="reason"
                      value={form.reason}
                      isInvalid={!!errors.reason}
                      onChange={(e) => {
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
                      name="productType"
                      value={form.productType}
                      isInvalid={!!errors.productType}
                      onChange={(e) => {
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
                      name="message"
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

                  <Button
                    variant="outline-dark-green"
                    type="submit"
                    className="my-4"
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <img
              src={contactUsImg}
              alt="contactUsImg"
              style={{ objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUsPage;
