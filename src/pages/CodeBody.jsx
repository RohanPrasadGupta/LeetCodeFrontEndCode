import styled from "styled-components";
import Solution from "../componnets/Solution";

const SolutionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  width: 85vw;
`;

function CodeBody({ solutions }) {
  // console.log(solutions);

  return (
    <SolutionDiv>
      {solutions.map((solution, index) => (
        <Solution
          key={index}
          title={solution.Title}
          level={solution.Level}
          type={solution.Type}
          code={solution.Code}
        />
      ))}
    </SolutionDiv>
  );
}

export default CodeBody;
