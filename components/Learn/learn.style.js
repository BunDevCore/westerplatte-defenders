import styled from "styled-components";

export const Main = styled.div`
  flex-grow: 2;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  padding: calc(var(--navbar-height) + 1rem) 1rem 1rem;
  grid-template: "list content sections";

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    grid-template: "list" "sections" "content";
  }

  @media (max-width: 500px) {
    padding-right: .5rem;
    padding-left: .5rem;
  }
`;

export const LeftBox = styled.div`
  transition-duration: 500ms;
  border: 2px solid ${props => props.theme.main_color};
  background-color: ${props => props.theme.learn_boxes};
  padding: 2rem;
  height: auto;
  border-radius: 2rem;
  grid-area: list;
`;

export const RightBox = styled.div`
  transition-duration: 500ms;
  border: 2px solid ${props => props.theme.main_color};
  background-color: ${props => props.theme.learn_boxes};
  padding: 2rem;
  height: auto;
  border-radius: 2rem;
  grid-area: sections;

  ul {
    padding-left: 1.5rem;
    color: ${props => props.theme.learn_sidebox_text};
  }
  
  p {
    color: ${props => props.theme.learn_sidebox_text};
  }
`;

export const MainBox = styled.div`
  padding: 1rem;
  transition-duration: 500ms;
  background-color: ${props => props.theme.learn_main_box};
  color: ${props => props.theme.learn_main_box_text};
  border: 2px solid ${props => props.theme.main_color};
  border-radius: 2rem;
  grid-area: content;
`;

export const TextP = styled.p`
  margin-bottom: .5rem;
`;

export const TextI = styled(TextP)`
  margin-left: 5vw;
  margin-right: 5vw;
`;

export const TextMain = styled.p`
  color: ${props => props.theme.main_color};
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: .5rem;
`;

export const TextLeft = styled(TextMain)`
  margin-top: 0;
  margin-bottom: 0;
`;

export const TextSideBar = styled.a`
  border: 2px solid transparent;

  :is(:hover, :focus-visible) {
    border: 2px solid ${props => props.theme.main_color};
  }

  :focus-visible {
    outline: 2px solid royalblue;
    outline-offset: -2px;
  }
`;

export const PageName = styled.p`
  color: ${props => props.theme.main_color};
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

export const ButtonToTop = styled.a`
  display: block;
  background-color: ${props => props.theme.learn_button};
  color: ${props => props.theme.learn_button_text};
  border-radius: 1rem;
  border: 2px solid ${props => props.theme.main_color};
  margin: 1rem auto 0;
  padding: 1rem;
  transition-duration: .3s;
  width: 10rem;
  text-align: center;

  :is(:hover, :focus-visible) {
    background-color: ${props => props.theme.main_color};
    color: #fff;
  }

  :focus-visible {
    outline: 2px solid royalblue;
    outline-offset: -2px;
  }
`;

export const SubjectsButtons = styled.a`
  display: block;
  background-color: ${props => props.theme.learn_button};
  color: ${props => props.theme.learn_button_text};
  border-radius: 1rem;
  border: 2px solid ${props => props.theme.main_color};
  margin: 1rem auto 0;
  padding: 1rem;
  transition-duration: .3s;
  text-align: center;

  :is(:hover, :focus-visible) {
    background-color: ${props => props.theme.main_color};
    color: #fff;
  }

  :focus-visible {
    outline: 2px solid royalblue;
    outline-offset: -2px;
  }
`;