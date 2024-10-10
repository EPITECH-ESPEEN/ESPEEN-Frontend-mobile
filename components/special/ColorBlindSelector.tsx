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
import { View, Text, StyleSheet, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { colors, colorsStyle } from "../../styles/colors";
import { reloadAsync } from "expo-updates";
import { textsStyle } from "../../styles/textsStyle";
import { changeColorBlind, colorBlindSelecterItems, getActualColorBlind } from "../../services/colorBlind";
import { ISelecterItem } from "../../types/Selecter";
import SelecterWithTraduction from "../inputs/selecterWithTrad";


/* ----- COMPONENT ----- */
const ColorBlindSelecter: React.FC = () => {
    const { t } = useTranslation();
    const [colorBlind, setColorBlind] = useState<ISelecterItem | null>(getActualColorBlind());

    const handleColorBlindChange = async (item: ISelecterItem) => {
        await changeColorBlind(item.value);
        setColorBlind(item);
        reloadAsync();
    }

    return (
        <View style={styles.container}>
            <Text style={[textsStyle.title, colorsStyle.light]}>{t('color_blind.select_color_blind')}</Text>
            <SelecterWithTraduction
                options={colorBlindSelecterItems}
                selectedValue={colorBlind}
                onItemChange={handleColorBlindChange}
                placeholder="select_color_blind"
                baseTraduction="color_blind."
            />
        </View>
    );
};

/* ----- STYLES ----- */
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    }
});

export default ColorBlindSelecter;
