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
import { Text, StyleSheet, View, Image, Linking } from "react-native";
import { Button } from 'react-native-paper';
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

    const callPath = async (action: IServiceButton) => {
        try {
            await Linking.openURL(`${getBaseUrl()}/${action.path}`);
        } catch (err) {
            console.error("Failed to open URL: ", err);
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: service.icon }} />
            <View style={styles.textsContainer}>
                <View>
                    <Text style={[textsStyle.text, colorsStyle.gray]}>{ t('dico.name') }</Text>
                    <Text style={[textsStyle.text, colorsStyle.dark]}>{service.name}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={[textsStyle.text, colorsStyle.gray]}>{ t('dico.actions') }</Text>
                    { service.buttons.map((action, index) => (
                        <Button key={index} mode="contained" onPress={() => callPath(action)} buttonColor={action.name === "linked" ? colors.green : action.name === "not_linked" ? colors.red : colors.dark} labelStyle={[textsStyle.cardText, colorsStyle.light]}>
                            {t(`services.${action.name}`)}
                        </Button>
                    ))}
                </View>
            </View>
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


export default ServiceCard;

