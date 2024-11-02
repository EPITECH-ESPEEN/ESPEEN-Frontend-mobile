/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { Button as PaperButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import { colors, colorsStyle } from "../../styles/colors";
import { textsStyle } from "../../styles/textsStyle";


/* ----- PROPS ----- */
interface ButtonProps {
    label: string;
    onPress: () => void;
}


/* ----- COMPONENT ----- */
const clickableLine: React.FC<ButtonProps> = ({ label, onPress }) => {
    return (
        <PaperButton
            mode="text"
            onPress={onPress}
            contentStyle={styles.buttonContent}
            labelStyle={[textsStyle.text, colorsStyle.gray, styles.label]}
        >
            {label}
        </PaperButton>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    buttonContent: {
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    label: {
        textDecorationLine: 'underline',
    },
});

export default clickableLine;
