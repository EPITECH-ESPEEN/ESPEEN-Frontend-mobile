/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { StyleSheet, Modal } from "react-native";
import { Button } from 'react-native-paper';
import { WebView } from "react-native-webview";

/* ----- PROPS ----- */
interface ServiceCardProps {
    token: string;
    webViewUrl: string;
    onClose: () => void;
}

/* ----- COMPONENT ----- */
const WebViewWithCookies: React.FC<ServiceCardProps> = ({ token, webViewUrl, onClose }) => {
    const setAuthTokenCookie = `
        (function() {
            const expires = new Date();
            expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000); // 1-week expiration
            document.cookie = "authToken=${token};expires=" + expires.toUTCString() + ";path=/";
        })();
    `;

    const customUserAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Mobile Safari/537.36';

    return (
        <Modal animationType="slide" onRequestClose={() => onClose()}>
            <WebView
                source={{ uri: webViewUrl }}
                injectedJavaScript={setAuthTokenCookie}
                style={styles.webview}
                userAgent={customUserAgent}
            />
            <Button onPress={() => onClose()} mode="contained" style={styles.closeButton}>
                Close
            </Button>
        </Modal>
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    webview: {
        flex: 1,
    },
    closeButton: {
        margin: 10,
    },
});

export default WebViewWithCookies;
