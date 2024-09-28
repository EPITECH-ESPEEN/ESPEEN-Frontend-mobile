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
    authToken = null;
};

export const getToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem('authToken');
};

export const setToken = async (token: string): Promise<void> => {
    await AsyncStorage.setItem('authToken', token);
};

export const login = async (username: string, password: string): Promise<{success: boolean, msg: string}> => {
    if (username === "admin" && password === "admin") {
        authToken = "admin";
        await AsyncStorage.setItem('authToken', "admin");
        return { success: true, msg: 'Authentication success' };
    }
    return { success: false, msg: 'Authentication failed' };

    // let data;
    // try {
    //     const response = await fetch("http://localhost:3000/api/user/login", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ username, password }),
    //     });
    //     if (!response.ok)
    //         return { success: false, msg: 'Authentication failed' };
    //     data = await response.json();
    // } catch (error) {
    //     console.error("Error during login:", error);
    // }
    // if (!data)
    //     return { success: false, msg: 'Authentication failed' };
    // if (!data.token)
    //     return { success: false, msg: 'Wrong username or password' };
    // authToken = data.token;
    // await AsyncStorage.setItem('authToken', data.token);
    // return { success: true, msg: 'Authentication success' };
};

export const register = async (username: string, password: string): Promise<{success: boolean, msg: string}> => {
    if (username === "admin") {
        return { success: false, msg: 'Username already taken' };
    } else {
        authToken = "admin";
        await AsyncStorage.setItem('authToken', "admin");
        return { success: true, msg: 'Registration success' };
    }

    // let data;
    // try {
    //     const response = await fetch("http://localhost:3000/api/user/register", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ username, password }),
    //     });
    //     if (!response.ok)
    //         return { success: false, msg: 'Registration failed' };
    //     data = await response.json();
    // } catch (error) {
    //     console.error("Error during registration:", error);
    // }
    // if (!data)
    //     return { success: false, msg: 'Registration failed' };
    // if (!data.token)
    //     return { success: false, msg: 'Username already taken' };
    // authToken = data.token;
    // await AsyncStorage.setItem('authToken', data.token);
    // return { success: true, msg: 'Registration success' };
};
