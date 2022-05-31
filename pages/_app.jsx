import {useEffect, useState} from "react";
import Head from "next/head";
// cookies
import {getCookie, setCookies} from "cookies-next";
// global styling
import "../styles/globals.css";
// theme
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import THEMES from "../util/theme/theme";
import {getTheme} from "../util/theme/getTheme";
// navbar
import Navbar from "../components/Navbar";
// making grid
// import {Grid} from "../components/grid.style";

const OPTIONS = {
  secure: process.env.IN_DEV === "false",
  sameSite: "lax"
}

const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${props => props.theme.background};
  }
`;

const App = ({Component, pageProps}) => {
  // set default theme
  const [themeName, setThemeName] = useState(THEMES.LIGHT);

  // change to save theme
  useEffect(() => setThemeName(getCookie("NEXT_THEME")), []);

  // callback for changing theme from another component
  const changeTheme = (themeName) => {
    setThemeName(themeName);
    setCookies("NEXT_THEME", themeName, OPTIONS);
  }

  return (
      <>
        <ThemeProvider theme={getTheme(themeName)}>
          <Head>
            <link href="favicon.ico" rel="icon" type="image/x-icon"/>
            <title>Obrońców Westerplatte</title>
          </Head>
          <Navbar changeTheme={changeTheme}/>
          <GlobalStyles/>
          {/*<Grid>*/}
            <Component {...pageProps} />
          {/*</Grid>*/}
        </ThemeProvider>
      </>
  )
}

export default App;