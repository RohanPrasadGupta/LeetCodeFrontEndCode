import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-y: hidden;
  }
`;

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  align-items: center;
  padding: 10px;
  height: 100vh;
  gap: 10px;
  overflow: scroll;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <AppLayout>{children}</AppLayout>
    </>
  );
}
