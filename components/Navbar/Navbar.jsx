import Link from "next/link";
import Image from "next/image";
import {
    NavigationBar,
    NavigationIcon, NavigationIconBox,
    NavigationItem, NavigationLang,
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
            await setLanguage(localeName);
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
            <Link href="/" passHref>
                <NavigationIcon>
                    <Image src="/images/logo.png" alt="OW logo" layout="fill"/>
                </NavigationIcon>
            </Link>
            <NavigationRightSide>
                <Link href="/" passHref>
                    <NavigationItem>
                        {t("home")}
                    </NavigationItem>
                </Link>
                <Link href="/learn" passHref>
                    <NavigationItem>
                        {t("learn")}
                    </NavigationItem>
                </Link>
                <Link href="/gallery" passHref>
                    <NavigationItem>
                        {t("gallery")}
                    </NavigationItem>
                </Link>
                <Link href="/quiz" passHref>
                    <NavigationItem>
                        {t("quiz")}
                    </NavigationItem>
                </Link>
                <Link href="/about" passHref>
                    <NavigationItem>
                        {t("aboutUs")}
                    </NavigationItem>
                </Link>
                <NavigationTheme>
                    <NavigationIconBox>
                        <Image src={test} alt={t("changeTheme")} layout="fill"/>
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