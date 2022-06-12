import Image from "next/image";
import {Box, Container, ContainerText, ImageBox} from "./gallery.style";
import gallery from "/public/gallery_desc.json";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const Gallery = () => {
    const {t} = useTranslation("gallery");

    const images = [];
    for (const pictureData of gallery) {
        images.push(
            <ContainerBox pictureData={pictureData} t={t} key={pictureData.nameID}/>
        )
    }

    return (
        <>
            <Box>
                {images}
            </Box>
        </>
    );
}

const ContainerBox = ({pictureData, t}) => {
    return (
        <Link href={pictureData.src} as="a">
            <Container>
                <ImageBox>
                    <Image src={pictureData.src} alt={t(pictureData.nameID)} layout="fill"
                           blurDataURL={pictureData.src}
                           placeholder="blur"/>
                </ImageBox>
                <ContainerText>&quot;{t(pictureData.nameID)}&quot; ({pictureData.year} {t("year")})
                    fot. {pictureData.author}</ContainerText>
            </Container>
        </Link>
    )
}

export default Gallery;