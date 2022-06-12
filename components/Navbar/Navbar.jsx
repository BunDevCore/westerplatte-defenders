import Link from "next/link";
import Image from "next/image";
import {
    NavigationBar,
    NavigationIcon, NavigationIconBox,
    NavigationItem, NavigationLang, NavigationLeftSide,
    NavigationRightSide, NavigationTheme,
} from "./navbar.style";
import test from "/public/images/sun.svg";
import useTranslation from "next-translate/useTranslation";
import {useEffect, useState} from "react";
import {getCookie, setCookies} from "cookies-next";
import setLanguage from "next-translate/setLanguage";
import THEMES from "../../util/theme/theme";

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
};

const Navbar = ({chT}) => {
    const [isTheme, setTheme] = useState(THEMES.LIGHT);
    const {t, lang} = useTranslation("navbar");

    // callback for changing locale
    const changeLocale = (localeName) => {
        (async () => {
            await setLanguage(localeName, false);
        })()
        setCookies("NEXT_LOCALE", localeName, OPTIONS);
    }

    const changeTheme = (themeName) => {
        chT(themeName);
        setTheme(themeName);
    }

    useEffect(() => {
        setTheme(getCookie("NEXT_THEME") || "light")
    }, []);

    return (<>
        <NavigationBar>
            <NavigationLeftSide>
                <Link href="/" passHref>
                    <NavigationIcon>
                        <Image src="/images/logo.png" alt="OW logo" layout="fill"/>
                    </NavigationIcon>
                </Link>
                <Link href="/" passHref>
                    <NavigationItem>
                        {t("home")}
                    </NavigationItem>
                </Link>
            </NavigationLeftSide>
            <NavigationRightSide>
                <NavigationTheme>
                    <NavigationIconBox>
                        {/*<Image src={test} alt={t("changeTheme")} layout="fill"/>*/}
                    </NavigationIconBox>
                </NavigationTheme>
                <NavigationLang onClick={() => {
                    lang === "en" ? changeLocale("pl") : changeLocale("en")
                }}>
                    {lang.toUpperCase()}
                </NavigationLang>
            </NavigationRightSide>
        </NavigationBar>
    </>)
}

export default Navbar;