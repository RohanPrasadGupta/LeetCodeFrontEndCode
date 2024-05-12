import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const SocialMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

function SocialMedia() {
  return (
    <SocialMain>
      <span>Reach me on...</span>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link
          to="https://www.linkedin.com/in/rohanprasadgupta/"
          target="_blank"
          style={{ textDecoration: "none", color: "blue" }}
        >
          <FaLinkedin /> LinkedIn
        </Link>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link
          to="https://github.com/RohanPrasadGupta"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <FaGithub /> GitHub
        </Link>
      </motion.div>
    </SocialMain>
  );
}

export default SocialMedia;
