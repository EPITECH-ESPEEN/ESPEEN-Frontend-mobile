/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { colors, colorsStyle } from "../styles/colors";
import { logout } from "../services/authService";
import Button from "../components/inputs/button";
import { useTranslation } from "react-i18next";
import LangSelecter from "../components/special/LangSelecter";
import ColorBlindSelecter from "../components/special/ColorBlindSelector";
import { getUser } from "../stores/User";
import { IUser } from "../types/User";
import { textsStyle } from "../styles/textsStyle";
import LoadingPage from "../components/loading/LoadingPage";
import { useNavigation } from "@react-navigation/native";


/* ----- COMPONENT ----- */
const ProfileScreen: React.FC = () => {
    const [user , setUser] = useState<IUser | null>(null);
    const { t } = useTranslation();
    const { navigate } = useNavigation();

    const logoutButton = async () => {
        await logout();
    }

    useEffect(() => {
        const getDatas = async () => {
            const user = await getUser();
            setUser(user);
        }
        if (user === null) {
            getDatas();
        }
        const interval = setInterval(() => {
            if (user === null) {
                getDatas();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [user]);

    if (!user)
        return (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LoadingPage />
            </ScrollView>
        );

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={[textsStyle.title, colorsStyle.light]}>{t('dico.hello')} {user.username}</Text>
            <LangSelecter />
            <ColorBlindSelecter />
            <View style={styles.buttonContainer}>
                <Button
                    label={t('dico.modify_profile')}
                    onPress={() => navigate('modifyProfile')}
                />
                <Button
                    label={t('dico.logout')}
                    onPress={logoutButton}
                />
            </View>
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
    },
    buttonContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
});


export default ProfileScreen;

