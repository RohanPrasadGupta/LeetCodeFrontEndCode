import styled from "styled-components";

const CompStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const InputBox = styled.input`
  padding: 5px;
  text-align: center;
  border-radius: 50px;
  border: 3px;
  height: 30px;
  width: 80vw;
`;

function SearchBox({ setSearchQuestion }) {
  return (
    <>
      <CompStyle>
        <InputBox
          type="text"
          placeholder="Search problem"
          onChange={(e) => setSearchQuestion(e.target.value)}
        />
      </CompStyle>
    </>
  );
}

export default SearchBox;
