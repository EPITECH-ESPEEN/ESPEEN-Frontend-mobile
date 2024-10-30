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
import { useTranslation } from "react-i18next";
import { getUser, setUser as setStoredUser } from "../stores/User";
import { IUser } from "../types/User";
import { textsStyle } from "../styles/textsStyle";
import LoadingPage from "../components/loading/LoadingPage";
import TextInput from "../components/inputs/textInput";
import PasswordInput from "../components/inputs/passwordInput";
import ColoredButton from "../components/inputs/coloredButton";
import { useNavigation } from "@react-navigation/native";
import { fetchPost } from "../services/fetch";
import { reloadAsync } from "expo-updates";


/* ----- COMPONENT ----- */
const ModifyProfileScreen: React.FC = () => {
    const [user , setUser] = useState<IUser | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const { t } = useTranslation();
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getDatas = async () => {
            const user = await getUser();
            setUser(user);
            if (user !== null) {
                setEmail(user.email);
                setUsername(user.username);
            }
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

    if (user === null || username === null || email === null)
        return (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LoadingPage />
            </ScrollView>
        );

    const canSave = () => {
        if (username.length === 0 || email.length === 0)
            return false;
        if (password.length > 0 && password !== passwordConfirm)
            return false;
        return true;
    }

    const handleSave = async () => {
        if (!canSave()) return;
        setLoading(true);
        user.username = username;
        user.email = email;
        if (password.length > 0)
            user.password = password;
        const response = await fetchPost("user", user);
        if (!response.ok) {
            console.error("Error while saving user");
            setLoading(false);
            return;
        }
        setUser(user);
        setStoredUser(user);
        reloadAsync();
        setLoading(false);
    }

    const handleClear = () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    }

    const handleCancel = () => {
        navigate("Profile");
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {loading ?
                <LoadingPage /> :
                <>
                    <Text style={[textsStyle.title, colorsStyle.light]}>{t("profile.modify")}</Text>
                    <TextInput label={t("dico.username")} value={username} onChangeText={setUsername} color="dark" />
                    <TextInput label={t("dico.email")} value={email} onChangeText={setEmail} color="dark" />
                    <View style={styles.passwordContainer}>
                        <PasswordInput label={t("dico.password")} value={password} onChangeText={setPassword} color="dark" />
                        <PasswordInput label={t("dico.password_confirm")} value={passwordConfirm} onChangeText={setPasswordConfirm} color="dark" />
                        <Text style={[textsStyle.hint, colorsStyle.red, {textAlign: "center"}]}>{t("profile.modify_password")}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ColoredButton label={t("dico.save")} onPress={handleSave} color="green" disabled={!canSave()} />
                        <ColoredButton label={t("dico.clear")} onPress={handleClear} color="green" />
                        <ColoredButton label={t("dico.cancel")} onPress={handleCancel} color="red" />
                    </View>
                </>
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
        gap: 40,
        padding: 40,
    },
    passwordContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
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
});


export default ModifyProfileScreen;

