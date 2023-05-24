import React from "react";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
const Services = () => {
  const ServiceList = [
    {
      id: 1,
      name: "Consulting",
      imageUrl: project3,
    },
    {
      id: 2,
      name: "Web Application Development",
      imageUrl: project4,
    },
    {
      id: 3,
      name: "Web Designing",
      imageUrl: project3,
    },
  ];
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {ServiceList.map((item) => {
            return (
              <motion.div
                key={item.id}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
