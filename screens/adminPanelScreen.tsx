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
import { textsStyle } from "../styles/textsStyle";
import { useTranslation } from "react-i18next";
import { teamMembers } from "../stores/Team";
import TeamMemberCard from "../components/card/TeamMemberCard";
import { ITeamMember } from "../types/Team";
import { useNavigation } from "@react-navigation/native";
import ClickableLine from "../components/inputs/clickableLine";
import { getUsers } from "../stores/Users";
import { IUser } from "../types/User";
import LoadingPage from "../components/loading/LoadingPage";
import TextInput from "../components/inputs/textInput";
import UserCard from "../components/card/UserCard";


/* ----- COMPONENT ----- */
const AdminPanelScreen: React.FC = () => {
    const [users, setUsers] = useState<IUser[] | null>(null);
    const [search, setSearch] = useState<string>("");
    const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUsers();
            setUsers(response);
            setFilteredUsers(response);
        }
        fetchData();
    }, []);

    if (users === null) return <LoadingPage />

    if (users.length === 0)
        return
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={[textsStyle.title, colorsStyle.red, styles.text]}>{t('admin.not_admin')}</Text>
            </ScrollView>

    function updateSearch(search: string) {
        if (users === null) return;
        setSearch(search);
        setFilteredUsers(users.filter(({ username }) => username.toLowerCase().includes(search.toLowerCase())));
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.searchContainer}>
                <TextInput label={t("admin.search")} value={search} onChangeText={updateSearch} color="dark" />
            </View>
            <View style={styles.libraryContainer}>
                {filteredUsers.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.dark,
        paddingTop: 100,
        paddingBottom: 40,
        paddingHorizontal: 20,
        gap: 40,
    },
    libraryContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    searchContainer: {
        width: '80%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    text: {
        textAlign: 'center',
    }
});


export default AdminPanelScreen;

