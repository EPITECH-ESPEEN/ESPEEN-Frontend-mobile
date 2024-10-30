/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, colorsStyle } from "../../styles/colors";
import { textsStyle } from "../../styles/textsStyle";
import Button from "../inputs/button";
import TextInput from "../inputs/textInput";
import PasswordInput from "../inputs/passwordInput";
import { login, register } from "../../services/authService";
import LoadingPage from "../loading/LoadingPage";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

/* ----- COMPONENT ----- */
const LoginForm: React.FC = () => {
    const [loginTab, setLoginTab] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation();
    const { t } = useTranslation();

    const reset = () => {
        setUsername("");
        setPassword("");
        setEmail("");
    }

    const validate = async () => {
        if (username.length === 0 || password.length === 0) {
            alert("Please fill all fields.");
            return;
        }

        const timeout = setTimeout(() => {
            setLoading(true);
        }, 200);

        if (loginTab) {
            const response = await login(username, password);
            if (!response) {
                postValidation(false, timeout, "Failed to login.");
                return;
            }
            postValidation(true, timeout);
        } else {
            const response = await register(username, email, password);
            if (!response) {
                postValidation(false, timeout, "Failed to register.");
                return;
            }
            postValidation(true, timeout);
        }
    }

    const postValidation = (ok: boolean, timeout: NodeJS.Timeout, msg?: string) => {
        if (!ok)
            alert(msg);
        clearTimeout(timeout);
        setLoading(false);
        if (ok) {
            reset();
            navigation.navigate('Espeen');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <View style={[styles.tab, { backgroundColor: loginTab ? colors.green : colors.green2 }]} onTouchEnd={() => setLoginTab(true)}>
                    <Text style={[textsStyle.title, colorsStyle.light]}>{ t('dico.login') }</Text>
                </View>
                <View style={[styles.tab, { backgroundColor: !loginTab ? colors.green : colors.green2 }]} onTouchEnd={() => setLoginTab(false)}>
                    <Text style={[textsStyle.title, colorsStyle.light]}>{ t('dico.register') }</Text>
                </View>
            </View>
            <View style={styles.form}>
                <View style={styles.inputs}>
                    <TextInput label={ t('dico.username') } value={username} onChangeText={setUsername} />
                    {!loginTab && <TextInput label={ t('dico.email') } value={email} onChangeText={setEmail} />}
                    <PasswordInput label={ t('dico.password') } value={password} onChangeText={setPassword} />
                </View>
                <View style={styles.buttons}>
                    <Button label={ t('dico.clear') } onPress={reset} />
                    <Button label={loginTab ? t('dico.login') : t('dico.register')} onPress={validate} />
                </View>
            </View>
            {loading && <LoadingPage />}
        </View>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 20,
        paddingBottom: 40,
        justifyContent: 'center',
    },
    form: {
        backgroundColor: colors.green,
        padding: 20,
        paddingTop: 50,
        paddingBottom: 50,
        gap: 40,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    inputs: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tabs: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,
    },
});

export default LoginForm;