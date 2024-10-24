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
import { fetchPost } from './fetch';
import { reloadAsync } from 'expo-updates';


/* ----- FUNCTIONS ----- */
const setTokenCookie = (token: string): void => {
    // const expires = new Date();
    // expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
    // document.cookie = `authToken=${token};expires=${expires.toUTCString()};path=/`;
};

const deleteTokenCookie = (): void => {
    // document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const login = async (username: string, password: string): Promise<boolean> => {
    let responseJson;

    try {
        const response = await fetchPost("login", { username, password });
        if (!response.ok)
            return false;
        responseJson = await response.json();
    } catch (error) {
        console.error("Error login:", error);
        return false;
    }
    if (responseJson.access_token) {
        await AsyncStorage.setItem('authToken', responseJson.access_token);
        setTokenCookie(responseJson.access_token);
        return true;
    } else {
        return false;
    }
};

export const register = async (username: string, email: string, password: string): Promise<boolean> => {
    let responseJson;

    try {
        const response = await fetchPost("register", { username, email, password });
        console.log(response);
        if (!response.ok)
            return false;
        responseJson = await response.json();
        console.log(responseJson);
    } catch (error) {
        console.error("Error register:", error);
        return false;
    }
    if (responseJson.access_token) {
        await AsyncStorage.setItem('authToken', responseJson.access_token);
        setTokenCookie(responseJson.access_token);
        return true;
    } else {
        return false;
    }
};

export const isAuthenticated = async (): Promise<boolean> => {
    const token = await AsyncStorage.getItem('authToken');
    return !!token;
};

export const logout = async (): Promise<void> => {
    await AsyncStorage.removeItem('authToken');
    deleteTokenCookie();
    reloadAsync();
};

export const getToken = async (): Promise<string> => {
    const token = await AsyncStorage.getItem('authToken');
    return token || "";
}