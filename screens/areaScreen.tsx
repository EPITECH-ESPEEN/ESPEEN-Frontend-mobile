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
import { StyleSheet, ScrollView, Text } from "react-native";
import ReactDOMServer from 'react-dom/server';
import { colors, colorsStyle } from "../styles/colors";
import WebView from "react-native-webview";
import { textsStyle } from "../styles/textsStyle";


/* ----- COMPONENT ----- */
const AreaScreenContent: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={colorsStyle.light}>
                Area Page
            </div>
        </div>
    );
}

const AreaScreen: React.FC = () => {
    const htmlString = ReactDOMServer.renderToString(<AreaScreenContent />);

    return (
        <WebView
            source={{ html: htmlString }}
            style={styles.scrollContainer}
        />
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default AreaScreen;

