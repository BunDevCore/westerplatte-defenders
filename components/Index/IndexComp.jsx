import Image from "next/image";
import {QuoteBox, MainImageBox, QuoteName, ButtonsBox, ButtonLink, Main} from "./index.style";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {useEffect, useState} from "react";

const IndexC = () => {
    const {t} = useTranslation("common");
    const wide = ["napis_westerplatte_dlugie.jpg", "napis_nigdy_wiecej_wojny_dlugie.jpg"]
    const tall = ["pomnik_1.jpg", "pomnik_2.jpg"]
    const [rn, srn] = useState(0);

    useEffect(() => srn(Math.floor(Math.random() * 2)), []);

    return (
        <>
            <Main>
                <MainImageBox>
                    <Image src={`/images/main/${wide[rn]}`} alt="westerplatte" layout="fill" priority/>
                    <Image src={`/images/main/${tall[rn]}`} alt="westerplatte" layout="fill" priority/>
                </MainImageBox>
                <QuoteBox>
                    <p>{t("quote")}</p>
                    <QuoteName>- Irena Wronkowska</QuoteName>
                </QuoteBox>
                <ButtonsBox>
                    <Link href={"/learn/war"}>
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
        </>
    );
}

export default IndexC;