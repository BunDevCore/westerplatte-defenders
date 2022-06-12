import styled from "styled-components";

export const NavigationBar = styled.nav`
  background: ${props => props.theme.navbar_background};
  height: var(--navbar-height);
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  transition: filter 300ms, background-color 500ms;
`;

export const NavigationIcon = styled.a`
  --img-margin: 0.25rem;
  align-self: center;
  cursor: pointer;
  position: relative;
  height: calc(var(--navbar-height) - calc(2 * var(--img-margin)));
  margin: var(--img-margin);
  aspect-ratio: 1/1;

  img {
    object-fit: contain;
  }
`;

export const NavigationLeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

export const NavigationRightSide = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

export const NavigationItem = styled.a`
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  height: 100%;
  line-height: var(--navbar-height);
  cursor: pointer;
  tab-index: 0;
  background-color: ${props => props.theme.navbar_button};
  color: ${props => props.theme.navbar_text};
  filter: brightness(100%);
  transition: filter 300ms, background-color 500ms;

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(120%)"};
  }
`;

export const NavigationIconBox = styled.div`
  --img-margin: 1.5rem;

  @media (max-width: 500px) {
    --img-margin: .5rem;
  }

  align-self: center;
  cursor: pointer;
  position: relative;
  height: calc(var(--navbar-height) - calc(2 * var(--img-margin)));
  margin: var(--img-margin) 0.25rem;
  aspect-ratio: 1/1;
  user-select: none;

  img {
    object-fit: contain;
  }

  span:nth-child(1) {
    ${props => props.theme.type === "light" ? "" : "display: none !important;"}
  }

  span:nth-child(2) {
    ${props => props.theme.type === "light" ? "display: none !important;" : ""}
  }
`;

export const NavigationTheme = styled.button`
  display: block;
  border: none;
  background-color: ${props => props.theme.navbar_button};
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  height: 100%;
  line-height: var(--navbar-height);
  cursor: pointer;
  color: ${props => props.theme.navbar_theme_icon};
  filter: brightness(100%);
  transition: filter 300ms, background-color 500ms;

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(120%)"};
  }

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }

  @media (max-width: 500px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const NavigationLang = styled.button`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  height: 100%;
  line-height: var(--navbar-height);
  cursor: pointer;
  color: ${props => props.theme.navbar_text};
  filter: brightness(100%);
  border: none;
  background-color: ${props => props.theme.navbar_button};
  user-select: none;
  transition: filter 300ms, background-color 500ms;

  @media (max-width: 500px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(120%)"};
  }

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }
`;
