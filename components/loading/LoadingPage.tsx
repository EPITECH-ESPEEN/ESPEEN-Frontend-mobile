/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
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
            <ActivityIndicator size="large" color={colors.green} />
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
    },
});

export default LoadingPage;
