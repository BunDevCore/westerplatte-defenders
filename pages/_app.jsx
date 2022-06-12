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
import {Footer, Flexbox} from "../components/global.style";
import useTranslation from "next-translate/useTranslation";

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
}

// dynamic global styling
const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${props => props.theme.background};
  }
`;

const App = ({Component, pageProps}) => {
    // create state for themes
    const [themeName, setThemeName] = useState(THEMES.LIGHT);

    // get translated words
    const {t} = useTranslation("common");

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
                    <title>{t("westerplatte-defenders")}</title>
                </Head>
                <Flexbox>
                    <Navbar changeTheme={changeTheme}/>
                    <GlobalStyles/>
                    <Component {...pageProps} />
                    <Footer><p>{t("common:project")}</p></Footer>
                </Flexbox>
            </ThemeProvider>
        </>
    )
}

export default App;