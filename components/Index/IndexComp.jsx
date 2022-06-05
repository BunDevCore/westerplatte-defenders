import Image from "next/image";
import {QuoteBox, MainImageBox, QuoteName, ButtonsBox, ButtonLink, Main} from "./index.style";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {Footer} from "../global.style";

const IndexC = () => {
    const {t} = useTranslation("common");

    return (
        <>
            <Main>
                <MainImageBox>
                    <Image src="/images/gallery/black_and_white_photo.jpg" alt="black and white photo" layout="fill"/>
                </MainImageBox>
                <QuoteBox>
                    <p>„ Moim jedynym przesłaniem jest, aby młodzi nigdy nie poznali wojny “</p>
                    <QuoteName>- Irena Wronkowska</QuoteName>
                </QuoteBox>
                <ButtonsBox>
                    <Link href={"/learn"}>
                            <ButtonLink tabIndex={0}>
                                {t("learn")}
                            </ButtonLink>
                    </Link>
                    <Link href={"/gallery"} passHref>
                        <ButtonLink tabIndex={0}>
                            {t("gallery")}
                        </ButtonLink>
                    </Link>
                    <Link href={"/quiz"} passHref>
                        <ButtonLink tabIndex={0}>
                            {t("quiz")}
                        </ButtonLink>
                    </Link>
                    <Link href={"/about"} passHref>
                        <ButtonLink tabIndex={0}>
                            {t("aboutUs")}
                        </ButtonLink>
                    </Link>
                </ButtonsBox>
            </Main>
            <Footer>{t("project")}</Footer>
        </>
    );
}

export default IndexC;