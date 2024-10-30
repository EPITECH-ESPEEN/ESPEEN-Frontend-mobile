/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { textsStyle } from "../../styles/textsStyle";
import { colors, colorsStyle } from "../../styles/colors";
import { ITeamMember } from "../../types/Team";
import { teamPictures } from "../../stores/Team";


/* ----- PROPS ----- */
interface TeamMemberCardProps {
    member: ITeamMember;
}


/* ----- COMPONENT ----- */
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    const { t } = useTranslation();

    return (
        <View style={styles.card}>
            <Image style={styles.picture} source={teamPictures[member.role]} />
            <View style={styles.textContainer}>
                <Text style={[textsStyle.cardTitle, colorsStyle.light, styles.text]}>{member.name}</Text>
                <Text style={[textsStyle.cardText, colorsStyle.light, styles.text]}>{t(`team.${member.role}`)}</Text>
            </View>
        </View>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        width: '80%',
        padding: 20,
        gap: 10,
        backgroundColor: colors.green,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        textAlign: 'center',
    },
    picture: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
        borderRadius: 10,
        borderColor: colors.green,
        borderWidth: 4,
    },
});


export default TeamMemberCard;

