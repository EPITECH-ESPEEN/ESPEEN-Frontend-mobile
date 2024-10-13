/*
    Author:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Text_ from "../components/overwrite/Text";
import { colors } from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { useLazyLogoutQuery } from "../redux/api/authApi";
import Button from "../components/inputs/button";
import { useTranslation } from "react-i18next";
import LangSelecter from "../components/special/LangSelecter";
import ColorBlindSelecter from "../components/special/ColorBlindSelector";


/* ----- COMPONENT ----- */
const ProfileScreen: React.FC = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();

    const [logout] = useLazyLogoutQuery();

    const logoutButton = async () => {
        await logout();
        navigation.navigate('Espeen');
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <LangSelecter />
            <ColorBlindSelecter />
            <Button
                label={t('dico.logout')}
                onPress={logoutButton}
            />
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
        gap: 40,
    }
});


export default ProfileScreen;

