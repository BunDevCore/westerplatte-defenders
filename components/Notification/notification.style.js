import styled from "styled-components";

export const NotifBox = styled.div`
  position: fixed;
  bottom: 0;
  border-radius: 2rem;
  background-color: ${props => props.theme.navbar_background};
  border: 2px solid ${props => props.theme.main_color};
  padding: 1rem;
  left: 50%;
  display: ${props => props.gotInfo ? `none` : `flex`};
  transform: translate(-50%, ${props => props.gotInfo ? `0` : `-100%`});
  transition: 300ms;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const NotifP = styled.p`
`;

export const NotifButton = styled.button`
  border: 2px solid ${props => props.theme.main_color};
  color: ${props => props.theme.E404_button_text};
  background-color: ${props => props.theme.E404_button};
  border-radius: 1rem;
  cursor: pointer;
  padding: .5rem 1rem;
  margin: 0 1rem;
  transition-duration: .3s;
  float: right;

  :focus-visible {
    outline: 2px solid royalblue;
  }

  :is(:focus-visible, :hover) {
    color: #fff;
    background-color: ${props => props.theme.main_color};
  }
  
  @media (max-width: 800px) {
    padding: 1rem 1.5rem;
  }
`;