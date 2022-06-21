import {NotifBox, NotifButton} from "./notification.style";
import {getCookie, setCookies} from "cookies-next";
import {useEffect, useState} from "react";

const OPTIONS = {
    secure: process.env.IN_DEV === "false",
    sameSite: "lax"
};

const Notification = () => {
    const [get, set] = useState(null);

    useEffect(() => {
        set(getCookie("INFO") ?? null);
    }, []);

    const clicked = () => {
        set("true");
        setCookies("INFO", true, OPTIONS);
    }

    return (
        <>
            <NotifBox gotInfo={get}>
                <p>Strona używa ciasteczek do zapisywania języka oraz motywu strony</p>
                <NotifButton onClick={clicked}>OK</NotifButton>
            </NotifBox>
        </>
    );
}

export default Notification;