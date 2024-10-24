/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Text_ from "../components/overwrite/Text";
import { colors } from "../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../services/authService";
import Button from "../components/inputs/button";
import { useTranslation } from "react-i18next";
import LangSelecter from "../components/special/LangSelecter";
import ColorBlindSelecter from "../components/special/ColorBlindSelector";
import { getUser, setUser } from "../stores/User";
import { IUser } from "../types/User";


/* ----- COMPONENT ----- */
const ProfileScreen: React.FC = () => {
    const [user , setUser] = useState<IUser | null>(null);
    const { t } = useTranslation();

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

