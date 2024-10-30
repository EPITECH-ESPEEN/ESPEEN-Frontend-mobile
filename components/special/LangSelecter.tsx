/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';
import lang from "../../i18n/lang";
import { colors, colorsStyle } from "../../styles/colors";
import { textsStyle } from "../../styles/textsStyle";
import { changeLanguage } from "../../i18n/i18n";


/* ----- COMPONENT ----- */
const LangSelecter: React.FC = () => {
    const { t } = useTranslation();

    const currentFlag = lang.find((language) => language.code === i18n.language);

    return (
        <View style={styles.container}>
            <Text style={[textsStyle.title, colorsStyle.light]}>{t('languages.select_lang')}</Text>
            <View style={styles.buttonContainer}>
                {lang.map((language) => (
                    <View
                        onTouchEnd={() => changeLanguage(language.code)}
                        style={[styles.button, currentFlag?.code === language.code ? styles.activeButton : styles.inactiveButton]}
                        key={language.code}
                    >
                        <Image source={{uri: `https://flagsapi.com/${language.code.toLocaleUpperCase()}/flat/64.png`}} style={styles.img} />
                        <Text style={[textsStyle.text, colorsStyle.light]}>{t(language.name)}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    buttonContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 4,
        borderRadius: 10,
    },
    activeButton: {
        borderColor: colors.green,
    },
    inactiveButton: {
        borderColor: colors.gray,
    },
    img: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.green,
        objectFit: 'cover',
    }
});

export default LangSelecter;
