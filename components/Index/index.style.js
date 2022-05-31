import styled from "styled-components";

export const MainImageBox = styled.div`
  position: relative;
  height: 45rem;
  filter: opacity(80%);

  img {
    object-fit: cover;
  }
`;

export const BlueBox = styled.div`
  padding: 2rem;
  width: 100%;
  position: absolute;
  top: 32rem;
  background-color: #1c1c81;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Times New Roman", serif;
`;

export const QuoteName = styled.p`
  font-size: 2rem;
  float: right;
  font-weight: normal;
`;