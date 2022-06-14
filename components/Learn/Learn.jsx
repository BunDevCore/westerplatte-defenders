import {
    ButtonToTop,
    LeftBox,
    Main,
    MainBox,
    PageName,
    RightBox,
    SubjectsButtons, TextErr,
    TextI,
    TextLeft,
    TextMain,
    TextP,
    TextSideBar
} from "./learn.style";
import useTranslation from "next-translate/useTranslation";
import {C} from "../global.style";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "../../pages/images/gallery/[image]";

const Learn = () => {
    const {t} = useTranslation("learn");
    const router = useRouter();
    const {learn_page} = router.query;
    const themes = ["war", "buildings", "westerplatte"];
    let errors = false;

    const mainContent = [];
    const sideBar = [];
    const themeButtons = [];

    for (const theme of themes) {
        themeButtons.push(<Link key={theme} href={`/learn/${theme}`}
                                passHref><SubjectsButtons>{t(theme)}</SubjectsButtons></Link>)
    }

    // for some reason some browsers ask for favicon and trigger this code
    if (learn_page !== null && themes.includes(learn_page)) {
        let content = t(`content.${learn_page}`, {count: 0}, {returnObjects: true});
        let key1 = 0;
        let key2 = 0;
        for (const name of content?.parts) {
            mainContent.push(
                <TextMain key={`${key1} theme`}
                          id={encodeURIComponent(name.replace(/\s/g, ""))}>{name.toUpperCase()}</TextMain>
            );
            sideBar.push(
                <li key={`${key1} section`}>
                    <Link href={`/learn/${learn_page}#${encodeURIComponent(name.replace(/\s/g, ""))}`} passHref>
                        <TextSideBar tabIndex={0}>{name}</TextSideBar>
                    </Link>
                </li>
            );
            for (const data of content?.sections[key2]) {
                if (!data.includes("/images/")) {
                    mainContent.push(
                        <TextP key={`${key1}.${key2} text`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data}</TextP>
                    )
                } else {
                    mainContent.push(
                //         <ImageBox>
                            <Image src={"/images/gallery/szlezwik_holsztyn.jpg"} alt={data} layout="fill"/>
                //         </ImageBox>
                    );
                }
                key1++;
            }
            key2++;
        }
    } else {
        errors = true;
    }

    return (
        <>
            <Main>
                {!errors && <LeftBox>
                    <C><TextLeft>{t("topics").toUpperCase()}</TextLeft></C>
                    {themeButtons}
                </LeftBox>
                }
                <MainBox>
                    {!errors && <>
                        <PageName>{t(`content.${learn_page}.name`)}</PageName>
                        {
                            t(`content.${learn_page}.introduction`) !== `content.${learn_page}.introduction` &&
                            <TextI>{t(`content.${learn_page}.introduction`)}</TextI>
                        }
                        {mainContent}
                        <Link href={`/learn/${learn_page}`} passHref><ButtonToTop
                            tabIndex={1}>{t("to-top")}</ButtonToTop></Link>
                    </>}

                    {errors && <>
                        <PageName>Nie znaleziono strony</PageName>
                        <TextErr>Kliknij temat, który byś chciał wybrac</TextErr>
                        {themeButtons}
                        <Link href={`/`} passHref><ButtonToTop>Powrót do strony głównej</ButtonToTop></Link>
                    </>}
                </MainBox>
                {!errors && <RightBox>
                    <p>{t("sections")}</p>
                    <ul>
                        {sideBar}
                    </ul>
                </RightBox>
                }
            </Main>
        </>
    );
}

export default Learn;
