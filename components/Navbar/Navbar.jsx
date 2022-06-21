import Link from "next/link";
import Image from "next/image";
import {
    NavigationBar, NavigationLeftSide,
    NavigationIcon, NavigationIconBox,
    NavigationItem, NavigationLang,
    NavigationRightSide, NavigationTheme,
} from "./navbar.style";
import sun from "/public/images/sun.svg";
import moon from "/public/images/moon.svg";
import useTranslation from "next-translate/useTranslation";
import {getCookie, setCookies} from "cookies-next";
import setLanguage from "next-translate/setLanguage";
import {useRouter} from "next/router";

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
};

const Navbar = ({changeTheme: changeTheme}) => {
    const {t, lang} = useTranslation("navbar");
    const router = useRouter();

    // callback for changing locale
    const changeLocale = (localeName) => {
        setCookies("NEXT_LOCALE", localeName, OPTIONS);
        (async () => {
            await setLanguage(localeName, false);
            // quiz needs to be reloaded
            // the translation doesn't update
            if (router.pathname === "/quiz") {
                router.reload();
            }
        })()
    }

    return (<>
        <NavigationBar>
            <NavigationLeftSide>
                <Link href="/" passHref>
                    <NavigationIcon tabIndex={-1}>
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
                <NavigationTheme tabIndex={0} onClick={() => {
                    getCookie("NEXT_THEME") === "dark" ? changeTheme("light") : changeTheme("dark")
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
