import styled from "styled-components";

export const Main = styled.main`
  min-height: 100%;
  background-image: linear-gradient(to top, darkgray, white);
`;

export const ImageBox = styled.div`
  position: relative;
  margin: 2rem;
  height: 20rem;

  @media (max-width: 1200px) {
    height: 20vw;
  }

  @media (max-width: 980px) {
    height: 50vw;
  }

  img {
    object-fit: contain;
  }
`;

export const Box = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  padding-top: var(--navbar-height);
`;

export const Container = styled.div`
  margin: 2rem;
  padding-top: 2rem;
  border: 4px solid #980000;
  border-radius: 4rem;
  background-color: white;

  :nth-child(2n) {
  }

  :nth-child(2n+1) {
  }
`;

export const ContainerText = styled.div`
  margin: 1rem;
  text-align: center;
`;