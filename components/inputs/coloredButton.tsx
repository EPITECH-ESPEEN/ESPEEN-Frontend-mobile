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
import { colors } from "../../styles/colors";


/* ----- PROPS ----- */
interface ButtonProps {
    label: string;
    onPress: () => void;
    color?: keyof typeof colors;
    disabled?: boolean;
}


/* ----- COMPONENT ----- */
const ColoredButton: React.FC<ButtonProps> = ({ label, onPress, color = "light", disabled = false }) => {
    return (
        <PaperButton
            mode="text"
            onPress={onPress}
            contentStyle={styles.buttonContent}
            style={[styles.container, { backgroundColor: colors[color], opacity: disabled ? 0.5 : 1 }]}
            labelStyle={styles.label}
            disabled={disabled}
        >
            {label}
        </PaperButton>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 4,
        justifyContent: "center",
    },
    buttonContent: {
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    label: {
        fontFamily: "montserrat-alternates-bold",
        color: colors.light,
        fontSize: 18,
    },
});

export default ColoredButton;
