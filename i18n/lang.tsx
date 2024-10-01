/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import { ILang } from "../types/Lang";


/* ----- DATAS ----- */
const langsCodes = ["fr", "en", "ru"];

const lang: ILang[] = langsCodes.sort().map((code) => {
    return {
        name: `languages.${code}`,
        code: code,
        flag: `/img/flags/${code}.png`
    };
});

export default lang;