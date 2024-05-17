import { useState } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { motion } from "framer-motion";

const QuestionMain = styled.div`
  cursor: pointer;
  border: 2px solid white;
  padding: 10px;
`;

const QuestionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: aliceblue;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const QuestionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

function Solution({ title, level, type, code }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <QuestionMain>
        <QuestionTitle onClick={() => setShowCode(!showCode)}>
          {title}
          <QuestionDetails>
            <span
              style={{
                color: type.toLowerCase() === "python" ? "#EEFC23" : "#b6c602",
              }}
            >
              {type}
            </span>
            <span
              style={{
                color:
                  level === "Medium"
                    ? "#EEFC23"
                    : level == "Easy"
                    ? "#41E300"
                    : "#E80505",
              }}
            >
              {level}
            </span>
          </QuestionDetails>
        </QuestionTitle>

        {showCode && (
          <SyntaxHighlighter language="javascript" style={docco}>
            {code}
          </SyntaxHighlighter>
        )}
      </QuestionMain>
    </motion.div>
  );
}

export default Solution;
