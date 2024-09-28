/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { StyleSheet, Text, TextInput as Input, View, TouchableOpacity } from "react-native";
import { colors } from "../../styles/colors";
import { Eye, EyeOff } from "lucide-react-native";

/* ----- PROPS ----- */
interface TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
}

/* ----- COMPONENT ----- */
const PasswordInput: React.FC<TextInputProps> = ({ label, value, onChangeText }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(!!value);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <View style={styles.inputGroup}>
            <Input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={onChangeText}
                value={value}
                style={styles.input}
                placeholder=""
                secureTextEntry={!isPasswordVisible}
                autoComplete="off"
            />
            <Text style={[styles.label, isFocused || value ? styles.labelFocused : {}]}>
                {label}
            </Text>
            <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
                {isPasswordVisible ? <EyeOff size={24} color={colors.light} /> : <Eye size={24} color={colors.light} />}
            </TouchableOpacity>
        </View>
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    inputGroup: {
        fontFamily: "montserrat-alternates-regular",
        position: "relative",
    },
    input: {
        fontFamily: "montserrat-alternates-regular",
        fontSize: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 60,
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
        backgroundColor: colors.green,
    },
    toggleButton: {
        position: "absolute",
        right: 10,
        top: 5,
        padding: 10,
    },
});

export default PasswordInput;
