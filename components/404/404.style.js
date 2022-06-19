import styled from "styled-components";

export const Main = styled.main`
  margin: calc(var(--navbar-height) + 1rem) 30rem 5rem;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 5rem;
  background-color: ${props => props.theme.E404_background};
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.main_color};
  border-radius: 2rem;

  @media (max-width: 1500px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }

  @media (max-width: 800px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 500px) {
    margin-left: .5rem;
    margin-right: .5rem;
    padding: 1rem 2rem;
  }
`;

export const ButtonRedirect = styled.button`
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.E404_button_text};
  background-color: ${props => props.theme.E404_button};
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
    background-color: ${props => props.theme.main_color};
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ErrorText = styled.p`
  color: ${props => props.theme.main_color};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

export const ErrorSubText = styled.p`
  color: ${props => props.theme.main_color};
  text-align: center;
`;