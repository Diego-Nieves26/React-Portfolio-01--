import React from "react";
import { useSelector } from "react-redux";
import "../styles/Message.css";
import { motion } from "framer-motion";

const Message = () => {
  const messaje = useSelector((state) => state.message);
  console.log(messaje);
  return (
    <>
      {messaje !== null && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          exit={{ x: 350 }}
          className="message"
        >
          <p>{messaje}</p>
        </motion.div>
      )}
    </>
  );
};

export default Message;
