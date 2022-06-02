import Image from "next/image";
import {QuoteBox, MainImageBox, QuoteName,ButtonsBox, ButtonLink} from "./index.style";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const IndexC = () => {
    const {t} = useTranslation("common");

    return (
        <>
            <main>
                <MainImageBox>
                    <Image src="/images/gallery/black_and_white_photo.jpg" alt="black and white photo" layout="fill"/>
                </MainImageBox>
                <QuoteBox>
                    <p>„ Moim jedynym przesłaniem jest, aby młodzi nigdy nie poznali wojny “</p>
                    <QuoteName>- Irena Wronkowska</QuoteName>
                </QuoteBox>
                <ButtonsBox>
                    <Link href={"/learn"}>
                            <ButtonLink>
                                {t("learn")}
                            </ButtonLink>
                    </Link>
                    <Link href={"/gallery"} passHref>
                        <ButtonLink>
                            {t("gallery")}
                        </ButtonLink>
                    </Link>
                    <Link href={"/quiz"} passHref>
                        <ButtonLink>
                            {t("quiz")}
                        </ButtonLink>
                    </Link>
                    <Link href={"/about"} passHref>
                        <ButtonLink>
                            {t("aboutUs")}
                        </ButtonLink>
                    </Link>
                </ButtonsBox>
            </main>
            <footer>test footer</footer>
        </>
    );
}

export default IndexC;