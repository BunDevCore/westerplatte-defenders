import useTranslation from "next-translate/useTranslation";
import {Main, ButtonRedirect, ErrorText, ErrorSubText} from "./404.style";
import Link from "next/link";

const C404 = () => {
    const {t} = useTranslation("common");

    return (
        <>
            <Main>
                <ErrorText>404 - {t("not-found")}</ErrorText>
                <ErrorSubText>{t("couldnt-find")}</ErrorSubText>
                <Link href={"/"}>
                    <ButtonRedirect tabIndex={0}>
                        {t("navbar:home")}
                    </ButtonRedirect>
                </Link>
                <Link href={"/learn/war"}>
                    <ButtonRedirect tabIndex={0}>
                        {t("learn")}
                    </ButtonRedirect>
                </Link>
                <Link href={"/gallery"} passHref>
                    <ButtonRedirect tabIndex={0}>
                        {t("gallery")}
                    </ButtonRedirect>
                </Link>
                <Link href={"/quiz"} passHref>
                    <ButtonRedirect tabIndex={0}>
                        {t("quiz")}
                    </ButtonRedirect>
                </Link>
                <Link href={"/about"} passHref>
                    <ButtonRedirect tabIndex={0}>
                        {t("aboutUs")}
                    </ButtonRedirect>
                </Link>
            </Main>
        </>
    );
}
export default C404;