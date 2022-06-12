import styled from "styled-components";

export const ImageBox = styled.div`
  position: relative;
  margin: 2rem;
  height: 20rem;

  @media (max-width: 1000px) {
    height: 50vw;
  }

  img {
    object-fit: contain;
  }
`;

export const Box = styled.div`
  flex-grow: 2;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  padding-top: var(--navbar-height);

  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  margin: 2rem;
  padding-top: 2rem;
  border: 4px solid #780000;
  border-radius: 4rem;

  :nth-child(2n) {
    background-color: #ffe0e0;
  }

  :nth-child(2n+1) {
    background-color: #fff2f2;
  }

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const ContainerText = styled.div`
  margin: 1.5rem;
  text-align: center;
`;