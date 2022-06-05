import Image from "next/image";
import {Box, Container, ContainerText, ImageBox} from "./gallery.style";
import gallery from "/public/gallery_desc.json";
import useTranslation from "next-translate/useTranslation";
import {Footer} from "../global.style";

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
            <Footer>{t("common:project")}</Footer>
        </>
    );
}

const ContainerBox = ({pictureData, t}) => {
    return (
        <Container>
            <ImageBox>
                <Image src={pictureData.src} alt={t(pictureData.nameID)} layout="fill"/>
            </ImageBox>
            <ContainerText>&quot;{t(pictureData.nameID)}&quot; ({pictureData.year} {t("year")}) fot. {pictureData.author}</ContainerText>
        </Container>
    )
}

export default Gallery;