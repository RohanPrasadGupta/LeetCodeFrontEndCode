import styled from "styled-components";

const PageNotFoundHeading = styled.h1`
  display: flex;
  color: white;
  margin: auto;
`;

function PageNotFound() {
  return <PageNotFoundHeading>Page Not Found...</PageNotFoundHeading>;
}

export default PageNotFound;
