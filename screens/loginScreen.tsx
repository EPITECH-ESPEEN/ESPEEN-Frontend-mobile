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
import { screensStyle } from "../styles/screensStyle";
import { textsStyle } from "../styles/textsStyle";
import { colors, colorsStyle } from "../styles/colors";
import EspeenIcon from "../components/icons/espeenIcon";

/* ----- COMPONENT ----- */
const LoginScreen: React.FC = () => {
    const windowHeight = Dimensions.get('window').height; // Get the window height

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.container, { height: windowHeight }]}>
                <EspeenIcon size={100} stroke={colors.green} />
                <Text style={[textsStyle.huge, colorsStyle.green, styles.textCenter]}>Espeen</Text>
                <Text style={[textsStyle.title, colorsStyle.green, styles.textCenter]}>Spin actions into reactions!</Text>
            </View>
            <View>
                <Text style={[textsStyle.text, colorsStyle.light, styles.textCenter]}>Login screen</Text>
            </View>
        </ScrollView>
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Align items from the top
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
