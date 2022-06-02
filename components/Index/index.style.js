import styled from "styled-components";

export const Main = styled.main`
  padding-bottom: var(--footer-height);
`;

export const MainImageBox = styled.div`
  position: relative;
  height: clamp(10rem, 60vw, 30rem);
  filter: opacity(80%);

  img {
    object-fit: cover;
  }
`;

export const QuoteBox = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #730000;
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
`;

export const ButtonLink = styled.button`
  border: none;
  cursor: pointer;
  padding: 2rem clamp(2rem, 6vw, 10rem);
  font-size: clamp(1rem, 1vw, 20rem);

  :focus-visible {
    outline: 2px solid royalblue;
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