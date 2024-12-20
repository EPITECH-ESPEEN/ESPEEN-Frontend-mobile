/*
    Author:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchPost } from './fetch';
import { reloadAsync } from 'expo-updates';
import { getUser, setUser } from '../stores/User';
import { clearNodes } from '../stores/Nodes';
import { clearServices } from '../stores/Services';
import { clearUsers } from '../stores/Users';


/* ----- FUNCTIONS ----- */
const setTokenCookie = (token: string) => {
    // const expires = new Date();
    // expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000);
    // document.cookie = `authToken=${token};expires=${expires.toUTCString()};path=/`;
};

const deleteTokenCookie = () => {
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
        await getUser();
        return true;
    } else {
        return false;
    }
};

export const register = async (username: string, email: string, password: string): Promise<boolean> => {
    let responseJson;

    try {
        const response = await fetchPost("register", { username, email, password });
        if (!response.ok)
            return false;
        responseJson = await response.json();
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
    setUser(null);
    reloadAsync();
};

export const setToken = async (token: string): Promise<void> => {
    await AsyncStorage.setItem('authToken', token);
    setTokenCookie(token);
    clearNodes();
    clearServices();
    setUser(null);
    clearUsers();
    reloadAsync();
}
