/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !        ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/


/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { colors, colorsStyle } from "../styles/colors";
import LoadingPage from "../components/loading/LoadingPage";
import { useTranslation } from "react-i18next";
import { atLeastOneActionReaction } from "../services/services";
import AreaPageContent from "../components/area/areaContent";
import { textsStyle } from "../styles/textsStyle";


/* ----- COMPONENT ----- */
const AreaScreen: React.FC = () => {
    const [has, setHas] = useState<boolean | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            const response = await atLeastOneActionReaction();
            setHas(response);
        };
        fetchData();
    }, []);

    if (has === null)
        return <LoadingPage />;

    return (
        <>
            {has ?
                <AreaPageContent />
                :
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={[colorsStyle.light, textsStyle.title, styles.textCenter]}>{t("area.no_action_reaction")}</Text>
                    <Text style={[colorsStyle.light, textsStyle.text, styles.textCenter]}>{t("area.subscribe_action_reaction")}</Text>
                </ScrollView>
            }
        </>
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
        paddingTop: 50,
        paddingBottom: 50,
    },
    textCenter: {
        textAlign: 'center',
    },
});

export default AreaScreen;
