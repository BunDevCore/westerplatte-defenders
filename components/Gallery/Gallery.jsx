import Image from "next/image";
import {Box, Container, ContainerText, ImageBox, Main} from "./gallery.style";
import gallery from "/public/gallery_desc.json";
import useTranslation from "next-translate/useTranslation";
import {Footer} from "../global.style";

const Gallery = () => {
    const {t} = useTranslation("gallery");

    const images = [];
    for (const pictureData of gallery) {
        images.push(
            <ContainerBox pictureData={pictureData} t={t}/>
        )
    }

    return (
        <>
            <Main>
                <Box>
                    {images}
                </Box>
            </Main>
            <Footer>Project &quot;Śladami Obrońców Westerplatte&quot;</Footer>
        </>
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