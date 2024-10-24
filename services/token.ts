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


/* ----- FUNCTIONS ----- */
export const getToken = async (): Promise<string> => {
    const token = await AsyncStorage.getItem('authToken');
    return token || "";
}