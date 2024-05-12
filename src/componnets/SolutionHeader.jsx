import { useState } from "react";
import SolutionBody from "./SolutionBody";

function SolutionHeader({ solution }) {
  console.log(solution);
  const [show, setShow] = useState(false);
  const { data, body } = solution;

  function handleBtnShow(e) {
    e.preventDefault();
    setShow((s) => !s);
  }

  return (
    <>
      <h1 onClick={handleBtnShow}>{data}</h1>
      {show && <SolutionBody body={body} />}
    </>
  );
}

export default SolutionHeader;
