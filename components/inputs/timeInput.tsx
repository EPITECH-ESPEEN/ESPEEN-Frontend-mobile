/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { StyleSheet, Text, TextInput as Input, View } from "react-native";
import { colors } from "../../styles/colors";


/* ----- PROPS ----- */
interface TimeInputProps {
    label: string;
    value: string;
    onChange: (time: string) => void;
    color?: keyof typeof colors;
    borderColor?: keyof typeof colors;
}

/* ----- COMPONENT ----- */
const TimeInput: React.FC<TimeInputProps> = ({ label, value, onChange, color = "green", borderColor = "light" }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [previousValue, setPreviousValue] = useState("");

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(!!value);

    const handleTimeChange = (text: string) => {
        let formattedText = text.replace(/[^0-9:]/g, "");
        if (previousValue.length > formattedText.length && previousValue[2] === ":" && formattedText.length === 2) {
            setPreviousValue(formattedText);
            onChange(formattedText);
            return;
        }
        if (formattedText.length === 2 && !formattedText.includes(":"))
            formattedText += ":";
        if (formattedText.length > 5)
            formattedText = formattedText.slice(0, 5);
        const timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
        if (formattedText.match(timePattern) || formattedText === "" || formattedText.length < 5) {
            setPreviousValue(formattedText);
            onChange(formattedText);
        }
    };

    return (
        <View style={styles.inputGroup}>
            <Input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleTimeChange}
                value={value}
                style={[styles.input, { borderColor: colors[borderColor], color: colors[borderColor] }]}
                keyboardType="numeric"
                maxLength={5}
                placeholder=""
                autoComplete="off"
            />
            <Text style={[styles.label, { color: colors[borderColor] }, isFocused || value ? [styles.labelFocused, { backgroundColor: colors[color] }] : {}]}>
                {label}
            </Text>
        </View>
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    inputGroup: {
        fontFamily: "montserrat-alternates-regular",
        position: "relative",
        width: "100%",
    },
    input: {
        fontFamily: "montserrat-alternates-regular",
        fontSize: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
    },
    label: {
        fontFamily: "montserrat-alternates-bold",
        fontSize: 20,
        position: "absolute",
        left: 0,
        padding: 10,
        marginLeft: 10,
        marginTop: 4,
        pointerEvents: 'none',
    },
    labelFocused: {
        transform: [{ translateY: -18 }, { scale: 0.9 }],
        margin: 0,
        marginLeft: 10,
        marginTop: 0,
        paddingVertical: 8,
    },
});

export default TimeInput;
