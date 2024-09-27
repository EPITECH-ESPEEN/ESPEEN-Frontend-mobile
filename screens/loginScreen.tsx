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
const LoginScreen: React.FC = () => {
    return (
        <View style={screensStyle.screen}>
            <Text_>Login Screen</Text_>
        </View>
    );
};

export default LoginScreen;

