/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from "react";
import { View } from "react-native";
import { screensStyle } from "../styles/screensStyle";
import Text_ from "../components/overwrite/Text";


/* ----- COMPONENT ----- */
const EspeenScreen: React.FC = () => {
    return (
        <View style={screensStyle.screen}>
            <Text_>Espeen Screen</Text_>
        </View>
    );
};

export default EspeenScreen;

