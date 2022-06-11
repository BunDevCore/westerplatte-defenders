import styled from "styled-components";

export const Main = styled.main`
  @media (max-width: 500px) {
    padding-bottom: calc(3 * var(--footer-height));
  }
`;

export const MainImageBox = styled.div`
  position: relative;
  height: clamp(10rem, 60vw, 30rem);

  img {
    object-fit: cover;
  }
`;

export const QuoteBox = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #780000;
  color: white;
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: bold;
  font-family: "Times New Roman", serif;
  display: grid;
  gap: 1rem;
  
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const QuoteName = styled.p`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: normal;
  justify-self: end;
  font-family: Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

export const ButtonLink = styled.button`
  border: 2px solid #780000;
  color: #780000;
  background-color: lightgray;
  border-radius: 1rem;
  cursor: pointer;
  padding: 2rem clamp(2rem, 6vw, 10rem);
  font-size: clamp(1rem, 1vw, 20rem);
  transition-duration: .3s;

  :focus-visible {
    outline: 2px solid royalblue;
  }
  
  :is(:focus-visible, :hover) {
    color: #fff;
    background-color: #780000;
  }
  
  @media (max-width: 550px) {
    font-size: 1rem;
    padding: 2rem 1rem;
  }
`;

export const ButtonsBox = styled.div`
  margin: 1rem;
  gap: 1rem; 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;