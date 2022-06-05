import { useRouter } from "next/router";
import Image from "next/image";

const ImageP = () => {
    const router = useRouter();
    const { image } = router.query;

    return (
        <>
            <Image src={`/images/gallery/${image}`} alt={image} layout={"fill"} objectFit={"contain"}/>
        </>
    )
}
export default ImageP;