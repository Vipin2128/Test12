import React from "react";
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (event) => {};
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
      className="contact"
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" controlId="validationCustom01">
                <FormLabel>Name</FormLabel>
                <FormControl required type="text" placeholder="Name" />
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom02">
                <FormLabel>Email</FormLabel>
                <FormControl required type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup className="mb-3" controlId="validationCustom03">
                <FormLabel>Name</FormLabel>
                <FormControl required as="textarea" placeholder="Message" />
              </FormGroup>
              <Button type="submit">Submit Form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              If you want to chat about a project — email me on
              vipinachwan@gmail.com.
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.
            </p>
            <p>
              Currently based in Delhi, India — available for remote-friendly
              work from May 2023.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroupItem>
                  <a href="www.instagram.com/vipin_achhwan">Youtube</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="www.instagram.com/vipin_achhwan">Instagram</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="www.instagram.com/vipin_achhwan">Facebook</a>
                </ListGroupItem>
                <ListGroupItem>
                  <a href="www.instagram.com/vipin_achhwan">Linkedin</a>
                </ListGroupItem>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
