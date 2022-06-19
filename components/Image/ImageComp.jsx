import {useRouter} from "next/router";
import Image from "next/image";
import {ButtonBack, ImageLimiter, Main} from "./image.style";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const ImageP = () => {
    const {t} = useTranslation("common")

    const router = useRouter();
    const {image} = router.query;

    return (
        <>
            <Main>
                <Link href={"/gallery"} passHref>
                    <ButtonBack>
                        {t("goback")}
                    </ButtonBack>
                </Link>
                <ImageLimiter>
                    <Image src={`/images/gallery/${image}`} alt={image} layout={"fill"} objectFit={"contain"}/>
                </ImageLimiter>
            </Main>
        </>
    )
}
export default ImageP;