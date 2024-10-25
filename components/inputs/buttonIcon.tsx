/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { LucideIcon } from "lucide-react-native"; // Import LucideIcon type
import { colors } from "../../styles/colors";


/* ----- PROPS ----- */
interface IconButtonProps {
    icon: LucideIcon; // Type for lucide-react-native icon
    onPress: () => void;
    size?: number;
    color?: keyof typeof colors;
};


/* ----- COMPONENT ----- */
const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, onPress, size = 32, color = "green" }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Icon size={size} color={colors[color]} />
        </TouchableOpacity>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    button: {
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default IconButton;
