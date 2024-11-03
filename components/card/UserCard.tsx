/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { IUser } from "../../types/User";
import { textsStyle } from "../../styles/textsStyle";
import { colors, colorsStyle } from "../../styles/colors";
import { fetchDelete, fetchPost } from "../../services/fetch";
import { fetchUsers } from "../../stores/Users";
import { reloadAsync } from "expo-updates";
import { setToken } from "../../services/authService";
import IconButton from "../inputs/buttonIcon";
import { CircleChevronDown, CircleChevronUp, LogIn, Trash2 } from "lucide-react-native";


/* ----- PROPS ----- */
interface UserCardProps {
    user: IUser;
}


/* ----- COMPONENT ----- */
const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const { t } = useTranslation();

    const getFormattedDate = (date: string) => {
        const dateObject = new Date(date);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        return `${day}/${month}/${year}`;
    }


    const handleDelete = async () => {
        const response = await fetchDelete(`users/${user.uid}`);
        if (response.status === 200) {
            await fetchUsers();
            reloadAsync();
        }
    }

    const handleLogin = () => {
        setToken(user.user_token);
    }

    const handlePromote = async () => {
        user.role = user.role === 'admin' ? 'user' : 'admin';
        const response = await fetchPost(`users/${user.uid}`, user);
        const responseJson = await response.json();
        if (response.status === 200) {
            await fetchUsers();
            reloadAsync();
        }
    }

    return (
        <View style={styles.userCardContainer}>
            <View style={styles.infoContainer}>
                <Text style={[textsStyle.cardTitle, colorsStyle.dark]}>{t('dico.username')}</Text>
                <Text style={[textsStyle.cardText, colorsStyle.dark]}>{user.username}</Text>
                <Text style={[textsStyle.cardTitle, colorsStyle.dark]}>{t('dico.email')}</Text>
                <Text style={[textsStyle.cardText, colorsStyle.dark]}>{user.email}</Text>
                <Text style={[textsStyle.cardTitle, colorsStyle.dark]}>{t('dico.created_at')}</Text>
                <Text style={[textsStyle.cardText, colorsStyle.dark]}>{getFormattedDate(user.createdAt)}</Text>
                <Text style={[textsStyle.cardTitle, colorsStyle.dark]}>{t('dico.role')}</Text>
                <Text style={[textsStyle.cardText, colorsStyle.dark]}>{t(`dico.${user.role}`)}</Text>
            </View>
            <View style={styles.infoContainer}>
                <IconButton icon={Trash2} onPress={handleDelete} color='dark' size={24} />
                <IconButton icon={LogIn} onPress={handleLogin} color='dark' size={24} />
                <IconButton icon={user.role === 'admin' ? CircleChevronDown : CircleChevronUp} onPress={handlePromote} color='dark' size={24} />
            </View>
        </View>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    userCardContainer: {
        backgroundColor: colors.light,
        padding: 20,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 40,
        width: '100%',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
});


export default UserCard;

