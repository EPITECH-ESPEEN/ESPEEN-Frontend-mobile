/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../styles/colors";
import { ISelecterItem } from "../types/Selecter";


/* ----- DATAS ----- */
let color: string = "";

export const colorBlindSelecterItems: ISelecterItem[] = [
    {
        label: "default",
        value: "",
    },
    {
        label: "protanopia",
        value: "protanopia",
    },
    {
        label: "deuteranopia",
        value: "deuteranopia",
    },
    {
        label: "tritanopia",
        value: "tritanopia",
    },
    {
        label: "achromatopsia",
        value: "achromatopsia",
    },
]


/* ----- FUNCTIONS ----- */
const setDefaultColor = () => {
    colors.green = "#50C878";
    colors.green2 = "#3E935A";
    colors.red = "#FF6961";
}

const setProtanopiaColor = () => {
    colors.green = "#629D75";
    colors.green2 = "#4E8260";
    colors.red = "#949494";
}

const setDeuteranopiaColor = () => {
    colors.green = "#7C7C63";
    colors.green2 = "#696950";
    colors.red = "#D47474";
}

const setTritanopiaColor = () => {
    colors.green = "#69A785";
    colors.green2 = "#548E6F";
    colors.red = "#D97A6A";
}

const setAchromatopsiaColor = () => {
    colors.green = "#A8A8A8";
    colors.green2 = "#8F8F8F";
    colors.red = "#A9A9A9";
}

export async function changeColorBlind(colorBlind: string) {
    switch (colorBlind) {
        case "protanopia":
            setProtanopiaColor();
            break;
        case "deuteranopia":
            setDeuteranopiaColor();
            break;
        case "tritanopia":
            setTritanopiaColor();
            break;
        case "achromatopsia":
            setAchromatopsiaColor();
            break;
        default:
            setDefaultColor();
    }
    color = colorBlind;
    await AsyncStorage.setItem('colorBlind', colorBlind);
}

export async function setDefaultColorBlind() {
    color = await AsyncStorage.getItem('colorBlind') || "";
    if (color === "")
        setDefaultColor();
    else
        changeColorBlind(color);
}

export function getActualColorBlind() {
    const tmp = colorBlindSelecterItems.find(item => item.value === color);
    return tmp || colorBlindSelecterItems[0];
}