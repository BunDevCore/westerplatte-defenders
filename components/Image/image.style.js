import styled from "styled-components";

export const Main = styled.div`
  padding-top: var(--navbar-height);
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

export const ButtonBack = styled.a`
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.quiz_button_text};
  background-color: ${props => props.theme.quiz_button};
  border-radius: 1rem;
  cursor: pointer;
  margin: 1rem;
  padding: 1rem;
  width: 30%;
  font-size: clamp(1rem, 1vw, 20rem);
  transition-duration: .3s;
  align-self: center;
  text-align: center;

  @media (min-width: 600px) {
    :focus-visible {
      outline: 2px solid royalblue;
      outline-offset: -1px;
    }

    :is(:focus-visible, :hover) {
      color: #fff;
      background-color: ${props => props.theme.main_color};
    }
  }
`;

export const ImageLimiter = styled.div`
  position: relative;
  height: 70vh;
  width: 100%;
  
  img {
    object-fit: contain;
  }
`;