/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, Modal } from "react-native";
import { textsStyle } from "../../styles/textsStyle";
import { colors, colorsStyle } from "../../styles/colors";
import { useTranslation } from "react-i18next";
import { IService } from "../../types/Services";
import LoadingPage from "../loading/LoadingPage";
import { isServiceLinked } from "../../services/services";
import { getToken } from "../../services/token";
import { Button } from "react-native-paper";

/* ----- PROPS ----- */
interface ServiceCardProps {
    service: IService;
}

/* ----- COMPONENT ----- */
const ServiceCardLocked: React.FC<ServiceCardProps> = ({ service }) => {
    const { t } = useTranslation();
    const [isLinked, setIsLinked] = useState<boolean | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);


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

    return (
        <>
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
                                    <Button key={index} mode="contained" onPress={() => setShowModal(true)} buttonColor={action.name === "linked" ? colors.green : action.name === "not_linked" ? colors.red : colors.dark} labelStyle={[textsStyle.cardText, colorsStyle.light]}>
                                        {t(`services.${action.name}`)}
                                    </Button>
                                );
                            })}
                        </View>
                    )}
                </View>
            </View>
            {showModal && (
                <Modal animationType="fade" onRequestClose={() => setShowModal(false)} style={styles.modal}>
                    <View style={styles.modal}>
                        <Text style={[textsStyle.huge, colorsStyle.light, styles.text]}>{t("mobile.sorry")}</Text>
                        <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>{t("mobile.action")}</Text>
                        <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>{t("mobile.web")}</Text>
                    </View>
                    <View style={styles.buttonContainerModal}>
                        <Button mode="contained" onPress={() => setShowModal(false)} buttonColor={colors.light} labelStyle={[textsStyle.cardText, colorsStyle.dark]} style={styles.closeButton}>
                            {t("dico.close")}
                        </Button>
                    </View>
                </Modal>
            )}
        </>
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
    modal: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
        padding: 20,
        gap: 20,
    },
    closeButton: {
        display: 'flex',
        padding: 10,
        borderRadius: 10,
    },
    buttonContainerModal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
        padding: 20,
    },
    text: {
        textAlign: 'center',
    }
});

export default ServiceCardLocked;
