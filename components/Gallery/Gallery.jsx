import Image from "next/image";
import {Box, Container, ContainerText, ImageBox} from "./gallery.style";
import gallery from "/public/gallery_desc.json";
import useTranslation from "next-translate/useTranslation";

const Gallery = () => {
    const {t, _} = useTranslation("gallery");

    const images = [];
    for (const pictureData of gallery) {
        images.push(
            <ContainerBox pictureData={pictureData} t={t}/>
        )
    }

    return (
        <main>
            <Box>
                {images}
            </Box>
        </main>
    );
}

const ContainerBox = ({pictureData, t}) => {
    return (
        <Container>
            <ImageBox>
                <Image src={pictureData.src} alt={t(pictureData.nameID)} layout="fill"/>
            </ImageBox>
            <ContainerText>{t(pictureData.nameID)} - {t(pictureData.author)}</ContainerText>
        </Container>
    )
}

export default Gallery;