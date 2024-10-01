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
import { Text, StyleSheet, View, Image } from "react-native";
import { Button } from 'react-native-paper';
import { textsStyle } from "../../styles/textsStyle";
import { colors, colorsStyle } from "../../styles/colors";
import { useTranslation } from "react-i18next";


/* ----- PROPS ----- */
interface CardProps {
    name: string;
    status: boolean;
    img: string;
    loginPath: string,
    logoutPath: string,
}

/* ----- COMPONENT ----- */
const LibraryCard: React.FC<CardProps> = ({ name, status, img, loginPath, logoutPath }) => {
    const { t } = useTranslation();

    const callPath = () => {
        const pathToCall = status ? logoutPath : loginPath;
        console.log(`${name}: ${status ? 'logout' : 'login'}`);
        // Call the path
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: img }} />
            <View style={styles.textsContainer}>
                <View>
                    <Text style={[textsStyle.text, colorsStyle.gray]}>{ t('dico.name') }</Text>
                    <Text style={[textsStyle.text, colorsStyle.dark]}>{name}</Text>
                </View>
                <View>
                    <Button mode="contained" onPress={callPath} buttonColor={status ? colors.green : colors.red} labelStyle={textsStyle.cardText}>
                        {status ? t('services.linked') : t('services.not_linked')}
                    </Button>
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
    },
});


export default LibraryCard;

