import styled from "styled-components";

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
  
  :focus-visible {
    outline: 2px royalblue;
  }
  :hover {
    outline: 2px royalblue;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;