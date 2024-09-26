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
import { colors } from "../../assets/colors";


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
    },
});

export default Text_;
