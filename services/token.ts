/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import AsyncStorage from '@react-native-async-storage/async-storage';


/* ----- FUNCTIONS ----- */
export const getToken = async (): Promise<string> => {
    const token = await AsyncStorage.getItem('authToken');
    return token || "";
}