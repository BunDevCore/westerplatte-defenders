import styled from "styled-components";

export const Main = styled.main`
  margin: calc(var(--navbar-height) + 1rem) 30rem 5rem;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 5rem;
  background-color: #ddd;
  border: 2px solid #780000;
  color: #780000;
  border-radius: 2rem;
  
  @media (max-width: 1500px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }

  @media (max-width: 800px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 0;
    padding: 0 2rem;
    background-color: transparent;
    border: 2px solid transparent;
  }
`;

export const ButtonRedirect = styled.button`
  border: 2px solid #780000;
  color: #780000;
  background-color: #eee;
  border-radius: 1rem;
  cursor: pointer;
  padding: 2rem 0;
  margin: 0 auto;
  width: 50%;
  font-size: clamp(1rem, 1vw, 20rem);
  transition-duration: .3s;

  :focus-visible {
    outline: 2px solid royalblue;
  }

  :is(:focus-visible, :hover) {
    color: #fff;
    background-color: #780000;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
  
  @media (max-width: 1000px) {
    
  }
`;

export const ErrorText = styled.p`
  color: #780000;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const ErrorSubText = styled.p`
  color: #780000;
  text-align: center;
`;