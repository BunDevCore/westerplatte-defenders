import Image from "next/image";
import {BlueBox, MainImageBox, QuoteName} from "./index.style";

const IndexC = () => {
    return (
        <main>
            <MainImageBox>
                <Image src="/images/gallery/black_and_white_photo.jpg" alt="black and white photo" layout="fill"/>
            </MainImageBox>
            <BlueBox>
                <p>„ Moim jedynym przesłaniem jest, aby młodzi nigdy nie poznali wojny “</p>
                <br/>
                <QuoteName>- Irena Wronkowska</QuoteName>
            </BlueBox>
        </main>
    );
}

export default IndexC;