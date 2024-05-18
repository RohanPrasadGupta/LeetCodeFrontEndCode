import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  width: 100%;
  position: relative;
`;

const FooterText = styled.h3`
  color: white;
  padding: 5px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>Happy Coding ❤</FooterText>
    </FooterWrapper>
  );
}

export default Footer;
