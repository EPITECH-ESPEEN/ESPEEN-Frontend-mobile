/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤
    ┏━U━━━U━━━━━━━━━━━━━┓
    ┃ Have a good day !             ┃
    ┗━━━━━━━━━━━━━━━━━━━┛
*/

/* ----- IMPORTS ----- */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


/* ----- DATAS ----- */
let authToken: string | null = null;


/* ----- FUNCTIONS ----- */
export const isAuthenticated = async (): Promise<boolean> => {
    if (authToken)
        return true;
    const token = await AsyncStorage.getItem('authToken');
    if (token)
        authToken = token;
    return !!token;
};

export const logout = async (): Promise<void> => {
    await AsyncStorage.removeItem('authToken');
    useNavigation().navigate('Espeen');
};

export const getToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem('authToken');
};

export const setToken = async (token: string): Promise<void> => {
    await AsyncStorage.setItem('authToken', token);
};
