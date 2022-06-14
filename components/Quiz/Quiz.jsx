import {
    AnswerBox,
    AnswerButton,
    Congratulations,
    EndButton,
    Main,
    MainQuestion,
    Score,
    StartButton
} from "./quiz.style";
import useTranslation from "next-translate/useTranslation";
import {useState} from "react";

const Quiz = () => {
    const {t} = useTranslation("quiz");
    let [question, setQuestion] = useState(null);
    let used = [];
    let [currQ, setCurrQ] = useState(0);
    let [points, setPoints] = useState(0);
    const questionList = t("questions", {count: 0}, {returnObjects: true});
    let good = -1;

    const start = () => {
        used = [];
        points = 0;
        currQ = 0;
        changeQuestion();
    }

    const changeQuestion = () => {
        setCurrQ(currQ++);
        let random;
        if (used.length >= 18) {
            setQuestion(<>
                <Congratulations>{t("youAnswered")}</Congratulations>
                <Score>{t("yourScore")} {points}/{questionList.length} <br/>{Math.round(points/questionList.length * 100)}{"%"}</Score>
                <EndButton onClick={() => {
                    start()
                }}>{t("tryAgain")}</EndButton>
            </>);
        } else {
            do {
                random = Math.floor(Math.random() * questionList.length)
            } while (used.includes(random));
            used.push(random)
            let answers = [];
            let i = 0;
            for (const wrong of questionList[random].wrong) {
                let j = i;
                answers.push(<AnswerButton onClick={() => checkQuestion(j)} key={i}>{wrong}</AnswerButton>);
                i++;
            }
            good = i;
            answers.push(
                <AnswerButton onClick={() => checkQuestion(i)} key={i}>{questionList[random].good}</AnswerButton>
            );
            setQuestion(<>
                <MainQuestion>{questionList[random].question} {currQ}/{questionList.length}</MainQuestion>
                <AnswerBox>
                    {shuffle(answers)}
                </AnswerBox>
            </>);
        }
    }

    const checkQuestion = (answer) => {
        if (answer === good) {
            setPoints(points++);
        }
        changeQuestion();
    }

    return (<>
        <Main>
            {question == null && <StartButton onClick={() => {
                start()
            }}>{t("startQuiz")}</StartButton>}
            {question}
        </Main>
    </>);
}

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export default Quiz;