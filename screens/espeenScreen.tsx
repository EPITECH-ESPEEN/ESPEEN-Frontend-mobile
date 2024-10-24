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
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { colors, colorsStyle } from "../styles/colors";
import { textsStyle } from "../styles/textsStyle";
import { useTranslation } from "react-i18next";
import { teamMembers } from "../stores/Team";
import TeamMemberCard from "../components/card/TeamMemberCard";
import { ITeamMember } from "../types/Team";


/* ----- COMPONENT ----- */
const EspeenScreen: React.FC = () => {
    const { t } = useTranslation();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.textContainer}>
                <Text style={[textsStyle.huge, colorsStyle.light, styles.text]}>Espeen</Text>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>{t('espeen.moto')}</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>{t('espeen.presentation')}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={[textsStyle.huge, colorsStyle.light, styles.text]}>Espeen</Text>
                <Text style={[textsStyle.title, colorsStyle.light, styles.text]}>{t('espeen.team_presentation')}</Text>
                <Text style={[textsStyle.text, colorsStyle.light, styles.text]}>{t('espeen.team_description')}</Text>
            </View>
            {
                teamMembers.map((member: ITeamMember, index: number) => (
                    <TeamMemberCard key={index} member={member} />
                ))
            }
        </ScrollView>
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
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        padding: 50,
        gap: 20,
    },
    text: {
        textAlign: 'center',
    }
});


export default EspeenScreen;

