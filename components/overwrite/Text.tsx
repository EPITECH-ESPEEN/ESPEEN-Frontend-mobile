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
import { Text, StyleSheet, TextProps } from "react-native";
import { colors } from "../../styles/colors";


/* ----- COMPONENT ----- */
const Text_: React.FC<TextProps> = (props) => {
    return (
        <Text {...props} style={[styles.defaultText, props.style]}>
            {props.children}
        </Text>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    defaultText: {
        color: colors.light,
        fontFamily: "montserrat-alternates-regular",
        fontSize: 16,
    },
});

export default Text_;
