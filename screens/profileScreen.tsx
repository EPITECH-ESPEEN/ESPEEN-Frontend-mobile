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
import { View } from "react-native";
import Text_ from "../components/overwrite/Text";
import { screensStyle } from "../styles/screensStyle";
import { logout } from "../services/authService";
import Button from "../components/inputs/button";
import { useNavigation } from "@react-navigation/native";


/* ----- COMPONENT ----- */
const ProfileScreen: React.FC = () => {
    const naviagtion = useNavigation();

    const logoutButton = async () => {
        await logout();
        naviagtion.navigate('Espeen');
    }

    return (
        <View style={screensStyle.screen}>
            <Text_>Profile Screen</Text_>
            <Button
                label="Logout"
                onPress={logoutButton}
            />
        </View>
    );
};

export default ProfileScreen;

