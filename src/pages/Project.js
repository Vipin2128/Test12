import React from "react";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Project = () => {
  const ProjectList = [
    {
      id: 1,
      name: " Marketing Site Design And Build",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Web Development And Designing",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Glide Utilities",
      imageUrl: project1,
    },
    {
      id: 4,
      name: "Norton High School Project",
      imageUrl: project2,
    },
    {
      id: 5,
      name: "Library Management",
      imageUrl: project1,
    },
    {
      id: 6,
      name: "UI Development For Ecommerce ",
      imageUrl: project2,
    },
  ];
  return (
    <motion.div
      className="projects"
      animate={{
        scale: [2, 1],
        rotate: [125, 0],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
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
    </motion.div>
  );
};

export default Project;
