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
import Text_ from "../components/overwrite/Text";
import { screensStyle } from "../styles/screensStyle";


/* ----- COMPONENT ----- */
const AreaScreen: React.FC = () => {
    return (
        <View style={screensStyle.screen}>
            <Text_>Area Screen</Text_>
        </View>
    );
};

export default AreaScreen;
