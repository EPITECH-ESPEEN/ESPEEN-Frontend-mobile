/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, FlatList, View } from 'react-native';
import { colors } from '../../styles/colors';
import { ChevronDown } from 'lucide-react-native';
import { ISelecterItem } from '../../types/Selecter';
import { useTranslation } from 'react-i18next';


/* ----- PROPS ----- */
interface SelectorProps {
    options: ISelecterItem[];
    selectedValue: ISelecterItem | null;
    onItemChange: (item: ISelecterItem) => void;
    placeholder: string;
    baseTraduction: string;
    color?: keyof typeof colors;
}


/* ----- COMPONENT ----- */
const SelecterWithTraduction: React.FC<SelectorProps> = ({ options, selectedValue, onItemChange, placeholder, baseTraduction, color = "light" }) => {
    const { t } = useTranslation();
    const [isModalVisible, setModalVisible] = useState(false);

    const handleSelect = (value: { label: string, value: string }) => {
        onItemChange(value);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.selector, {borderColor: colors[color]}]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={[styles.text, {color: colors[color]}]}>
                    {selectedValue ? t(`${baseTraduction}${selectedValue.label}`) : t(`${baseTraduction}${placeholder}`)}
                </Text>
                <ChevronDown size={24} color={colors[color]} />
            </TouchableOpacity>

            <Modal visible={isModalVisible} transparent={true} animationType="fade">
                <TouchableOpacity
                    style={styles.modalOverlay}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.optionText}>{t(`${baseTraduction}${placeholder}`)}</Text>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => handleSelect(item)}
                                >
                                    <Text style={styles.optionText}>
                                        {t(`${baseTraduction}${item.label}`)}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginVertical: 10,
    },
    selector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.light,
        backgroundColor: 'transparent',
        width: '100%',
    },
    text: {
        fontFamily: 'montserrat-alternates-regular',
        fontSize: 18,
        color: colors.light,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        margin: 20,
        padding: 20,
        backgroundColor: colors.light,
        borderRadius: 10,
    },
    option: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    optionText: {
        fontFamily: 'montserrat-alternates-regular',
        fontSize: 18,
        color: colors.dark,
    },
});

export default SelecterWithTraduction;
