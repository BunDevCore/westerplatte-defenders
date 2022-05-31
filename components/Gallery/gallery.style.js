import styled from "styled-components";

export const ImageBox = styled.div`
  position: relative;
  height: 30vw;

  @media (max-width: 700px) {
    height: 50vw;
  }

  img {
    object-fit: contain;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding-top: var(--navbar-height);
`;

export const Container = styled.div`
  padding-top: 2rem;
  border-bottom: 4px solid #980000;

  :nth-child(2n) {
    background-color: darkgrey;
  }

  :nth-child(2n+1) {
    background-color: white;
  }
`;

export const ContainerText = styled.div`
  margin: 1rem;
  text-align: center;
`;