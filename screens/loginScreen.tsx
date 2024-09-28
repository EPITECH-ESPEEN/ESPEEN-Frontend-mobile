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
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { textsStyle } from "../styles/textsStyle";
import { colors, colorsStyle } from "../styles/colors";
import EspeenIcon from "../components/icons/espeenIcon";
import LoginForm from "../components/form/loginForm";

/* ----- COMPONENT ----- */
const LoginScreen: React.FC = () => {
    const windowHeight = Dimensions.get('window').height;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.container, { height: windowHeight }]}>
                <EspeenIcon size={100} stroke={colors.green} />
                <Text style={[textsStyle.huge, colorsStyle.green, styles.textCenter]}>Espeen</Text>
                <Text style={[textsStyle.title, colorsStyle.green, styles.textCenter]}>Spin actions into reactions!</Text>
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
