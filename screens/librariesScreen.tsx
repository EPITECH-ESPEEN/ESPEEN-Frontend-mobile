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
import { StyleSheet, ScrollView, View } from "react-native";
import Text_ from "../components/overwrite/Text";
import { colors } from "../styles/colors";
import LibraryCard from "../components/card/LibraryCard";


/* ----- DATAS ----- */
const libraries = [
    { name: "Discord", status: false, img: "https://support.discord.com/hc/user_images/Tb2e5KLD1N4L_3PFVZ2Uuw.png" },
    { name: "Github", status: true, img: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
    { name: "Spotify", status: true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDq7YmOwPrUEXB1gaGgWmgMYsqdYrtFu4sA&s" },
    { name: "Twitch", status: false, img: "https://image.similarpng.com/very-thumbnail/2021/01/Twitch-logo-on-transparent-background-PNG.png" },
    { name: "Twitter", status: true, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png" },
    { name: "Youtube", status: true, img: "https://img.freepik.com/vecteurs-premium/logo-youtube-rouge-logo-medias-sociaux_197792-1803.jpg?w=360" },
    { name: "Reddit", status: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0neIueoYcxj62azhnFSpTxZFdQMcITEjCw&s" },
    { name: "Google", status: true, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" },
    { name: "Facebook", status: true, img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" },
    { name: "Instagram", status: false, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" },
];

/* ----- COMPONENT ----- */
const LibrariesScreen: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text_>Libraries Screen</Text_>
            <View style={styles.libraryContainer}>
                {libraries.map(({ name, status, img}) => (
                    <LibraryCard name={name} status={status} img={img} key={name} />
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
    },
    libraryContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    }
});


export default LibrariesScreen;

