/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/
/* ----- IMPORTS ----- */
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated, Easing } from "react-native";
import { textsStyle } from "../styles/textsStyle";
import { colors, colorsStyle } from "../styles/colors";
import EspeenIcon from "../components/icons/espeenIcon";
import LoginForm from "../components/form/loginForm";
import { ChevronsDown } from "lucide-react-native";

/* ----- COMPONENT ----- */
const LoginScreen: React.FC = () => {
    const windowHeight = Dimensions.get('window').height;

    const floatAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatAnim, {
                    toValue: -20, // Move up
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.quad),
                }),
                Animated.timing(floatAnim, {
                    toValue: 0, // Move down
                    duration: 1000,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.quad),
                }),
            ])
        ).start();
    }, [floatAnim]);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.container, { height: windowHeight }]}>
                <EspeenIcon size={100} stroke={colors.green} />
                <Text style={[textsStyle.huge, colorsStyle.green, styles.textCenter]}>Espeen</Text>
                <Text style={[textsStyle.title, colorsStyle.green, styles.textCenter]}>Spin actions into reactions!</Text>
                <Animated.View style={{ transform: [{ translateY: floatAnim }], marginTop: 80 }}>
                    <ChevronsDown size={56} stroke={colors.green} />
                </Animated.View>
            </View>
            <LoginForm />
        </ScrollView>
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.dark,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        textAlign: 'center',
    },
    textCenter: {
        textAlign: 'center',
    },
});

export default LoginScreen;
