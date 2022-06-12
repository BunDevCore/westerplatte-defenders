import styled from "styled-components";

export const Footer = styled.footer`
  align-self: flex-end;
  width: 100%;
  height: var(--footer-height);
  background-color: darkgray;
  border-top: 2px solid gray;
  text-align: center;
  display: table;
  overflow: hidden;
  
  p {
    overflow: hidden;
    display: table-cell;
    vertical-align: middle;
  }
`;

export const C = styled.p`
  text-align: center;
`;

export const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;