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
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { Portal } from 'react-native-paper';


/* ----- COMPONENT ----- */
const LoadingPage = () => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={colors.light} />
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    },
});

export default LoadingPage;
