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
import { Text, StyleSheet, View, Image, Modal } from "react-native";
import { Button } from 'react-native-paper';
import { WebView } from "react-native-webview";
import { textsStyle } from "../../styles/textsStyle";
import { colors, colorsStyle } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { IService, IServiceButton } from "../../types/Services";
import { getBaseUrl } from "../../services/fetch";

/* ----- PROPS ----- */
interface ServiceCardProps {
    service: IService;
}

/* ----- COMPONENT ----- */
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const { t } = useTranslation();
    const [webViewUrl, setWebViewUrl] = useState<string | null>(null);

    const setAuthTokenCookie = `
        (function() {
            const expires = new Date();
            expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000); // 1-week expiration
            document.cookie = "authToken=abc;expires=" + expires.toUTCString() + ";path=/";
        })();
    `;

    const openWebViewWithCookie = async (action: IServiceButton) => {
        const url = `${getBaseUrl()}/${action.path}`;
        setWebViewUrl(url);
    };

    const customUserAgent = 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Mobile Safari/537.36';

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: service.icon }} />
            <View style={styles.textsContainer}>
                <View>
                    <Text style={[textsStyle.text, colorsStyle.gray]}>{t('dico.name')}</Text>
                    <Text style={[textsStyle.text, colorsStyle.dark]}>{service.name}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[textsStyle.text, colorsStyle.gray]}>{t('dico.actions')}</Text>
                    {service.buttons.map((action, index) => (
                        <Button key={index} mode="contained" onPress={() => openWebViewWithCookie(action)} buttonColor={action.name === "linked" ? colors.green : action.name === "not_linked" ? colors.red : colors.dark} labelStyle={[textsStyle.cardText, colorsStyle.light]}>
                            {t(`services.${action.name}`)}
                        </Button>
                    ))}
                </View>
            </View>

            {/* WebView Modal */}
            <Modal visible={!!webViewUrl} animationType="slide" onRequestClose={() => setWebViewUrl(null)}>
                <WebView
                    source={{ uri: webViewUrl || '' }}
                    injectedJavaScript={setAuthTokenCookie}
                    style={styles.webview}
                    userAgent={customUserAgent}
                />
                <Button onPress={() => setWebViewUrl(null)} mode="contained" style={styles.closeButton}>
                    Close
                </Button>
            </Modal>
        </View>
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    container: {
        width: '80%',
        display: "flex",
        flexDirection: "row",
        backgroundColor: colors.light,
        padding: 20,
        borderRadius: 20,
        gap: 20,
        alignItems: "center",
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    textsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: 20,
        width: '60%',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
    },
    webview: {
        flex: 1,
    },
    closeButton: {
        margin: 10,
    },
});

export default ServiceCard;
