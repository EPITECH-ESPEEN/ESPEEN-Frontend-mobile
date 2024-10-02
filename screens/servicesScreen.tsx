/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { colors } from "../styles/colors";
import ServiceCard from "../components/card/ServiceCard";
import TextInput from "../components/inputs/textInput";
import { IService } from "../types/Services";


/* ----- DATAS ----- */
const services: IService[] = [
    { name: "Github", status: false, icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", actions: [
        { name: "services.not_linked", path: "" },
    ] },
    { name: "Discord", status: true, icon: "https://support.discord.com/hc/user_images/Tb2e5KLD1N4L_3PFVZ2Uuw.png", actions: [
        { name: "services.linked", path: "" },
        { name: "services.add_bot", path: "" },
    ] },
    { name: "Spotify", status: false, icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDq7YmOwPrUEXB1gaGgWmgMYsqdYrtFu4sA&s", actions: [
        { name: "services.not_linked", path: "" },
    ] },
    { name: "Twitch", status: true, icon: "https://image.similarpng.com/very-thumbnail/2021/01/Twitch-logo-on-transparent-background-PNG.png", actions: [
        { name: "services.linked", path: "" },
    ] },
    { name: "Twitter", status: false, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png", actions: [
        { name: "services.not_linked", path: "" },
    ] },
    { name: "Youtube", status: true, icon: "https://img.freepik.com/vecteurs-premium/logo-youtube-rouge-logo-medias-sociaux_197792-1803.jpg?w=360", actions: [
        { name: "services.linked", path: "" },
    ] },
    { name: "Reddit", status: false, icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0neIueoYcxj62azhnFSpTxZFdQMcITEjCw&s", actions: [
        { name: "services.not_linked", path: "" },
    ] },
    { name: "Google", status: true, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png", actions: [
        { name: "services.linked", path: "" },
    ] },
    { name: "Facebook", status: false, icon: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png", actions: [
        { name: "services.not_linked", path: "" },
    ] },
    { name: "Instagram", status: true, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png", actions: [
        { name: "services.linked", path: "" },
    ] },
];

/* ----- COMPONENT ----- */
const ServicesScreen: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [filteredServices, setFilteredServices] = useState(services);

    function updateSearch(search: string) {
        setSearch(search);
        setFilteredServices(services.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())));
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.searchContainer}>
                <TextInput label="Search" value={search} onChangeText={updateSearch} color="dark" />
            </View>
            <View style={styles.libraryContainer}>
                {filteredServices.map((service: IService) => (
                    <ServiceCard service={service} key={service.name} />
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
});


export default ServicesScreen;

