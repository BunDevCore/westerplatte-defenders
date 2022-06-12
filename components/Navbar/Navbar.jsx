import Link from "next/link";
import Image from "next/image";
import {
    NavigationBar,
    NavigationIcon, NavigationIconBox,
    NavigationItem, NavigationLang, NavigationLeftSide,
    NavigationRightSide, NavigationTheme,
} from "./navbar.style";
import sun from "/public/images/sun.svg";
import moon from "/public/images/moon.svg";
import useTranslation from "next-translate/useTranslation";
import {getCookie, setCookies} from "cookies-next";
import setLanguage from "next-translate/setLanguage";

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
};

const Navbar = ({changeTheme: changeTheme}) => {
    const {t, lang} = useTranslation("navbar");

    // callback for changing locale
    const changeLocale = (localeName) => {
        (async () => {
            await setLanguage(localeName, false);
        })()
        setCookies("NEXT_LOCALE", localeName, OPTIONS);
    }

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
                <NavigationTheme onClick={() => {
                    getCookie("NEXT_THEME") === "light" ? changeTheme("dark") : changeTheme("light")
                }}>
                    <NavigationIconBox>
                        <Image src={sun} alt={t("changeTheme")} layout="fill"/>
                        <Image src={moon} alt={t("changeTheme")} layout="fill"/>
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