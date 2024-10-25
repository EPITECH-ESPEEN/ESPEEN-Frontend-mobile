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
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { colors, colorsStyle } from "../../styles/colors";
import IconButton from "../inputs/buttonIcon";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react-native";


/* ----- PROPS ----- */
interface SwiperProps {
    childrens: React.ReactNode[];
    deleteChild: (id: number) => void;
}


/* ----- COMPONENT ----- */
const Swiper: React.FC<SwiperProps> = ({ childrens, deleteChild }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const modifyInfex = (value: number) => {
        const newIndex = activeIndex + value;
        if (newIndex < 0)
            setActiveIndex(childrens.length - 1);
        else if (newIndex >= childrens.length)
            setActiveIndex(0);
        else
            setActiveIndex(newIndex);
    }

    return (
        <>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                { childrens[activeIndex] }
            </ScrollView>
            <View style={styles.buttonLeft}>
                <IconButton icon={ChevronLeft} onPress={() => modifyInfex(-1)} size={32} color="green"/>
            </View>
            <View style={styles.buttonRight}>
                <IconButton icon={ChevronRight} onPress={() => modifyInfex(1)} size={32} color="green"/>
            </View>
            <View style={styles.buttonBottom}>
                <Text style={colorsStyle.light}>{activeIndex + 1} / {childrens.length}</Text>
            </View>
            { activeIndex !== childrens.length - 1 &&
                <View style={styles.buttonTopRight}>
                    <IconButton icon={Trash2} onPress={() => deleteChild(activeIndex)} size={32} color="red"/>
                </View>
            }
        </>
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
        gap: 80,
        padding: 40,
    },
    buttonLeft: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY : -16 }],
    },
    buttonRight: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY : -16 }],
    },
    buttonBottom: {
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: [{ translateX : -16 }],
    },
    buttonTopRight: {
        position: 'absolute',
        top: 60,
        right: 15,
    },
});

export default Swiper;
