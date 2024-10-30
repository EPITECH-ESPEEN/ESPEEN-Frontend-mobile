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
interface TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    color?: keyof typeof colors;
}


/* ----- COMPONENT ----- */
const TextInput: React.FC<TextInputProps> = ({ label, value, onChangeText, color = "green" }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(!!value);

    return (
        <View style={styles.inputGroup}>
            <Input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={onChangeText}
                value={value}
                style={styles.input}
                placeholder=""
                autoComplete="off"
            />
            <Text style={[styles.label, isFocused || value ? [styles.labelFocused, {backgroundColor: colors[color]}] : {}]}>
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
        borderColor: colors.light,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        color: colors.light,
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
        color: colors.light,
    },
    labelFocused: {
        transform: [{ translateY: -18 }, { scale: 0.9 }],
        margin: 0,
        marginLeft: 10,
        marginTop: 0,
        paddingVertical: 8,
    },
});

export default TextInput;
