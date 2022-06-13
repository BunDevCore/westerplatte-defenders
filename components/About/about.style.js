import styled from "styled-components";

export const Main = styled.main`
  margin: calc(var(--navbar-height) + 1rem) 30rem 5rem;
  flex-grow: 2;
  background-color: ${props => props.theme.E404_background};
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.main_color};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 1500px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }

  @media (max-width: 800px) {
    margin: calc(var(--navbar-height)) 2rem 0;
    border-radius: 0;
    border: 2px solid transparent;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const CarrdBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Carrd = styled.div`
  background-color: ${props => props.theme.E404_background};
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.main_color};
  border-radius: 2rem;
  width: 20rem;
  padding: 1rem;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Section = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const UserLink = styled.p`
  text-align: center;
  margin-top: .5rem;
  font-size: 1.15rem;
  color: #003bb4;
`;

export const FocusStyledA = styled.a`
  color: #003bb4;
  
  :is(:hover, :focus-visible) {
    text-decoration: underline;
  }
  
  :focus-visible {
    outline: 2px solid royalblue;
  }
`;

export const CarrdImage = styled.div`
  padding: 0 2.5rem;

  span {
    border-radius: 100%;
    border: 2px solid ${props => props.theme.main_color} !important;
  }
`;

export const AboutProject = styled.p`
  padding: 1rem;
`;

export const PLWarn = styled.p`
  padding-left: 1rem;
  color: #ff8000;
`;