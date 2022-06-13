import {Carrd, Github, Main, Name} from "./about.style";
import Link from "next/link";

const About = () => {
    const authors = [
        {
            imageSRC: "/images/lempek",
            name: "Piotr „Lempek” Lempkowski",
            github: "https://github.com/LempekPL",
            twitter: "https://twitter.com/LEMPEKPL"
        },
        {
            imageSRC: "/images/wikapo",
            name: "Wiktor „wiKapo” Polanowski",
            github: "https://github.com/wiKapo"
        }
    ]

    const sources = [
        "warhist.pl",
        "muzeum1939.pl",
        "pl.wikipedia.org/wiki/Obrona_Westerplatte"
    ]

    let cards = [];

    for (const author of authors) {
        cards.push(<Carrd key={author.name}>
            <Name>{author.name}</Name>
            <Link href={author.github} passHref>
                <Github>{author.github}</Github>
            </Link>
        </Carrd>);
    }

    return (<>
        <Main>
            {cards}
        </Main>
    </>);
}

export default About;