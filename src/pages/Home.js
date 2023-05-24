import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{ x: -350, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Vipin <font>Achhwan </font>
      </motion.div>
      <motion.div
        className="desc"
        initial={{ x: 350, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <font>FUll Stack Developer</font> And <font>Youtube Vlogger</font>
        Based In Delhi.
      </motion.div>
    </div>
  );
};

export default Home;
