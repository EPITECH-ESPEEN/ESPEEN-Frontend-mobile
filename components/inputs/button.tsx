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
import { Button as PaperButton } from "react-native-paper";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";


/* ----- PROPS ----- */
interface ButtonProps {
    label: string;
    onPress: () => void;
}


/* ----- COMPONENT ----- */
const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
    return (
        <PaperButton
            mode="text"
            onPress={onPress}
            contentStyle={styles.buttonContent}
            style={styles.container}
            labelStyle={styles.label}
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
        borderColor: colors.light,
        justifyContent: "center",
    },
    buttonContent: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    label: {
        fontFamily: "montserrat-alternates-bold",
        color: colors.light,
        fontSize: 20,
    },
});

export default Button;
