/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, Modal } from "react-native";
import { Button } from 'react-native-paper';
import { textsStyle } from "../../styles/textsStyle";
import { colors, colorsStyle } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { IService, IServiceButton } from "../../types/Services";
import { getBaseUrl } from "../../services/fetch";
import LoadingPage from "../loading/LoadingPage";
import { isServiceLinked } from "../../services/services";
import { getToken } from "../../services/token";
import { reloadAsync } from "expo-updates";
import WebViewWithCookies from "../webview/WebView";

/* ----- PROPS ----- */
interface ServiceCardProps {
    service: IService;
}

/* ----- COMPONENT ----- */
const ServiceCardWithWebView: React.FC<ServiceCardProps> = ({ service }) => {
    const { t } = useTranslation();
    const [webViewUrl, setWebViewUrl] = useState<string | null>(null);
    const [isLinked, setIsLinked] = useState<boolean | null>(null);
    const [token, setToken] = useState<string | null>(null);


    useEffect(() => {
        const getDatas = async () => {
            const linked = await isServiceLinked(service.name);
            setIsLinked(linked);
            const token = await getToken();
            setToken(token);
        };
        if (isLinked === null || token === null) {
            getDatas();
        }
    }, [isLinked, service.name]);

    if (isLinked === null || token === null) {
        return <LoadingPage />;
    }

    const openWebViewWithCookie = async (action: IServiceButton) => {
        const url = `${getBaseUrl()}/${action.path}`;
        setWebViewUrl(url);
    };

    const handleWebViewClose = () => {
        setWebViewUrl(null);
        reloadAsync();
    };

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: service.icon }} />
            <View style={styles.textsContainer}>
                <View>
                    <Text style={[textsStyle.text, colorsStyle.gray]}>{t('dico.name')}</Text>
                    <Text style={[textsStyle.text, colorsStyle.dark]}>{service.name}</Text>
                </View>
                { service.buttons.length > 0 && (
                    <View style={styles.buttonContainer}>
                        <Text style={[textsStyle.text, colorsStyle.gray]}>{t('dico.actions')}</Text>
                        {service.buttons.map((action, index) => {
                            if (action.name === "logout" && !isLinked) return null;
                            if (action.name === "not_linked" && isLinked) return null;
                            return (
                                <Button key={index} mode="contained" onPress={() => openWebViewWithCookie(action)} buttonColor={action.name === "linked" ? colors.green : action.name === "not_linked" ? colors.red : colors.dark} labelStyle={[textsStyle.cardText, colorsStyle.light]}>
                                    {t(`services.${action.name}`)}
                                </Button>
                            );
                        })}
                    </View>
                )}
            </View>
            { webViewUrl && <WebViewWithCookies token={token} webViewUrl={webViewUrl} onClose={handleWebViewClose} /> }
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
});

export default ServiceCardWithWebView;
