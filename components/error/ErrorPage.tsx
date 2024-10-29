/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, colorsStyle } from '../../styles/colors';
import { CircleArrowLeft } from 'lucide-react-native';
import IconButton from '../inputs/buttonIcon';
import { textsStyle } from '../../styles/textsStyle';

/* ----- PROPS ----- */
interface ErrorPageProps {
    error: string;
    onConfirm: () => void;
}


/* ----- COMPONENT ----- */
const ErrorPage: React.FC<ErrorPageProps> = ({ error, onConfirm }) => {
    return (
        <View style={styles.loaderContainer}>
            <Text style={[textsStyle.title, colorsStyle.red]}>{error}</Text>
            <IconButton icon={CircleArrowLeft} onPress={onConfirm} size={32} color="red"/>
        </View>
    );
};


/* ----- STYLES ----- */
const styles = StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
});

export default ErrorPage;
